'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/config/i18n.config'
import Image from 'next/image'
import fa from '../../public/images/fa.png'
import en from '../../public/images/en.png'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className="font-medium flex items-center gap-2">
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="block text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <div className="inline-flex items-center">
                {locale === 'fa' ?
                  <Image
                    src={fa}
                    width={25}
                    height={25}
                    alt='fa'
                  />
                :
                  <Image
                    src={en}
                    width={25}
                    height={25}
                    alt='en'
                  />
                }
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
