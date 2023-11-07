import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'
import Video from '@/components/site/generals/Video'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['home']
}

export default async function Home(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
<article className='relative'>
    <Video videoSrc={"https://www.namaagahi.com/wp-content/uploads/2022/02/Namaagahi-TVC-Site_2.mp4"} />
  <div className=" mx-auto mb-10 h-screen max-w-md">
    <p className="mb-4 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem error iure quo ea dolore, iste ad assumenda ducimus sunt. Rerum nulla ipsum unde exercitationem ea atque explicabo tempore perferendis delectus?</p>
    <p className="md:text-xl">Laudantium cumque mollitia maxime, magni pariatur blanditiis laborum quisquam. Iure veniam deserunt debitis minus animi at fugiat doloremque a tempore obcaecati adipisci voluptate molestiae, amet odio, unde velit! Dolore, molestiae.</p>
  </div>

</article>
  )
}
