import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./Navbar'), {
  ssr: false
})

export default async function Header({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <header className='sticky bg-black bg-opacity-50 px-2 text-white z-[999]'>
      <Navbar
        component={component}
        lang={lang}
      />
    </header>
  )
}
