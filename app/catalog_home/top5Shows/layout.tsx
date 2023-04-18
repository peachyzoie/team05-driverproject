export default function top5ShowsLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav>Please enjoy browsing the top 50 Shows from the iTunes store!</nav>
            <main>
                {children}
            </main>
        </>
    )
}