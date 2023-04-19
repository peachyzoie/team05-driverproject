import Link from "next/link";
import {RxPerson} from "react-icons/all";
import React from "react";


function Profile() {
    return (
        <div>
            <p><text className={"text-1xl font-bold"}>Edit Account Information</text></p>
            <form action="/send-data-here" method="post">
                <p><label className="underline" htmlFor="pfp">Profile Picture:</label></p>
                <input type="file" id="pfp" name="pfp" accept="image/png, image/jpeg"/>
                <p><label className="underline" htmlFor="first">First Name:</label></p>
                <input type="text" id="first" name="first"/>
                <p><label className="underline" htmlFor="last">Last Name:</label></p>
                <input type="text" id="last" name="last"/>
                <p><label className="underline" htmlFor="birthday">Birthday:</label></p>
                <input type="date" id="birthday" name="birthday"/>
                <p><label className="underline" htmlFor="address1">Address Line 1:</label></p>
                <input type="text" id="address1" name="address1"/>
                <p><label className="underline" htmlFor="address2">Address Line 2:</label></p>
                <input type="text" id="address2" name="address2"/>
                <p><label className="underline" htmlFor="city">City:</label></p>
                <input type="text" id="city" name="city"/>
                <p><label className="underline" htmlFor="state">State:</label></p>
                <input type="text" id="state" name="state"/>
                <p><label className="underline" htmlFor="email">Email:</label></p>
                <input type="email" id="email" name="email"/>
                <p><label className="underline" htmlFor="phone">Phone Number:</label></p>
                <input type="number" id="phone" name="phone"/>
                <p><button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded" type="submit">
                        Submit Changes
                </button></p>
            </form>
        </div>
    )
}
export default Profile