import styles from './styles.module.css'

export default function top5AppsLayout({
    children, }: {
        children: React.ReactNode
    }) {
        
        /* This css changes only the top5Apps dir, and can be changed to make each fetch call unique to the given media. */ 
        return (
        <>
            <nav>Please enjoy browsing the top 50 Apps from the iTunes store!</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}