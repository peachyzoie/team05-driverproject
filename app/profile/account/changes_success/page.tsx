import Link from "next/link";
import {RxPerson} from "react-icons/all";
import React from "react";
import Profile from "@/app/profile/account/page";
import {FiMusic} from "react-icons/fi";


function Changes_Successful() {
    return (
        <div>
            <p><text className={"text-1xl font-bold"}>Changes Successful!</text></p>
            <p><button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded" type="submit">
                <Link href = "../profile">Back to Profile</Link>
            </button></p>
        </div>
    )
}
export default Changes_Successful