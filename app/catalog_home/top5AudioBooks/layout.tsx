export default function top5AudioBooksLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav>Please enjoy browsing the top 50 Audio Books from the iTunes store!</nav>
            <main>
                {children}
            </main>
        </>
    )
}