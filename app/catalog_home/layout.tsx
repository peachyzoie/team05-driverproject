export default function CatalogLayout( {
    children, }: {
    children: React.ReactNode
    }) {
        return (
            <>
                <nav>Please enjoy browsing our iTunes Catalog!</nav>
                <main>
                    {children} 
                </main>
            </>
        ) 
    }