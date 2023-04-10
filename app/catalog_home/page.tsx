import Link from "next/link";
import React from "react";
import {FiBook, FiHeadphones, FiMusic, FiCoffee} from "react-icons/fi"
import { RxChatBubble, RxDashboard} from "react-icons/rx";

function CatalogHome() {
    return (
        <div>
            <div  className="grid gap-16 grid-cols-fluid">
                <h1 className={"text-3xl font-bold"}>Catalog Directory</h1>
            </div>

            <div  className="grid gap-16 grid-cols-fluid">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Songs"><FiMusic />Top 5 Songs</Link>
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5AudioBooks"><FiHeadphones />Top 5 Audio Books</Link>
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Books"><FiBook />Top 5 Books</Link>
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Podcasts"><RxChatBubble />Top 5 Podcasts</Link>
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link href = "/catalog_home/top5Apps"><RxDashboard />Top 5 Apps</Link>
                </button>
            </div>
        </div>
    )
}
export default CatalogHome