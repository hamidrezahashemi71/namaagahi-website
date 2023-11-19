'use client'

import Image from 'next/image'
import Link from 'next/link'
import logoTextBlack from '../../../../../public/images/logo-text-black.png'
import logoTextBlackEn from '../../../../../public/images/logo-text-black-en.png'
import logo from '../../../../../public/images/logo.svg'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { Locale } from '@/config/i18n.config'
import ThemeToggler from '@/components/ThemeToggler'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BiChevronDown } from 'react-icons/bi'
type Props = {
  component: Header
  lang: Locale
}

export default function Navbar(props: Props) {
  const { component, lang } = props
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleIsMobile = () => setIsMobile(!isMobile)

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
    <div className='top-0'>
      <div
        id="your-absolute-div-id"
        className='hidden sm:block absolute top-0 bg-white px-4 py-6 shadow-xl'
        style={lang === 'en' ? { left: '-10px', borderBottomRightRadius: '30px' } : { right: '-10px', borderBottomLeftRadius: '30px' }}

      >
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 w-44">
            <Image
              alt='header-logo'
              src={logo}
              width={52}
              height={52}
            />
            {
              lang === 'fa'
              ?
              <Image
                alt='header-logo-black'
                src={logoTextBlack}
                width={120}
                height={120}
              />
              :
              <Image
                alt='header-logo-black-en'
                src={logoTextBlackEn}
                width={120}
                height={120}
              />
            }
          </div>
        </div>
      </div>
      <nav
        className="relative max-w-ful flex flex-wrap flex-row-reverse items-center justify-between xl:mx-auto"
        style={{ width: `calc(100% - 450px)` }}
      >
        <motion.div
          {...framerSidebarPanel}
          className={`${!isMobile ? 'hidden' : 'fixed left-0 top-14 md:top-[70px]'} xl:relative xl:top-0 items-center justify-between w-full xl:flex  xl:order-1`}
        >
          <ul className="flex flex-col items-start justify-center py-4 gap-4 font-medium xl:p-0 mt-4 bg-gray-100 dark:bg-gray-800 xl:dark:bg-transparent bg-opacity-70 dark:bg-opacity-70 xl:flex-row xl:mt-0 xl:bg-transparent ">
            {
              component?.header.headerNavLinks.map((headerLink, index, ref) => (
                <Link href={`/${lang}${headerLink.src}`} key={headerLink.id} className='flex items-center gap-2'>
                  <li
                    className='cursor-pointer xl:px-0 py-5 text-sm font-normal hover:bg-white hover:text-black'
                  >
                    <motion.span {...framerText(index)} className='px-4'>
                      {headerLink.title}
                    </motion.span>
                  </li>
                  {headerLink.sublinks?.length && (
                    <div className='relative group cursor-pointer py-2 flex items-center' onClick={() => setIsMobile(false)}>
                      <BiChevronDown size={20} />
                      {headerLink.sublinks?.map((sublink) => (
                        <Link
                          href={`/${lang}${sublink.src}`}
                          key={sublink.id}
                          className='invisible z-50 font-normal flex py-1 px-4 group-hover:visible hover:bg-white hover:text-black rounded-md'
                        >
                          {sublink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </Link>
              ))
            }
          </ul>
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg bg-opacity-50">
          <LocaleSwitcher />

          <ThemeToggler />
        </div>
        </motion.div>


        <div className='xl:hidden relative top-0 w-full'>
          <button
            className='absolute'
            style={lang === 'en' ? { left:0 } : { right:0 }}
            data-collapse-toggle="navbar-language"
            type="button"
            aria-controls="navbar-language"
            aria-expanded="false"
            onClick={handleIsMobile}
          >
            <AiOutlineMenu size={25} />
          </button>
        </div>
      </nav>
    </div>
  )
}
