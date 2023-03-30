import Link from 'next/link';

export default function driver_list(){
    return(
        <>
            <h1>Driver List</h1>
            <h2>
                <Link href = "/">
                    <a>Dashboard</a>
                </Link>
            </h2>
        </>
    )
}