import styles from './styles.module.css'

export default function top5AppsLayout({
    children, }: {
        children: React.ReactNode
    }) {
        
        /* This css changes only the top5Apps dir, and can be changed to make each fetch call unique to the given media. */ 
        return (
        <>
            <nav className={"text-1xl font-bold"}>Top 50 Apps</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}