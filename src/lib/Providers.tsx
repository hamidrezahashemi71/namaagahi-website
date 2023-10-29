'use client'

import { ThemeProvider } from "next-themes"

export default function Providers(props: Children) {
  const { children } = props

  return (
    <ThemeProvider attribute='class'>
      {children}
    </ThemeProvider>
  )
}
