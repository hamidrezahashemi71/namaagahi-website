import React from 'react'
import CallActionCard from './callActionCard'
import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'

export default async function CallToAction({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <div className='w-full px-32 py-10 flex items-center justify-around gap-x-2'>
      {component.callActions.callActionCards.map((card) => (
        <Link href={`/${lang}${card.src}`} key={card.id}>
          <CallActionCard card={card} />
        </Link>
      ))}
    </div>
  )
}
