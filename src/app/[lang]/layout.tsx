import '../globals.css'
import { Locale, i18n } from '@/config/i18n.config'
import Header from '@/components/site/Header'
import Providers from '@/lib/Providers'
import { poppins, sahel } from '@/lib/fonts'
import Footer from '@/components/site/general/Footer'

type RootLayoutProps = {
  children: React.ReactNode
  params: { lang: Locale }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout(props: RootLayoutProps) {
  const { params, children } = props

  return (
    <html lang={params.lang} dir={params.lang === 'fa' ? 'rtl' : 'ltr'}>
      <body className={`
        ${params.lang === 'fa' ? sahel.variable : poppins.variable}
        ${params.lang === 'fa' ? 'font-sahel' : 'font-poppins'}
        h-screen
      `}
      suppressHydrationWarning={true}
      >
        <Providers>
          <Header lang={params.lang} />
          <main className='h-screen z-10'>
            {children}
          </main>
          <Footer lang={params.lang} />
        </Providers>
      </body>
    </html>
  )
}
