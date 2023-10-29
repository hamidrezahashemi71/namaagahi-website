import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

export const sahel = localFont({
    src: [{
      path: '../../public/fonts/Sahel-Bold-FD.ttf',
      weight: '500',
      style:"bold"
    },
      {
        path: '../../public/fonts/Sahel-FD.ttf',
        weight: '400',
        style:"normal"
      },
    ],
    variable: '--font-sahel'
  })

export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
