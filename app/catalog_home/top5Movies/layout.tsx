export default function top5MoviesLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav>Please enjoy browsing the top 50 Movies from the iTunes store!</nav>
            <main>
                {children}
            </main>
        </>
    )
}