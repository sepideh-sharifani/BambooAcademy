import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from "../src/components/header";
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>آکادمی بامبو</title>
            </Head>
            <Header>
                <Component {...pageProps} />
            </Header>
        </>
    )
}