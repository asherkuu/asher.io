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
          'bg-white dark:bg-black text-white dark:text-black',
          interVariable.className
        )}
      >
        <ThemeProvider>
          <Container>{children}</Container>
        </ThemeProvider>
        <AnalyticsProvider />
      </body>
    </html>
  )
}
