import Link from 'next/link';
import React from 'react';
import {Outlet} from "react-router-dom";

function dashboard(){
    return(
        <div>
            <Link href = "/sponsor_dashboard_pages/drivers">
                <h1>Driver List</h1>
            </Link>
        </div>
    );
}

export default dashboard;