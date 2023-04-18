export default function ShoppingCartLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav>Welcome to the Shopping Cart!</nav>
            <main>
                {children}
            </main>
        </>
    )
}