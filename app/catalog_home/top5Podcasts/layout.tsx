export default function top5PodcastsLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav>Please enjoy browsing the top 50 Podcasts from the iTunes store!</nav>
            <main>
                {children}
            </main>
        </>
    )
}