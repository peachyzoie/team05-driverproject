import Link from "next/link";
import React from "react";
import {FiBook, FiMonitor, FiMusic, FiFilm} from "react-icons/fi"
import { RxChatBubble, RxDashboard} from "react-icons/rx";

function CatalogHome() {
    return (
        <div>
            <h1 className={"text-1xl text-white font-bold" }>Catalog Directory</h1>
            <div  className="grid gap-16 grid-cols-fluid">
                <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Songs"><FiMusic />Top 50 Songs</Link>
                </button>
                <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5AudioBooks"><FiBook />Top 50 Audio Books</Link>
                </button>
                <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Shows"><FiMonitor />Top 50 Shows</Link>
                </button>
                <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Podcasts"><RxChatBubble />Top 50 Podcasts</Link>
                </button>
                <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Apps"><RxDashboard />Top 50 Apps</Link>
                </button>
                <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Movies"><FiFilm />Top 50 Movies</Link>
                </button>
            </div>
        </div>
    )
}
export default CatalogHome