import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import NamavaIcon from '../../../../public/icons/Namava.svg'
import Image from 'next/image'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['about']
}

export default async function About(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)
  const icons = [NamavaIcon, ]

  return (
    <section className='py-24 '>
      <div className='container h-[50vh] flex flex-col items-center justify-between'>
        <p className='font-bold text-5xl'>
          {page.about.title}
        </p>
        <div className='w-full p-8 dark:bg-white bg-black rounded-md flex flex-col justify-center items-center gap-11 dark:text-black text-white leading-10 text-lg'>
          <p>
            {page.about.about}
          </p>
          <p className='text-center font-bold text-2xl'>
            {page.about.subtitle}
          </p>
          <div className='flex items-center justify-between'>
            <Image
              src={"icons/Namava.svg"}
              alt='namava-icon'
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
