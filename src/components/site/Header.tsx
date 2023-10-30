import Link from 'next/link'
import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from '../LocaleSwitcher'
import ThemeToggler from '@/components/ThemeToggler'

export default async function Header({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <header className='sticky top-0 px-4 py-11'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          {
            component.header.headerNavLinks.map((headerLink) => (
              <Link href={`/${lang}${headerLink.src}`} key={headerLink.id}>
                <li className='cursor-pointer hover:text-[#9b51e0] text-xs sm:text-sm md:text-lg hover:scale-110 transition-colors'>
                  {headerLink.title}
                </li>
              </Link>
            ))
          }
        </ul>
        <LocaleSwitcher />
        <ThemeToggler />
      </nav>
    </header>
  )
}
