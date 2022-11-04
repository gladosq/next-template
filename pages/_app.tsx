import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
// @ts-ignore
import NProgress from 'nprogress';
import '../styles/global.scss';

function App({Component, pageProps}: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleStart = (url: string) => {
            NProgress.start()
        }

        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router]);

    return (
        <main>
            <Component {...pageProps} />
        </main>
    )
}

export default App;
