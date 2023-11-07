import { getDictionary } from '@/lib/dictionary'
import metaJson from '@/dictionaries/meta.json'

export async function generateMetadata({ params }: LanguageProp) {
  return metaJson[params.lang as 'fa' | 'en']['contact']
}

export default async function Contact(props: LanguageProp) {
  const { params: { lang } } = props
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24 '>
      <div className='container h-[50vh] flex flex-col items-center justify-between'>
        <p className='font-bold text-5xl'>درباره ما</p>
        <div className='w-full p-8 dark:bg-white bg-black rounded-md flex flex-col justify-center items-center gap-11 dark:text-black text-white leading-10 text-lg'>
          <p>
          نما آگهی در سال 1388 با ورود به بازار خرید و برنامه ریزی رسانه تاسیس و در سال 1391 به یکی از قدرتمندترین دارندگان رسانه تبدیل شد و پس از 3 سال در 1394 به یک آژانس تبلیغاتی با کلیه خدمات، تغییر ماهیت داد.
در طول بیش از 13 سال فعالیت، نماآگهی با تکیه بر همکاری تیم‌های مجرب، همواره تلاش کرده است تا بهترین راهکارها را در تمام عرصه های صنعت تبلیغات به صاحبان برند پیشنهاد دهد.
 در سال 1397 نما آگهی و یک شبکه ی بین المللی تبلیغاتی به نام FCB ARTGROUP ، سرمایه گذاری مشترکشان را آغاز کردند.
در حال حاضر، آژانس تبلیغاتی “نما آگهی” مجری انحصاری تبلیغات در نماوا،صاحب رسانه انحصاری تبلیغات بدنه اتوبوسهای شهر تهران و همچنین مجری تبلیغات مترو تهران ‌میباشد .علاوه بر این نمااگهی توانایی کامل برای طراحی و اجرای کمپین های تبلیغاتی 360 درجه، خلق و تولید تیزر و آگهی های تلویزیونی، استراتژی ارتباطات و راهکارهای خدمات دیجیتال را داراست.
          </p>
          <p className='text-center font-bold text-2xl'>خدمات ما</p>
        </div>
      </div>
    </section>
  )
}
