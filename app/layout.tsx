import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/scss/globals.scss'

type RootLayoutProps = {
    children: ReactNode
}

export const metadata: Metadata = {
    title: 'test-maximum',
    description: 'test-maximum desc',
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
