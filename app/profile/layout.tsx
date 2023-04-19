//import {FiShoppingCart} from "react-icons/fi";
import Link from "next/link";
import React from "react";
//import {RxPerson} from "react-icons/all";
import {Auth} from "aws-amplify";
import {RxExit} from "react-icons/rx";

export default function ProfileLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav className={"text-3xl font-bold"}>Your Profile</nav>
            <main>
                {children}
            </main>
        </>
    )
}