import Link from "next/link";
import {Auth} from "aws-amplify";

async function logOut() {
    return (
        Auth.signOut()
    )
}

export default logOut
