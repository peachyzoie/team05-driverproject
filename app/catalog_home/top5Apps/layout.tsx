export default function top5AppsLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav>Please enjoy browsing the top 50 Apps from the iTunes store!</nav>
            <main>
                {children}
            </main>
        </>
    )
}