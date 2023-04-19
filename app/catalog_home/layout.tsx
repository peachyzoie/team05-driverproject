import React from "react";

export default function CatalogLayout( {
    children, }: {
    children: React.ReactNode
    }) {
        return (
            <>
                <nav className={"text-3xl font-bold"}>iTunes Catalog</nav>
                <hr></hr>
                <main>
                    {children} 
                </main>
            </>
        ) 
    }