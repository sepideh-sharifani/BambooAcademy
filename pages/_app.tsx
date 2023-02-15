import type {AppProps} from 'next/app'
import Header from "../src/components/header";
import '../styles/globals.css'

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <Header>
            <Component {...pageProps} />
        </Header>
    )
}