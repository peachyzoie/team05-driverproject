export default function top5SongsLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav>Please enjoy browsing the top 50 Songs from the iTunes store!</nav>
            <main>
                {children}
            </main>
        </>
    )
}