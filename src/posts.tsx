
import React from "react";
import {GetServerSideProps} from "next";
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/auth";
import getUserById from "@/cdk-backend/lambda-fns/getUserById";
import Link from "next/link";


export default function Home() {


    return (
        <div>

            <Link href={"../src"}>
                <h1>HOME</h1>
            </Link>
        </div>

    );
}