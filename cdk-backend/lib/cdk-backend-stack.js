"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkBackendStack = void 0;
const cdk = require("aws-cdk-lib");
const appsync = require("aws-cdk-lib/aws-appsync");
const ec2 = require("aws-cdk-lib/aws-ec2");
const rds = require("aws-cdk-lib/aws-rds");
const lambda = require("aws-cdk-lib/aws-lambda");
class CdkBackendStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        const api = new appsync.GraphqlApi(this, 'Team05-appsync-api', {
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
        const vpc = new ec2.Vpc(this, 'Team05-VPC-1', {
            vpcName: 'Team05-VPC-1',
        });
        //creating the serverless cluster
        const cluster = new rds.ServerlessCluster(this, 'Team05-aurora-cluster', {
            //the kind of database to start
            engine: rds.DatabaseClusterEngine.AURORA_MYSQL,
            //Additional parameters to pass to the database engine
            //
            //parameterGroup: rds.ParameterGroup.fromParameterGroupName(this, 'Team05-parametergroup',
            //    'default.aurora-mysql'),
            //Database name
            defaultDatabaseName: 'Team05_aurora',
            vpc,
            //credentials for admin user -----
            //credentials: {username: 'team5user'},
            //optional identifier ----
            //clusterIdentifier: 'team05-db-endpoint-test',
            //Instance will pause if the line below isn't implemented
            scaling: { autoPause: cdk.Duration.seconds(0) }
        });
        //Lambda function 'HANDLER'. All lambda functions go through this "gate"
        const postFn = new lambda.Function(this, 'Team05_lambda_handler', {
            runtime: lambda.Runtime.NODEJS_18_X,
            functionName: 'Team05_lambda_handler',
            //lambda-fns (or lambda functions folder) is the folder right above the "lib" folder.
            // It contains all lambda functions.
            code: new lambda.AssetCode('lambda-fns'),
            handler: 'index.handler',
            memorySize: 1024,
            environment: {
                CLUSTER_ARN: cluster.clusterArn,
                SECRET_ARN: cluster.secret?.secretArn || '',
                DB_NAME: 'Team05_aurora',
                AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
            },
        });
        //Granting iam access to the cluster from the lambda function
        cluster.grantDataApiAccess(postFn);
        const lambdaDs = api.addLambdaDataSource('Team05_lambdaDatasource', postFn);
        // Define resolvers to map GraphQL operations to the Lambda function
        lambdaDs.createResolver('getUserById', {
            typeName: 'Query',
            fieldName: 'getUserById',
        });
        lambdaDs.createResolver('createUser', {
            typeName: 'Mutation',
            fieldName: 'createUser'
        });
        lambdaDs.createResolver('deleteUser', {
            typeName: 'Mutation',
            fieldName: 'deleteUser'
        });
        //CFN output values. Purpose is to output these values in order to configure our application
        new cdk.CfnOutput(this, 'AppSyncAPIURL', {
            value: api.graphqlUrl
        });
        new cdk.CfnOutput(this, 'AppSyncAPIKey', {
            value: api.apiKey || ''
        });
        new cdk.CfnOutput(this, 'ProjectRegion', {
            value: this.region
        });
        // example resource
        /*
        const queue = new sqs.Queue(this, 'CdkBackendQueue', {
        visibilityTimeout: cdk.Duration.seconds(300)
        });
        */
    }
}
exports.CdkBackendStack = CdkBackendStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWJhY2tlbmQtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstYmFja2VuZC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFFbkMsbURBQW1EO0FBQ25ELDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsaURBQWlEO0FBRWpELE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM1QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLDZDQUE2QztRQUM3QyxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzdELElBQUksRUFBRSxvQkFBb0I7WUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDO1lBQzlELG1CQUFtQixFQUFFO2dCQUNuQixvQkFBb0IsRUFBRTtvQkFDcEIsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU87b0JBQ3BELFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3REO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCwwREFBMEQ7UUFDMUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDNUMsT0FBTyxFQUFFLGNBQWM7U0FDeEIsQ0FBQyxDQUFDO1FBR0gsaUNBQWlDO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRTtZQUN2RSwrQkFBK0I7WUFDL0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZO1lBQzlDLHNEQUFzRDtZQUN0RCxFQUFFO1lBQ0YsMEZBQTBGO1lBQzFGLDhCQUE4QjtZQUM5QixlQUFlO1lBQ2YsbUJBQW1CLEVBQUUsZUFBZTtZQUNwQyxHQUFHO1lBQ0gsa0NBQWtDO1lBQ2xDLHVDQUF1QztZQUN2QywwQkFBMEI7WUFDMUIsK0NBQStDO1lBQy9DLHlEQUF5RDtZQUN6RCxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUM7U0FDOUMsQ0FBQyxDQUFDO1FBR0gsd0VBQXdFO1FBQ3hFLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7WUFDaEUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxZQUFZLEVBQUUsdUJBQXVCO1lBQ3JDLHFGQUFxRjtZQUNyRixvQ0FBb0M7WUFDcEMsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDeEMsT0FBTyxFQUFFLGVBQWU7WUFDeEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFO2dCQUNYLFdBQVcsRUFBRSxPQUFPLENBQUMsVUFBVTtnQkFDL0IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxJQUFJLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixtQ0FBbUMsRUFBRSxHQUFHO2FBQ3pDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsNkRBQTZEO1FBQzdELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUUsb0VBQW9FO1FBQ3BFLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFDO1lBQ3BDLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxhQUFhO1NBQ3pCLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFO1lBQ3BDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFO1lBQ3BDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQTtRQUVGLDRGQUE0RjtRQUM1RixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN2QyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVU7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDdkMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRTtTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDbkIsQ0FBQyxDQUFDO1FBRUgsbUJBQW1CO1FBQ25COzs7O1VBSUU7SUFDSixDQUFDO0NBQ0Y7QUEvRkQsMENBK0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgYXBwc3luYyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBwc3luYyc7XG5pbXBvcnQgKiBhcyBlYzIgZnJvbSAnYXdzLWNkay1saWIvYXdzLWVjMic7XG5pbXBvcnQgKiBhcyByZHMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXJkcyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCBjbGFzcyBDZGtCYWNrZW5kU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBUaGUgY29kZSB0aGF0IGRlZmluZXMgeW91ciBzdGFjayBnb2VzIGhlcmVcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBwc3luYy5HcmFwaHFsQXBpKHRoaXMsICdUZWFtMDUtYXBwc3luYy1hcGknLCB7XG4gICAgICBuYW1lOiAnVGVhbTA1LWFwcHN5bmMtYXBpJyxcbiAgICAgIHNjaGVtYTogYXBwc3luYy5TY2hlbWFGaWxlLmZyb21Bc3NldCgnZ3JhcGhxbC9zY2hlbWEuZ3JhcGhxbCcpLFxuICAgICAgYXV0aG9yaXphdGlvbkNvbmZpZzoge1xuICAgICAgICBkZWZhdWx0QXV0aG9yaXphdGlvbjoge1xuICAgICAgICAgIGF1dGhvcml6YXRpb25UeXBlOiBhcHBzeW5jLkF1dGhvcml6YXRpb25UeXBlLkFQSV9LRVksXG4gICAgICAgICAgYXBpS2V5Q29uZmlnOiB7XG4gICAgICAgICAgICBleHBpcmVzOiBjZGsuRXhwaXJhdGlvbi5hZnRlcihjZGsuRHVyYXRpb24uZGF5cygzNjUpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy9jcmVhdGluZyBhIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCBmb3IgdGhlIEF1cm9yYSBkYXRhYmFzZVxuICAgIGNvbnN0IHZwYyA9IG5ldyBlYzIuVnBjKHRoaXMsICdUZWFtMDUtVlBDLTEnLCB7XG4gICAgICB2cGNOYW1lOiAnVGVhbTA1LVZQQy0xJyxcbiAgICB9KTtcblxuXG4gICAgLy9jcmVhdGluZyB0aGUgc2VydmVybGVzcyBjbHVzdGVyXG4gICAgY29uc3QgY2x1c3RlciA9IG5ldyByZHMuU2VydmVybGVzc0NsdXN0ZXIodGhpcywgJ1RlYW0wNS1hdXJvcmEtY2x1c3RlcicsIHtcbiAgICAgIC8vdGhlIGtpbmQgb2YgZGF0YWJhc2UgdG8gc3RhcnRcbiAgICAgIGVuZ2luZTogcmRzLkRhdGFiYXNlQ2x1c3RlckVuZ2luZS5BVVJPUkFfTVlTUUwsXG4gICAgICAvL0FkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBkYXRhYmFzZSBlbmdpbmVcbiAgICAgIC8vXG4gICAgICAvL3BhcmFtZXRlckdyb3VwOiByZHMuUGFyYW1ldGVyR3JvdXAuZnJvbVBhcmFtZXRlckdyb3VwTmFtZSh0aGlzLCAnVGVhbTA1LXBhcmFtZXRlcmdyb3VwJyxcbiAgICAgIC8vICAgICdkZWZhdWx0LmF1cm9yYS1teXNxbCcpLFxuICAgICAgLy9EYXRhYmFzZSBuYW1lXG4gICAgICBkZWZhdWx0RGF0YWJhc2VOYW1lOiAnVGVhbTA1X2F1cm9yYScsXG4gICAgICB2cGMsXG4gICAgICAvL2NyZWRlbnRpYWxzIGZvciBhZG1pbiB1c2VyIC0tLS0tXG4gICAgICAvL2NyZWRlbnRpYWxzOiB7dXNlcm5hbWU6ICd0ZWFtNXVzZXInfSxcbiAgICAgIC8vb3B0aW9uYWwgaWRlbnRpZmllciAtLS0tXG4gICAgICAvL2NsdXN0ZXJJZGVudGlmaWVyOiAndGVhbTA1LWRiLWVuZHBvaW50LXRlc3QnLFxuICAgICAgLy9JbnN0YW5jZSB3aWxsIHBhdXNlIGlmIHRoZSBsaW5lIGJlbG93IGlzbid0IGltcGxlbWVudGVkXG4gICAgICBzY2FsaW5nOiB7YXV0b1BhdXNlOiBjZGsuRHVyYXRpb24uc2Vjb25kcygwKX1cbiAgICB9KTtcblxuXG4gICAgLy9MYW1iZGEgZnVuY3Rpb24gJ0hBTkRMRVInLiBBbGwgbGFtYmRhIGZ1bmN0aW9ucyBnbyB0aHJvdWdoIHRoaXMgXCJnYXRlXCJcbiAgICBjb25zdCBwb3N0Rm4gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdUZWFtMDVfbGFtYmRhX2hhbmRsZXInLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMThfWCxcbiAgICAgIGZ1bmN0aW9uTmFtZTogJ1RlYW0wNV9sYW1iZGFfaGFuZGxlcicsXG4gICAgICAvL2xhbWJkYS1mbnMgKG9yIGxhbWJkYSBmdW5jdGlvbnMgZm9sZGVyKSBpcyB0aGUgZm9sZGVyIHJpZ2h0IGFib3ZlIHRoZSBcImxpYlwiIGZvbGRlci5cbiAgICAgIC8vIEl0IGNvbnRhaW5zIGFsbCBsYW1iZGEgZnVuY3Rpb25zLlxuICAgICAgY29kZTogbmV3IGxhbWJkYS5Bc3NldENvZGUoJ2xhbWJkYS1mbnMnKSxcbiAgICAgIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgICAgIG1lbW9yeVNpemU6IDEwMjQsXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBDTFVTVEVSX0FSTjogY2x1c3Rlci5jbHVzdGVyQXJuLFxuICAgICAgICBTRUNSRVRfQVJOOiBjbHVzdGVyLnNlY3JldD8uc2VjcmV0QXJuIHx8ICcnLFxuICAgICAgICBEQl9OQU1FOiAnVGVhbTA1X2F1cm9yYScsXG4gICAgICAgIEFXU19OT0RFSlNfQ09OTkVDVElPTl9SRVVTRV9FTkFCTEVEOiAnMSdcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy9HcmFudGluZyBpYW0gYWNjZXNzIHRvIHRoZSBjbHVzdGVyIGZyb20gdGhlIGxhbWJkYSBmdW5jdGlvblxuICAgIGNsdXN0ZXIuZ3JhbnREYXRhQXBpQWNjZXNzKHBvc3RGbik7XG4gICAgY29uc3QgbGFtYmRhRHMgPSBhcGkuYWRkTGFtYmRhRGF0YVNvdXJjZSgnVGVhbTA1X2xhbWJkYURhdGFzb3VyY2UnLCBwb3N0Rm4pO1xuXG4gICAgLy8gRGVmaW5lIHJlc29sdmVycyB0byBtYXAgR3JhcGhRTCBvcGVyYXRpb25zIHRvIHRoZSBMYW1iZGEgZnVuY3Rpb25cbiAgICBsYW1iZGFEcy5jcmVhdGVSZXNvbHZlcignZ2V0VXNlckJ5SWQnLHtcbiAgICAgIHR5cGVOYW1lOiAnUXVlcnknLFxuICAgICAgZmllbGROYW1lOiAnZ2V0VXNlckJ5SWQnLFxuICAgIH0pO1xuICAgIGxhbWJkYURzLmNyZWF0ZVJlc29sdmVyKCdjcmVhdGVVc2VyJywge1xuICAgICAgdHlwZU5hbWU6ICdNdXRhdGlvbicsXG4gICAgICBmaWVsZE5hbWU6ICdjcmVhdGVVc2VyJ1xuICAgIH0pO1xuICAgIGxhbWJkYURzLmNyZWF0ZVJlc29sdmVyKCdkZWxldGVVc2VyJywge1xuICAgICAgdHlwZU5hbWU6ICdNdXRhdGlvbicsXG4gICAgICBmaWVsZE5hbWU6ICdkZWxldGVVc2VyJ1xuICAgIH0pXG5cbiAgICAvL0NGTiBvdXRwdXQgdmFsdWVzLiBQdXJwb3NlIGlzIHRvIG91dHB1dCB0aGVzZSB2YWx1ZXMgaW4gb3JkZXIgdG8gY29uZmlndXJlIG91ciBhcHBsaWNhdGlvblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdBcHBTeW5jQVBJVVJMJywge1xuICAgICAgdmFsdWU6IGFwaS5ncmFwaHFsVXJsXG4gICAgfSk7XG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ0FwcFN5bmNBUElLZXknLCB7XG4gICAgICB2YWx1ZTogYXBpLmFwaUtleSB8fCAnJ1xuICAgIH0pO1xuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdQcm9qZWN0UmVnaW9uJywge1xuICAgICAgdmFsdWU6IHRoaXMucmVnaW9uXG4gICAgfSk7XG5cbiAgICAvLyBleGFtcGxlIHJlc291cmNlXG4gICAgLypcbiAgICBjb25zdCBxdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgJ0Nka0JhY2tlbmRRdWV1ZScsIHtcbiAgICB2aXNpYmlsaXR5VGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwKVxuICAgIH0pO1xuICAgICovXG4gIH1cbn1cbiJdfQ==