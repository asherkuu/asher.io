'use client'

import React from 'react'
import {ThemeProvider as NextThemeProvider} from 'next-themes'

type ThemeProviderProps = {
  children: React.ReactElement
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>
}

export default ThemeProvider
