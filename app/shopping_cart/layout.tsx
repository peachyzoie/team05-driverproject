import React from "react";

export default function ShoppingCartLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav className={"text-3xl font-bold"}>Your Shopping Cart</nav>
            <main>
                {children}
            </main>
        </>
    )
}