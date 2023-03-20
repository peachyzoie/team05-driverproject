import Link from 'next/link'
import {withAuthenticator} from "@aws-amplify/ui-react";

function dashboard(){
    return(
        <div>
            <Link href = "/sponsor_dashboard_pages/drivers">
                <h1>Driver List</h1>
            </Link>
        </div>
    );
};

export default withAuthenticator(dashboard);