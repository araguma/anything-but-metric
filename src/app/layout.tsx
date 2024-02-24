import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'

import '@/app/globals.css'
import { ThemeProvider } from '@/providers/theme-provider'

export const metadata: Metadata = {
    title: 'Anything but Metric',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <Analytics />
            <SpeedInsights />
            <body>
                <ThemeProvider attribute="class" enableSystem>
                    <Suspense>{children}</Suspense>
                </ThemeProvider>
            </body>
        </html>
    )
}
