import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./Navbar'), {
  ssr: false
})

export default async function Header({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <header className='sticky top-0 px-0 py-0 xl:py-6 bg-transparent bg-gradient-180 from-[#000]/[1] via-[#000]/[.5] to-[#000000F7]/[.01] z-[1000]'>
      <Navbar
        component={component}
        lang={lang}
      />
    </header>
  )
}
