import Link from "next/link";
import fetchTop5 from "@/app/catalog_home/top5AudioBooks/fetchTop5";


async function Catalog() {
    return (
        fetchTop5()
    )
}
export default Catalog