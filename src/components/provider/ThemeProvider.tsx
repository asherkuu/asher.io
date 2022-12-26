'use client'

import React from 'react'
import {ThemeProvider as NextThemeProvider} from 'next-themes'

type ThemeProviderTypes = {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderTypes> = ({children}) => {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>
}

export default ThemeProvider
