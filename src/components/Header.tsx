import Link from 'next/link'
import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './LocaleSwitcher'
import ThemeToggler from '@/components/ThemeToggler'

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          <li>
            <Link href={`/${lang}`}>
              {navigation.home}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}/about`}>
              {navigation.about}
            </Link>
          </li>
        </ul>
        <LocaleSwitcher />
        <ThemeToggler />
      </nav>
    </header>
  )
}