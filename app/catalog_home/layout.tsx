export default function CatalogLayout( {
    children, }: {
    children: React.ReactNode
    }) {
        return (
            <>
                <nav className={"text-3xl font-bold"}>iTunes Catalog!</nav>
                <main>
                    {children} 
                </main>
            </>
        ) 
    }