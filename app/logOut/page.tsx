import Link from "next/link";
import {Auth} from 'aws-amplify';
import React from "react";

const logout = async () => {
    await Auth.signOut();
};

function logOut() {
    return (
        <div>
            <h1 className={"text-3xl font-bold"}> Logging out...</h1>
        </div>
    )
}
export default logout()