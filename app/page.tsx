"use client";
import { Amplify } from 'aws-amplify';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
import React from 'react';
import Link from "next/link";
Amplify.configure(awsExports);

const formFields = {
    signUp: {
        username: {
            labelHidden: false,
            placeholder: 'Enter your username here',
            isRequired: true,
            label: 'Username'
        },
        driverStatus: {
            labelHidden: false,
            placeHolder: 'Driver, Sponsor, Administrator',
            isRequired: true,
            label: 'Driver Status'
        },
        driverAddress1: {
            labelHidden: false,
            placeHolder: 'Address',
            isRequired: true,
            label: 'Address Line 1'
        },
        driverAddress2: {
            labelHidden: false,
            placeHolder: 'Apt #',
            isRequired: false,
            label: 'Address Line 2'
        },
        driverCity: {
            labelHidden: false,
            placeHolder: 'City',
            isRequired: true,
            label: 'City'
        },
        driverState: {
          labelHidden: false,
          placeHolder: 'State',
            isRequired: true,
            label: 'State'
        },
    },
}

/*function Home() {

    return (
        //Link for Login to... directs to some path specified from href, so basically no where for now

        <div>
            <h1 className={"text-3xl font-bold"}> Welcome Home</h1>
        </div>
    )
}

export default Home*/



//With logins

function Home() {


    return (
        <div>
            <div>
                <h1 className={"text-3xl font-bold"}> Welcome Home</h1>
            </div>
        </div>

    );
}
export default withAuthenticator(Home, {formFields});


//const inter = Inter({ subsets: ['latin'] })
/*
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information shopping_cart Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
*/
