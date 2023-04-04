import Link from "next/link";
import fetchTop5 from "@/app/catalog_home/fetchTop5";

async function Catalog() {
    return (
        //<h2>This is the catalog home page</h2>
    fetchTop5()
    )
}
export default Catalog