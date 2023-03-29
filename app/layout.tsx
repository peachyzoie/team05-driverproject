//'use client';
//import './globals.css'
import styles from "./page.module.css";
import Link from "next/link"
//import { useSelectedLayoutSegment} from "next/navigation";

export default function RootLayout({ children }) {
    //children: React.ReactNode

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <div className={`${styles.sidebar}`}>
          <Link href="/">Home</Link>
          <Link href = "/about">About</Link>
          <Link href = "/profile">Profile</Link>
      </div>
      <div className = {`${styles.content}`}>
          {children}
    </div>
      </body>
    </html>
  )
}
