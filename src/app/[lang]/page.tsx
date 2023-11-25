import metaJson from '@/dictionaries/meta.json'
import Hero from '@/components/site/home/hero'
import CallToAction from '@/components/site/home/callToAction'
import Notice from '@/components/site/home/notice'
import Timeline from '@/components/site/home/timeline'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import( '@/components/site/home/map'), {
  ssr: false
})

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['home']
}

export default async function Home(props: LanguageProp) {
  const { params: { lang } } = props

  return (
    <>
      <Hero lang={lang}/>
      <CallToAction lang={lang}/>
      <Notice lang={lang}/>
      <Timeline lang={lang}/>
      <Map lang={lang}/>
    </>
  )
}
