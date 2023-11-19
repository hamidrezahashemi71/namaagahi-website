import React from 'react'
import CallActionCard from './callActionCard'
import { Locale } from '@/config/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function CallToAction({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <div className='w-full py-10 flex items-center justify-around gap-x-10'>
      {component.callActions.callActionCards.map((card) => (
        <CallActionCard card={card} />
      ))}
    </div>
  )
}
