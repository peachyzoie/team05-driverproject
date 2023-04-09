import React from "react";
import Image from "next/image";
import 'tailwindcss/tailwind.css'
import {FiShoppingCart} from "react-icons/fi";
import Link from "next/link"


async function fetchTop5() {
    const data = await fetch(
        `https://rss.applemarketingtools.com/api/v2/us/audio-books/top/10/audio-books.json`
    )
    const res = await data.json()
    //console log for debugging / viewing the json output
    console.log(res)
    const audio_books = res.feed.entry; // Access the 'entry' property of the 'feed' object
    return (
        <div>
            <h1 className={"text-3xl font-bold"}> Top 5 Books on iTunes</h1>
            <div  className="grid gap-16 grid-cols-fluid">
                {audio_books.map((book: any) => (
                    <div key={book.id.label}> {/* Use a unique key for each element */}
                        <p>{book.title?.label}</p> {/* Use optional chaining to check if the 'title' property exists */}
                        {/*<p>{song["im:artist"]?.name?.label}</p> /!* Use optional chaining to check if the 'im:artist' and 'name' properties exist *!/*/}
                        <Image src={book["im:image"][2].label} width={150} height={150} alt={book.title?.label}/>
                        <p>Points: {Math.ceil(parseFloat(book["im:price"].attributes.amount))}</p>
                        <p><Link href = "/shopping_cart"><FiShoppingCart />Add to Cart</Link></p>
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
