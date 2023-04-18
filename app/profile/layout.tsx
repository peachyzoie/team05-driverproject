export default function ProfileLayout({
    children, }: {
        children: React.ReactNode
    }) {
    return (
        <>
            <nav>Welcome to the 'Profile' section of the GDIP!</nav>
            <main>
                {children}
            </main>
        </>
    )
}