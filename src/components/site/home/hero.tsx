'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { sliderImages } from '@/lib/images'
import { CiCircleChevLeft, CiCircleChevRight  } from "react-icons/ci"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import { FaRegCircle } from "react-icons/fa"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(2)

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0
    const newSlide = isFirstSlide ? sliderImages.length - 1 : currentSlide -1
    setCurrentSlide(newSlide)
  }

  const nextSlide = () => {
    const isLastSlide = currentSlide === sliderImages.length - 1
    const newSlide = isLastSlide ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const goToSlide = (slideIndex: number) => setCurrentSlide(slideIndex)

  const scrollToBottom = () => {
    const firstDiv = document.getElementById('parentDiv')
    if (firstDiv) {
      const yOffset = firstDiv.getBoundingClientRect().bottom + window.scrollY
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    setTimeout(() => {
      nextSlide()
    }, 7000)
  }, [currentSlide])

  return (
    <div
      className='max-w-[300%] h-screen w-full m-auto relative'
      dir='rtl'
      id='parentDiv'
    >
      <div
        className='w-full h-full bg-center bg-cover duration-1000'
        style={{ backgroundImage: `url(${sliderImages[currentSlide].url})` }}
      ></div>
      <div className='absolute top-0 right-0 w-full h-full bg-black/30 transition ease-in-out delay-1000' />
      <div className='absolute w-full bottom-36 -translate-x-0 translate-y-[-50%] left-7 flex justify-end items-center gap-x-1 py-2 border-b-purple-500 border-b-[3px]'>
        {sliderImages.map((slide, slideIndex) => (
          <div key={slide.id}>
            <FaRegCircle
              size={17}
              className={`cursor-pointer text-white ${currentSlide === slideIndex && 'text-purple-500 font-bold'}`}
              onClick={() => goToSlide(slideIndex)}
            />
          </div>
        ))}
      </div>
      <div className='hidden md:block absolute bottom-7 -translate-x-0 translate-y-[-50%] left-3 rounded-full p-2 text-white cursor-pointer'>
        <CiCircleChevLeft
          size={70}
          onClick={prevSlide}
        />
      </div>
      <div className='hidden md:block absolute bottom-7 -translate-x-0 translate-y-[-50%] left-20 rounded-full p-2 text-white cursor-pointer'>
        <CiCircleChevRight
          size={70}
          onClick={nextSlide}
        />
      </div>
      <div className='absolute bottom-16 -translate-x-0 translate-y-[-100%] left-[42%] md:right-3 rounded-full p-2 text-white cursor-pointer animate-bounce'>
        <MdOutlineKeyboardDoubleArrowDown
          size={70}
          onClick={scrollToBottom}
        />
      </div>
    </div>
  )
}
