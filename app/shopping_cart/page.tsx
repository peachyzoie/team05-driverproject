import Link from "next/link";
import {FiBookOpen} from "react-icons/fi";

function ShoppingCart() {
    return (
        <div>
            <p style={{fontWeight: "bold"}}> Still Shopping?</p>
            <Link href = "/catalog_home">Return to the Catalog</Link>
        </div>
    )
}
export default ShoppingCart