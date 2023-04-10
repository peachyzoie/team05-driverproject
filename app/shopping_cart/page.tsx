import Link from "next/link";
import {FiBookOpen} from "react-icons/fi";

function ShoppingCart() {
    return (
        <div>
            <p style={{fontWeight: "bold"}}> Still Shopping?</p>
            <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
                <Link href = "/catalog_home">Return to the Catalog</Link>
            </button>
        </div>
    )
}
export default ShoppingCart