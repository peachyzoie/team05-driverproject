import Link from "next/link";
import {RxPerson} from "react-icons/all";
import React from "react";

function Profile() {
    return (
    <div>
        <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
            <Link href = "/profile/account"><RxPerson/>Edit Account Information</Link>
        </button>
    </div>
    )
}
export default Profile