"use client";
import { Amplify, Auth } from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
import React from 'react';
import Link from "next/link";
Amplify.configure(awsExports);
// @ts-ignore

const formFields = {
    signUp: {
        driverFirstName:{
            labelHidden: false,
            placeHolder: 'First Name',
            isRequired: true,
            label: 'User First Name'
        },
        driverLastName: {
           labelHidden: false,
           placeHolder: 'Last Name',
           isRequired: true,
           label: 'User Last Name'
        },
        driverStatus: {
            labelHidden: false,
            placeHolder: 'Driver, Sponsor, Administrator',
            isRequired: true,
            label: 'Account Type'
        },
        driverAddress1: {
            labelHidden: false,
            placeHolder: 'Address',
            isRequired: true,
            label: 'Address Line 1'
        },
        driverAddress2: {
            labelHidden: false,
            placeHolder: 'Apt #',
            isRequired: false,
            label: 'Address Line 2'
        },
        driverCity: {
            labelHidden: false,
            placeHolder: 'City',
            isRequired: true,
            label: 'City'
        },
        driverState: {
          labelHidden: false,
          placeHolder: 'State',
            isRequired: true,
            label: 'State'
        },
    },
}


// @ts-ignore
function Home({formFields}) {


    return (
        <div>
            <div>
                <h1 className={"text-3xl font-bold"}> Welcome Home</h1>
            </div>
        </div>

    );
}
export default withAuthenticator(Home, {formFields});
