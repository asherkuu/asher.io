import React from 'react'
import {Inter} from '@next/font/google'
import clsx from 'clsx'

import AnalyticsProvider from '#/src/components/provider/AnalyticsProvider'
import ThemeProvider from '#/src/components/provider/ThemeProvider'
import Container from '#/src/components/Container'

import '#/styles/globals.css'

const interVariable = Inter()

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body
        className={clsx(
          interVariable.className,
          'bg-white dark:bg-black text-white dark:text-black'
        )}
      >
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
          <ThemeProvider>
            <Container>{children}</Container>
          </ThemeProvider>
        </div>
        <AnalyticsProvider />
      </body>
    </html>
  )
}
