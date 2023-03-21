"use client";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
import React from 'react';
import Link from "next/link";
//import { useRouter } from 'next/router';
Amplify.configure(awsExports);

//With logins
function Home() {
    return (
        <div>

            <Link href={"../src"}>
                <h1>Login to the Driver Incentive Program</h1>
            </Link>
            <li><Link href = "/src/pages/sponsor_dashboard">
                Dashboard
            </Link></li>
        </div>

    );
}

/*
export default function Home() {
    return (
        //Link for Login to... directs to some path specified from href, so basically no where for now
        <div>
            <Link href={"../src"}>
                <h1>Login to the Driver Incentive Program</h1>
            </Link>
        </div>

    );
}
*/

export default withAuthenticator(Home);