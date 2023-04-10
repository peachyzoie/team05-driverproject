import Link from "next/link";
import React from "react";

function CatalogHome() {
    return (
        <div>
            <h1 className={"text-3xl font-bold"}>Catalog Directory</h1>
            <div  className="grid gap-16 grid-cols-fluid">
                <Link href = "/catalog_home/top5Songs">Top 5 Songs</Link>
                <Link href = "/catalog_home/top5AudioBooks">Top 5 Audio Books</Link>
                <Link href = "/catalog_home/top5Books">Top 5 Books</Link>
                <Link href = "/catalog_home/top5Podcasts">Top 5 Podcasts</Link>
                <Link href = "/catalog_home/top5Apps">Top 5 Apps</Link>
            </div>
        </div>
    )
}
export default CatalogHome