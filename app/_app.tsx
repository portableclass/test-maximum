import { AppProps } from 'next/app'
import { FC } from 'react'
import RootLayout from './layout'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}

App.getInitialProps = async () => {
    const pageProps = {
        some: 'ssfffs'
    }

    // try {
    //     let data = await getAppData(CLIENTID)
    //     pageProps['data'] = data
    // } catch (error) {}

    return { pageProps }
}
