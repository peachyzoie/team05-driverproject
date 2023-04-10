import Link from "next/link";

function CatalogHome() {
    return (
            <div>
        <Link href = "/catalog_home/top5Songs">
            <h1>Top 5 Songs</h1>
        </Link>

        <Link href = "/catalog_home/top5AudioBooks">
            <h1>Top 5 Audio Books</h1>
        </Link>

                <Link href="/catalog_home/top5Books">
                    <h1>Top 5 Books</h1>
                </Link>

                <Link href="/catalog_home/top5Podcasts">
                    <h1>Top 5 Podcasts</h1>
                </Link>

                <Link href = "/>catalog_home/top5Apps">
                    <h1>Top 5 Apps</h1>
                </Link>
            </div>
    )
}
export default CatalogHome