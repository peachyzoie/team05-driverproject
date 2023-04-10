import React from "react";
import Image from "next/image";
import 'tailwindcss/tailwind.css'
import {FiShoppingCart} from "react-icons/fi";
import Link from "next/link"


async function fetchTop5() {
    const data = await fetch(
        `https://itunes.apple.com/us/rss/toppaidapplications/limit=5/explicit=true/json`
    )
    const res = await data.json()
    //console log for debugging / viewing the json output
    console.log(res)
    const apps = res.feed.entry; // Access the 'entry' property of the 'feed' object
    return (
        <div>
            <h1 className={"text-3xl font-bold"}> Top 5 Apps on iTunes</h1>
            <div  className="grid gap-16 grid-cols-fluid">
                {apps.map((app: any) => (
                    <div key={app.id.label}> {/* Use a unique key for each element */}
                        <p>{app.title?.label}</p> {/* Use optional chaining to check if the 'title' property exists */}
                        {/*<p>{song["im:artist"]?.name?.label}</p> /!* Use optional chaining to check if the 'im:artist' and 'name' properties exist *!/*/}
                        <Image src={app["im:image"][2].label} width={150} height={150} alt={app.title?.label}/>
                        <p>Points: {Math.ceil(parseFloat(app["im:price"].attributes.amount))}</p>
                        <button className="bg-white hover:verdigris text-payne-gray font-semibold hover:text-verdigris py-2 px-4 border border-black-olive hover:border-transparent rounded">
                            <p><Link href = "/shopping_cart"><FiShoppingCart />Add to Cart</Link></p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
//https://rss.applemarketingtools.com/ gonna use this as reference to make the sponsor catalog maker.
//then fetch and display price in poiints
//then add a button for adding to cart.
export default fetchTop5;
