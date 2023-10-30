import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['media']
}

export default async function Media(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
      Media
      </div>
    </section>
  )
}
