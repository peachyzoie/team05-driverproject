//'use client';
import './globals.css'
import styles from "./page.module.css";
import Link from "next/link"
import { RxHome, RxExit } from "react-icons/rx"

// @ts-ignore
export default function RootLayout ({children}) {
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
          <Link href="/"><RxHome /></Link>
          <Link href = "/about">About</Link>
          <Link href = "/profile">Profile</Link>
          <Link href = "/catalog_home">Catalog</Link>
          <Link href = "/"><RxExit /></Link>
      </div>
      <div className = {`${styles.content}`}>
          {children}
    </div>
      </body>
    </html>
  )
}
