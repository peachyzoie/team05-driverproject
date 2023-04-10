import Link from "next/link";
import React from "react";
import {FiBook, FiMonitor, FiMusic, FiFilm} from "react-icons/fi"
import { RxChatBubble, RxDashboard} from "react-icons/rx";

function CatalogHome() {
    return (
        <div>
            <h1 className={"text-3xl font-bold"}>Catalog Directory</h1>
            <div  className="grid gap-16 grid-cols-fluid">
                <Link href = "/catalog_home/top5Songs"><FiMusic />Top 5 Songs</Link>
                <Link href = "/catalog_home/top5AudioBooks"><FiBook />Top 5 Audio Books</Link>
                <Link href = "/catalog_home/top5Shows"><FiMonitor />Top 5 Shows</Link>
                <Link href = "/catalog_home/top5Podcasts"><RxChatBubble />Top 5 Podcasts</Link>
                <Link href = "/catalog_home/top5Apps"><RxDashboard />Top 5 Apps</Link>
                <Link href = "/catalog_home/top5Movies"><FiFilm />Top 5 Movies</Link>
            </div>
        </div>
    )
}
export default CatalogHome