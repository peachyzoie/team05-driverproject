import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const api = new appsync.GraphqlApi(this, 'Api', {
      name: 'Team05-appsync-api',
      schema: appsync.SchemaFile.fromAsset('graphql/schema.graphql'),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
          apiKeyConfig: {
            expires: cdk.Expiration.after(cdk.Duration.days(365))
          }
        },
      },
    });
    //creating a virtual private cloud for the Aurora database
    const vpc = new ec2.Vpc(this, 'Team05-vpc', {
      vpcName: 'Team05-vpc',
    });


    //creating the serverless cluster
    const cluster = new rds.ServerlessCluster(this, 'Team05-aurora-cluster', {
      //the kind of database to start
      engine: rds.DatabaseClusterEngine.AURORA_MYSQL,
      //Additional parameters to pass to the database engine
      //
      parameterGroup: rds.ParameterGroup.fromParameterGroupName(this, 'Team05-parametergroup',
                                              'Team05-parametergroup'),
      //Database name
      defaultDatabaseName: 'Team05-aurora',
      vpc,
      //credentials for admin user -----
      //credentials: {username: 'team5user'},
      //optional identifier ----
      //clusterIdentifier: 'team05-db-endpoint-test',
      //Instance will pause if the line below isn't implemented
      scaling: {autoPause: cdk.Duration.seconds(0)}
    });


    //Lambda function
    const postFn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: new lambda.AssetCode('lamda-fns'),
      handler: 'index.handler',
      memorySize: 1024,
      environment: {
        CLUSTER_ARN: cluster.clusterArn,
        SECRET_ARN: cluster.secret?.secretArn || '',
        DB_NAME: 'Team05-aurora',
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
      },
    });
    //Granting iam access to the cluster from the lambda function
    cluster.grantDataApiAccess(postFn);
    const lambdaDs = api.addLambdaDataSource('lambdaDatasource', postFn);

    // Define resolvers to map GraphQL operations to the Lambda function
    lambdaDs.createResolver('mutationDelete',{
      typeName: 'Mutation',
      fieldName: 'deletePost'
    });

    // example resource
    /*
    const queue = new sqs.Queue(this, 'CdkBackendQueue', {
    visibilityTimeout: cdk.Duration.seconds(300)
    });
    */
  }
}
