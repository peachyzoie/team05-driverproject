import Link from "next/link";
import {Auth} from 'aws-amplify';

function logOut() {
    return (
        Auth.signOut()
    )
}
export default logOut