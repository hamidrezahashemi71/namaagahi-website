import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Navbar from './Navbar'

export default async function Header({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <header className='sticky top-0 bg-black bg-opacity-50 px-2 text-white z-[999] w-full'>
      <Navbar
        component={component}
        lang={lang}
      />
    </header>
  )
}
