'use client'

import Image from 'next/image'
import Link from 'next/link'
import logoTextWhite from '../../../../../public/images/logo-text-white.png'
import logoTextBlack from '../../../../../public/images/logo-text-black.png'
import logo from '../../../../../public/images/logo.svg'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Locale } from '@/config/i18n.config'
import ThemeToggler from '@/components/ThemeToggler'
import { AiOutlineMenu } from 'react-icons/ai'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'
type Props = {
  component: Header
  lang: Locale
}

export default function Navbar(props: Props) {
  const { component, lang } = props
  const { resolvedTheme } = useTheme()
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isNavbarTransparent, setIsNavbarTransparent] = useState<boolean>(true)
  const ref = useRef(null)

  const handleIsMobile = () => setIsMobile(!isMobile)
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const threshold = 100
    setIsNavbarTransparent(scrollPosition < threshold)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const framerSidebarPanel = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
    transition: { duration: 0.3 },
  }

  const framerText = (delay: number) => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    }
  }

  return (
    <nav
      className={`${
        isNavbarTransparent
          ? !isMobile && 'bg-transparent text-white'
          : !isMobile && 'bg-gray-100 border-gray-200 dark:bg-gray-900 '
      } rounded-b-lg md:rounded-none `}
    >
      <div className="max-w-full flex flex-wrap flex-row-reverse items-center justify-between mx-auto p-4">
          <motion.div
            {...framerSidebarPanel}
            className={`${!isMobile ? 'hidden' : 'fixed left-0 top-14 md:top-[70px]'} xl:relative xl:top-0 items-center justify-between w-full xl:flex xl:w-auto xl:order-1`}
            ref={ref}
          >
            <ul className="flex flex-col items-start justify-center py-4 gap-8 font-medium xl:p-0 mt-4 bg-gray-100 dark:bg-gray-800 xl:dark:bg-transparent bg-opacity-70 dark:bg-opacity-70 xl:flex-row xl:mt-0 xl:bg-transparent ">
              {
                component?.header.headerNavLinks.map((headerLink, index, ref) => (
                  <Link href={`/${lang}${headerLink.src}`} key={headerLink.id} className='flex items-center gap-2'>
                    <li
                      className='cursor-pointer px-8 xl:px-0 py-1 hover:text-[#9b51e0] font-bold text-xs sm:text-sm md:text-lg hover:scale-110 transition-colors'
                    >
                      <motion.span {...framerText(index)}>
                        {headerLink.title}
                      </motion.span>
                    </li>
                    {
                    index === ref.length - 1 &&
                    <BiChevronDown size={20} />
                    }
                  </Link>
                ))
              }
            </ul>
          </motion.div>

        <div className="flex items-center gap-2">
          <ThemeToggler />
          <div className="hidden sm:flex items-center gap-2">
            <Image
              alt='header-logo'
              src={logo}
              width={48}
              height={48}
            />
          {
            resolvedTheme === 'dark' ?
            <Image
              alt='header-logo-white'
              src={logoTextWhite}
              width={100}
              height={100}
            />
            :
            <Image
              alt='header-logo-black'
              src={logoTextBlack}
              width={100}
              height={100}
            />
          }
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
            onClick={handleIsMobile}
          >
            <AiOutlineMenu size={25} />
          </button>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  )
}
