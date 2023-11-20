import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Video from '@/components/site/generals/Video'
import Hero from '@/components/site/home/hero'
import CallToAction from '@/components/site/home/callToAction'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['home']
}

export default async function Home(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <>
      <Hero lang={lang}/>
      <CallToAction lang={lang}/>
    </>
  )
}
