//'use client';
import './globals.css'
import styles from "./page.module.css";
import Link from "next/link"
import { RxHome, RxExit } from "react-icons/rx"
import { FiShoppingCart, FiBookOpen, FiUsers } from "react-icons/fi";
import {Authenticator} from "@aws-amplify/ui-react";
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
          <Link href="/"><RxHome />Home</Link>
          <Link href = "/catalog_home"><FiBookOpen />Catalog</Link>
          <Link href = "/shopping_cart"><FiShoppingCart/>Shopping Cart</Link>
          <Link href  = "/profile"><FiUsers/>Profile</Link>
          <Link href = "/"><RxExit />Logout</Link>
      </div>
      <div className = {`${styles.content}`}>
          {children}
    </div>
      </body>
    </html>
  )
}

