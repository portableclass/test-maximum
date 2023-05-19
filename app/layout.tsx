import '../assets/scss/globals.scss'
import { FC, ReactNode } from 'react'

type RootLayoutProps = {
    children: ReactNode
}

export const metadata = {
    title: 'test-maximum',
    description: 'test-maximum desc',
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
