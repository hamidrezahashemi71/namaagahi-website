import Link from 'next/link'
import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from '../../LocaleSwitcher'
import ThemeToggler from '@/components/ThemeToggler'

export default async function Header({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <header className='sticky top-0 px-4 py-11 bg-transparent bg-gradient-180 from-[#000]/[.4] via-[#000]/[.2] to-[#000000F7]/[.01]'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-x-8'>
          {
            component.header.headerNavLinks.map((headerLink, index, ref) => (
              index !== ref.length - 1 ?
                <Link href={`/${lang}${headerLink.src}`} key={headerLink.id}>
                  <li className='cursor-pointer hover:text-[#9b51e0] font-bold text-xs sm:text-sm md:text-lg hover:scale-110 transition-colors'>
                    {headerLink.title}
                  </li>
                </Link>
              :
                <ul>
                  <li className='cursor-pointer hover:text-[#9b51e0] font-bold text-xs sm:text-sm md:text-lg hover:scale-110 transition-colors'>
                    {headerLink.title}
                  </li>
                  {headerLink.sublinks?.map((sublink) => (
                    <li key={sublink.id}>
                      <Link href={`/${lang}${sublink.src}`}>
                        {sublink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            ))
          }
        </ul>
        <div className='flex items-center gap-4'>
          <ThemeToggler />
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  )
}
