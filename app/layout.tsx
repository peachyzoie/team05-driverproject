'use client';
import './globals.css'
import styles from "./page.module.css";
import Link from "next/link"
import { RxHome, RxExit } from "react-icons/rx"
import { FiShoppingCart, FiBookOpen } from "react-icons/fi";
import {Authenticator, withAuthenticator, useAuthenticator} from "@aws-amplify/ui-react";

// @ts-ignore
function RootLayout ({children}) {
    //children: React.ReactNode
    const { signOut } = useAuthenticator()
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
              <button onClick={() => signOut()}><RxExit/>Log Out</button>
          </div>
          <div className = {`${styles.content}`}>
              {children}
        </div>
          </body>
        </html>
      )
    }
export default withAuthenticator(RootLayout)