import { Locale } from '@/config/i18n.config'
import TimeLineElement from './timeLineElement'
import { getDictionary } from '@/lib/dictionary'

export default async function Timeline({ lang }: { lang: Locale }) {
  const { component } = await getDictionary(lang)

  return (
    <section className='py-24 '>
      <div className="container flex flex-row-reverse w-full">
        {component.timeline.timelineElements.map((element) => (
          <div className='relative'>
          <TimeLineElement
            key={element.id}
            title={element.title}
            color={element.color}
            time={element.time}
            direction={element.direction}
          />
          {/* <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 w-[2px] h-8 z-10 bg-black/50' /> */}
          </div>
        ))}
      </div>
    </section>
  )
}
