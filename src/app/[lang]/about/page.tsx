import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['about']
}

const getHelloData = async() => {
  const res = await fetch(`${process.env.SERVER}/hello`, { cache: 'force-cache' })
  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}

const getEchoData = async() => { 
  const res = await fetch(`${process.env.SERVER}/echo?name=Hamidreza&job=Developer`, { next: { revalidate: 3600 } })
  return res.json()
}
export default async function About(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)
  const [hello, echo] = await Promise.all([getHelloData(), getEchoData()]) 

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>
          {page.about.title}
        </h1>
        <p className='text-gray-500'>
          {page.about.description}
        </p>
        <p>
          {hello.message}
        </p>
        <p>
          {echo.name}
        </p>
        <p>
          {echo.job}
        </p>
      </div>
    </section>
  )
}