"use client";
import {Amplify, Auth} from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
import React from 'react';
import Link from "next/link";
import {RxExit} from "react-icons/rx";
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
function Home() {


    return (
        <div>
            <h1 className={"text-3xl font-bold"}> Welcome Home</h1>
            <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded" onClick={() =>
                Auth.signOut()}><RxExit/>Logout
            </button>
        </div>

    )
};
export default withAuthenticator(Home, {formFields});
