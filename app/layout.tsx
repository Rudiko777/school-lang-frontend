import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from '@/processes/redux/ReduxProvider/ReduxProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { mainTheme } from '@/processes/themes'

export const metadata: Metadata = {
    title: 'School-Languages',
    description: 'School-Languages - best investment',
    icons: {
        icon: 'favicon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={mainTheme}>
                        <ReduxProvider>{children}</ReduxProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
