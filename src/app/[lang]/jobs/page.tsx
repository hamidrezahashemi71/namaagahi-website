import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['jobs']
}

export default async function Jobs(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        JOBS
      </div>
    </section>
  )
}
