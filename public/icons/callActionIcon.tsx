'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function CallActionIcon({ iconName, color, size, hover }: any) {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null

  return (
      iconName === 'creativity' ?
      <svg
        className={`icon icon-${iconName} w-${size} h-${size} p-2`}
        fill={(!hover && resolvedTheme === 'dark') ? "black" : (!hover && resolvedTheme === 'light') ? "white" : color  }
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 892.35 984.24"

      >
        <defs>
        <style>
        </style>
        </defs>
        <path className="cls-1" d="M535.84,901.71c0-21.52-.54-43.05.18-64.53.53-15.43-4.41-22.6-21.16-22.34-60,1-50.69-5.27-51.36,49.23-.43,34.74-.06,69.49-.3,104.24-.08,10.32-1.88,20.66-14.1,23.2-10.4,2.15-17.53-3.67-21.29-13-4.54-11.3-15-12-24.43-14.27-34.84-8.27-68-20.71-99-38.8C293.36,918.92,282,910.75,290.87,896c8.21-13.59,19.94-7.49,30.44-1.76,26.25,14.33,54,24.73,82.53,33.7,16.14,5.09,23.58,1.25,23.41-16.32-.35-35.57,1.74-71.29-.82-106.68-2.14-29.71-23.4-52.57-38-77-13-21.8-13.24-39.55-4.58-62.43,30.75-81.19,59.45-163.15,89-244.8,2.81-7.78,5.91-15.45,9-23.12,3.24-8.06,8.06-15.16,17.48-15.53,10.92-.43,15.72,7.68,19,16.63,15.93,43.48,32,86.94,47.63,130.51,17.63,49,34.58,98.3,52.56,147.19,5.27,14.33,6.61,28.23-2.7,40.14-43.16,55.22-48.59,118.78-44,185.39,2.11,30.91,3.11,32.94,33.61,23.22,23.66-7.53,47-16,68.86-28,10.72-5.88,21.26-6.73,28.07,4.91,7.31,12.48-1,20.29-11,25.89-25.37,14.07-51.91,25.4-80,32.76-17.23,4.51-36.25,5-45.46,25.06-2.82,6.16-10.63,7.7-17.62,5.22-9.19-3.28-11.89-11.09-12-19.79-.23-23.16-.07-46.33-.07-69.49ZM481.9,511.09l-3.62.17q-30.61,82.5-61.24,165c-3.9,10.51-4.9,20.91.9,31.11,9.81,17.24,18.93,34.93,29.62,51.61,22.37,34.9,82,31.32,105.75-2.21,28.94-40.83,36.17-79.77,12.06-125.63-14.1-26.81-21.33-57.23-31.75-86-3.69-10.2-7.67-20.3-11.51-30.44,2.27,34-15.35,68.67,7.15,100,12.45,17.31,13.68,35.92-4.62,50.8-14.8,12-31.39,15-47.78,2.64-15.86-12-18.69-34.61-6-53.42C477,605.53,482.23,597,482,585.39,481.6,560.63,481.9,535.86,481.9,511.09Z" transform="translate(-53.82 -7.88)"/><path className="cls-1" d="M501.61,100.11c61-.22,118.29,35.65,140.13,89.72,24.89,61.63,15.63,118.49-28.65,168.47-12.6,14.23-26.74,27-36,44-5.49,10.1-14.41,14.29-25,8.23-9.68-5.56-9.15-15.1-5.5-24.14,7-17.2,18.87-30.62,32-43.6,50.55-49.86,55.12-111.55,13.13-165-35.63-45.36-105.51-56.19-154.58-24C385.88,187.49,368,257.87,397.73,309.46c9.18,16,21.82,29.07,34.73,41.92,11.35,11.3,20.15,24.19,24.81,39.53,2.77,9.09-.58,16.55-9.38,20.39-7.61,3.33-15.95,2.28-19.64-5.3-12.67-26-37.45-42-53-65.19-33.48-50-38.13-103.19-10.68-157.55C390.71,131.57,443.07,100.32,501.61,100.11Z" transform="translate(-53.82 -7.88)"/><path className="cls-1" d="M114.08,629.37c-27.45.36-47.72-13.81-56.68-39.61-8.86-25.52-1.16-53.47,22.06-67.49,15.07-9.11,21.51-20.66,24.93-37,8.14-39,21.34-76.44,41.83-110.89,7.26-12.2,13.11-31.91,32.18-21.37s5.94,25.81-1,38.42C160.56,422,147.6,453.85,139.84,488.1c-3.69,16.29-2.26,27,11.84,38.53,20.62,16.82,25.08,44.5,15.29,67.91C158.41,615,137.07,629.07,114.08,629.37Z" transform="translate(-53.82 -7.88)"/><path className="cls-1" d="M946.1,570.51c-.05,28.92-15.3,49.51-42.15,56.91-25,6.88-51.73-3-65-24.13-15.26-24.21-14.25-53.59,7.25-72.43,18.2-16,19.28-32,12.86-52.74-9.06-29.31-18.74-58.22-34.22-84.87-1.66-2.86-3.4-5.68-4.91-8.62-5.57-10.86-10.16-22.83,2.84-30.67,14.89-9,23.56,3,29.41,13.82C872.28,405,889,443.69,896.78,485.56c2.82,15.21,7.54,27.05,22.58,35.27C938,531,947.14,548.58,946.1,570.51Z" transform="translate(-53.82 -7.88)"/><path className="cls-1" d="M774.25,903.87c-32.7,0-58.27-25.16-59-58.07-.67-31.71,22.57-59.32,54.83-58.34,25.69.79,38.76-9.73,50-30.63A509.81,509.81,0,0,0,857,670.19c3.55-11,7.56-24.31,23.1-19.58,14.45,4.4,13.6,17.53,10.44,29.19C879.64,720,863.28,758,839.45,792.26c-8.52,12.28-11.45,23.59-8.05,39C840,870.33,812.55,903.84,774.25,903.87Z" transform="translate(-53.82 -7.88)"/><path className="cls-1" d="M168.28,837.77c13-23.61-5.46-43.11-17.76-64.09-16.77-28.62-30.74-58.41-38.91-90.68-3-12-4-24.33,11.1-28.15,13.75-3.48,18.5,7.5,22.18,18.06,10.84,31.14,21.87,61.9,39.4,90.47,10.94,17.85,22.42,25.75,43.36,24.41,25.78-1.64,44.16,11.29,53.61,35.65,8.8,22.67,2.45,49.58-15.67,65.78-19.46,17.39-41.87,19-64.61,8.56C177.68,887.05,167,867.55,168.28,837.77Z" transform="translate(-53.82 -7.88)"/><path className="cls-1" d="M168.18,295.76c.44-38.1,33.28-66.07,69.63-56.73,16.28,4.18,28.62,2.23,41.17-7.72a62,62,0,0,1,17.11-9.7c9.15-3.3,18.63-2.91,23.61,7,4.16,8.29,2.16,18.19-5.84,21.79-25.4,11.45-30.18,30.16-30.71,56.78-.6,30.47-33.82,52.3-63.7,48.57S167.82,326.66,168.18,295.76Z" transform="translate(-53.82 -7.88)"/><path className="cls-1" d="M715.39,289c6-16.8-7.56-23.69-19.07-31.83-9.7-6.86-20.81-14.52-12.4-27.91,8.9-14.19,21.64-9.06,32.35-1.36,16.29,11.71,32.09,14.65,52.92,10.13,31.76-6.89,61.64,21,63.89,54.38,2.33,34.56-24.34,63.45-58.54,63.41C739.2,355.79,714.56,328.55,715.39,289Z" transform="translate(-53.82 -7.88)"/><rect className="cls-1" x="434.2" width="23.94" height="75.66" rx="5.88"/><rect className="cls-1" x="326.29" y="74.68" width="23.94" height="75.66" rx="5.88" transform="translate(-34.3 264.26) rotate(-45)"/><rect className="cls-1" x="649.76" y="74.68" width="23.94" height="75.66" rx="5.88" transform="translate(219.55 -442.84) rotate(45)"/>
      </svg>
  : iconName === 'digital' ?
    <svg
      className={`icon icon-${iconName} w-${size} h-${size} p-2`}
      fill={(!hover && resolvedTheme === 'dark') ? "black" : (!hover && resolvedTheme === 'light') ? "white" : color  }
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 971.41 770.03"

    >
    <defs>
    <style>
    </style></defs>
    <path className="cls-1" d="M310.08,305.85q-114.84,0-229.68,0c-21.86,0-35.58,13.33-36.21,35.18-.11,3.63.12,7.29-.21,10.9-.6,6.41-6.62,11.69-13.25,11.92s-13.4-4.79-13.89-11.16c-1.34-17.6-.22-34.7,11-49.66,12.66-16.85,29.49-25.46,50.38-25.56,43.43-.22,86.86-.07,130.29-.07H540.61c9.76,0,9.68,0,9.83-9.48.09-6.25.3-12.51.75-18.75.92-12.64,12-23.79,24.83-23.89q54.84-.41,109.68,0c13.27.09,24.9,11.72,25,24.94q.43,54.23.16,108.46c-.09,15.16-11.94,26.14-28,26.92-13.44.64-13.44.64-13.44,14.26,0,10.71-.06,21.41,0,32.12.27,38,1.38,75.94.71,113.88-1.47,83.82-.18,167.63-.71,251.45-.12,17.8-10.24,28.18-28.28,28.25q-53.32.23-106.65-.08c-6-.05-7.7,1.48-8,7.6-1.5,30.31-25.12,51.79-56.77,51.87-54.54.13-109.08,0-163.62,0-33.94,0-67.87.13-101.81,0-29.33-.16-51.12-18.71-55.85-47.13-5.12-30.71,19.4-60.81,50.67-62.33,2.6-.13,6.44,1.43,7.43-2.16,1.11-4,1.35-8.55-.26-12.5-1.08-2.67-4.31-1.55-6.61-1.56-33.93-.06-67.87,0-101.81-.1-10.47,0-21,.88-31.43-1C37.92,753,16.7,728.38,16.65,699.51q-.22-119.07-.09-238.16c0-7.91,3-12.62,9.13-14.76s11.93-.33,16.11,5c2.3,3,2.35,6.34,2.35,9.79Q44.09,513.23,44,565q0,64.49.14,129c0,18.57,9,31.22,25,35.81,4.57,1.32,9.22.95,13.84.95q189.39,0,378.76,0c10.1,0,20.2-.15,30.3.06,4.5.09,6-1.65,5.94-6.06-.18-14.34-.12-28.69-.05-43,.08-17.14,10.5-27.54,27.55-27.55,36,0,71.91-.15,107.86.14,6.27,0,7.87-1.93,7.78-8-.32-22.21-.28-44.44,0-66.65.06-5.56-1.61-7.3-7.25-7.21-20.39.33-40.81-.29-61.2.3-13,.37-21.29-11-21.33-20.22-.09-25.86-.24-51.71.06-77.57.14-12.26,9.18-20.65,21.53-20.72,20.4-.11,40.8-.18,61.2.07,5.26.06,7.07-1.52,7-6.89q-.4-27.56,0-55.14c.08-5.45-2-6.95-7.12-6.88-16.56.22-33.12.11-49.69.11-22.66,0-33.41-10.42-33.83-33.18-.24-13.32-.39-26.65.13-39.95.22-5.53-1.34-6.74-6.61-6.73Q427,306,310.08,305.85Zm27,550.79c44.82,0,89.63.08,134.45,0,15.35,0,27.66-12.23,27.44-26.61-.23-14.65-11.7-25.72-27.1-26.06-5.65-.12-11.32.11-17-.11-10.06-.4-15.13-5.68-15.23-15.61-.05-4.64,0-9.29,0-13.93,0-8,0-8-8.08-8H294.67c-17.16,0-34.32.26-51.47-.13-6.28-.15-8.35,2-7.74,8,.41,4,.08,8.07.08,12.11,0,12.22-5.44,17.58-17.85,17.63-5.85,0-11.72-.17-17.56.17a25.76,25.76,0,0,0-24,25.17c-.32,15.75,11.51,27.37,28.25,27.4Q270.73,856.73,337,856.64ZM641,740.09c0-17.15-.09-34.31.06-51.46,0-4.38-1.45-6.12-5.95-6.1q-51.17.16-102.33,0c-5.17,0-6.5,2-6.48,6.82q.21,50.86,0,101.72c0,4.71,1.49,6.31,6.27,6.29q51.16-.24,102.33,0c4.87,0,6.23-1.77,6.18-6.39C640.89,774,641,757.05,641,740.09ZM630.62,357.28c15.13,0,30.26-.19,45.39.1,5.34.1,7.41-1.2,7.36-7q-.42-45.09,0-90.18c0-5.4-1.86-6.93-7-6.9-26,.19-52,.1-78.07.09-4.63,0-9.27,0-13.89-.14s-5.8,2-5.78,6.29q.2,46,0,92c0,4.6,1.73,5.88,6.07,5.83C600,357.16,615.29,357.27,630.62,357.28ZM641,514.65c0-8.67-.16-17.34.06-26,.12-4.44-1.54-6-6-6q-24.8.25-49.58,0c-4.57-.05-5.88,1.82-5.84,6.13q.24,25.39,0,50.78c0,4.21,1.4,5.75,5.67,5.45,16.9-1.2,33.83-.71,50.74-.3,3.9.1,5-1.08,5-4.66C640.92,531.58,641,523.11,641,514.65ZM482.71,759.2h-4.83c-10.5,0-10.34,0-10,10.65.12,4.12,1.54,5.83,5.72,5.68,6.12-.21,12,1.41,17.71,3.38,6.63,2.28,6.6,2.37,6.65-4.39C498,759.2,498,759.2,482.71,759.2Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M850.11,173.13c0,11.5,0,23,0,34.51C850,221,842.34,230,829.23,230.22q-36,.72-72,0c-14-.3-21.65-9.1-21.69-23.11q-.09-34.51,0-69c0-13,6.93-21.52,19.84-22.13a713.25,713.25,0,0,1,76.82.16c10.32.62,17.67,9.06,17.86,19.49.23,12.51.06,25,.06,37.54Zm-86.19-.66c0,7.86.15,15.73-.06,23.59-.11,4.24,1.09,6.21,5.78,6.15,15.51-.22,31-.17,46.56,0,4.19,0,5.7-1.56,5.66-5.7q-.23-23.58-.06-47.17c0-4-1.13-5.89-5.5-5.84q-23.58.25-47.17,0c-4,0-5.33,1.6-5.25,5.41C764,156.75,763.92,164.61,763.92,172.47Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M814.17,621.69c0-12.11-.07-24.21,0-36.31.08-10.41,6.43-18,16.79-19.76a86.4,86.4,0,0,1,13.85-.87q29.65-.12,59.3,0c16.28,0,24.51,8.33,24.53,24.7q0,33.28,0,66.57c0,14.89-8.41,23.25-23.18,23.25-23.2,0-46.4,0-69.6,0-13.73,0-21.66-8.06-21.7-21.88C814.14,645.49,814.17,633.59,814.17,621.69Zm56.37,29.66v-.28c8.07,0,16.15-.06,24.22,0,3.7,0,5.57-1.23,5.54-5.27-.12-16-.09-31.92,0-47.87,0-3.27-1.17-4.81-4.6-4.8q-24.54.11-49.08,0c-3.7,0-5.15,1.63-4.91,5.16.27,4,.66,8.05.69,12.08q.14,17.88,0,35.76c0,4.14,1.34,5.6,5.76,5.33C855.58,651,863.07,651.35,870.54,651.35Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M931,379.05c11.1,0,22.2-.06,33.29,0,11.5.08,19.66,6.76,20.37,18.11a592.2,592.2,0,0,1,0,70.75c-.65,11.07-9.14,18.43-20.21,18.51q-33,.24-66,0c-12.57-.11-21.11-8.92-21.17-21.6q-.16-32.08,0-64.17c.08-13.3,8.41-21.52,21.57-21.59C909.58,379,920.27,379.05,931,379.05Zm1.17,28.15v0c-7.27,0-14.54.16-21.8-.06-3.41-.11-4.7,1-4.68,4.45q.17,20.59,0,41.18c0,3.9,1.61,5.38,5.45,5.35q20.28-.17,40.57,0c3.7,0,5.59-1.1,5.55-5.18q-.21-20.59,0-41.18c0-3.83-1.51-4.8-5.11-4.66C945.47,407.39,938.8,407.2,932.14,407.2Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M735.48,796.1c0-10.1-.08-20.19,0-30.29.14-14,8.65-22.7,22.72-22.83q30.59-.3,61.17,0c13.48.13,22.11,7.5,22.57,21,.75,21.77.67,43.6.07,65.38-.33,12.2-8.89,20.08-21.38,20.33q-31.49.63-63,0c-14.25-.3-22-9-22.19-23.34,0-.41,0-.81,0-1.21Zm78.68.58c0-6.66-.14-13.32.05-20,.11-3.83-1.16-5.47-5.19-5.43q-20,.24-39.94,0c-4.06,0-5.23,1.79-5.2,5.52q.17,19.66,0,39.34c0,3.83,1.3,5.44,5.28,5.39q20-.21,39.94,0c4.11.05,5.21-1.79,5.11-5.51C814,809.59,814.16,803.13,814.16,796.68Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M425.15,655c-10.5,0-21,.06-31.49,0-10.78-.08-18.41-6.34-20.56-16.87a40.06,40.06,0,0,1-.85-7.8c-.07-18.17-.15-36.34,0-54.51s7.85-25.77,25.9-25.77c18.38,0,36.75,0,55.12,0,16.49.06,24.51,8.16,24.53,24.62,0,19.18,0,38.36,0,57.54,0,14.69-8.22,22.77-23,22.79Q440,655.05,425.15,655Zm24.24-52.51h0c0-6.26-.1-12.52,0-18.77.09-3.47-1-5.3-4.79-5.28q-19.68.12-39.36,0c-3.05,0-4.29,1-4.25,4.24q.24,19.66.09,39.32c0,3.54,1,5,4.89,4.93q19.06-.35,38.14,0c3.91.07,5.46-.93,5.29-5C449.19,615.45,449.39,609,449.39,602.52Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M78.45,565.15c0-9.08-.07-18.15,0-27.23.12-12.44,8.17-21.31,20.57-21.58,18.75-.4,37.52-.38,56.27,0,12.34.22,20.31,7.42,21.1,19.72a498.39,498.39,0,0,1,.07,59.25c-.66,12.07-9.18,19.42-21.3,19.55q-27.84.31-55.67,0c-12.12-.13-20.49-8.47-20.86-20.64-.29-9.67-.06-19.36-.06-29Zm70.28.7c0-5.25-.14-10.51,0-15.75.14-3.79-1.14-5.54-5.18-5.48q-15.75.24-31.5,0c-4-.06-5.28,1.73-5.24,5.49.12,10.3.17,20.6,0,30.9-.08,4.34,1.92,5.61,5.88,5.56,10.3-.14,20.6-.21,30.89-.08,4.06,0,5.3-1.73,5.15-5.5C148.57,576,148.72,570.9,148.73,565.85Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M720.94,587.77c6.67,0,13.34-.06,20,0,13.49.14,22.42,8.15,22.82,21.47.46,15.14.38,30.31,0,45.45-.26,10.46-9.41,19.22-20.35,19.48-15.14.36-30.31.39-45.45,0-11.62-.31-20.09-8.92-20.39-20.68-.38-14.93-.42-29.9,0-44.83.34-12.24,9.29-20.57,21.56-20.86C706.4,587.64,713.67,587.78,720.94,587.77Zm14.54,42.73c0-14.32,0-14.32-14.43-14.32-15.22,0-15.22,0-15.22,15.32,0,14.33,0,14.33,14.4,14.33C735.49,645.84,735.49,645.84,735.48,630.5Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M778.88,450.12c-7.27,0-14.55.13-21.82,0-12.56-.27-21.33-8.89-21.52-21.47-.21-14.14-.13-28.28,0-42.42.09-13,8.27-22,21.28-22.46,14.32-.52,28.69-.5,43,0s22.1,9.14,22.2,23.43q.15,20,0,40c-.1,14.36-8.8,22.92-23.15,23C792.21,450.14,785.54,450.12,778.88,450.12Zm0-58.13c-15,0-15.11,0-15,15,.16,17.21-2.38,14.48,14.75,14.72,15,.21,15,0,15-15.09C793.67,392,793.67,392,778.92,392Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M380,335.51c17.35,0,34.69-.05,52,0,10.13,0,16.8,5.84,16.69,14.35-.1,7.83-7.23,14.06-16.51,14.08q-51.72.09-103.45,0c-9.6,0-16.19-5.91-16.33-14.18s6.47-14.18,16.15-14.22C345.76,335.45,362.9,335.51,380,335.51Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M439.64,459.53c0-5.24.1-10.48,0-15.71s2.56-8.16,7.5-8.34c11.06-.39,22.14-.73,33.2.26,4.9.43,7.26,3.14,7.31,7.87.12,10.68.19,21.36.15,32,0,5.4-3.11,8.22-8.34,8.29-10.48.15-21,.2-31.43,0-5.87-.11-8.33-2.89-8.39-8.68-.05-5.24,0-10.48,0-15.72Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M209.38,481.21c0-4.44,0-8.89,0-13.33s2.1-7.44,6.68-7.87a187.89,187.89,0,0,1,29.63-.12c4.55.29,6.62,3.72,6.69,8q.24,13.32,0,26.65c-.08,4.65-2.58,7.58-7.4,8a171.78,171.78,0,0,1-28.42.07c-4.78-.37-7.17-3.27-7.17-8.08C209.38,490.09,209.39,485.65,209.38,481.21Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M913.24,271.48c0,4.64,0,9.27,0,13.91,0,5.2-2.64,8.06-7.67,8.2-9.28.25-18.58.4-27.86.1-4.8-.16-7.06-3.89-7.19-8.27-.29-8.88-.26-17.77,0-26.65.13-5.24,3-8.14,8.5-8.12,8.89,0,17.77,0,26.66,0,4.86,0,7.51,2.57,7.61,7.47.08,4.44,0,8.88,0,13.33Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M296.18,558.47H308.9c5.17,0,7.9,2.48,7.91,7.74,0,8.88,0,17.76,0,26.64,0,5.45-2.75,8.44-8,8.57-8.87.22-17.76.23-26.63,0-5.22-.16-8.18-3.31-8.26-8.58q-.18-13,0-26c.09-5.27,2.85-8.25,8.32-8.28,4.64,0,9.28,0,13.92,0Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M251.18,331.8c11.79.05,20.75,8.94,20.72,20.56a21.25,21.25,0,0,1-20.76,21c-11.26.14-21.25-9.95-21-21.27C230.29,340.45,239.35,331.75,251.18,331.8Z" transform="translate(-14.29 -114.98)"/><path className="cls-1" d="M29.94,389.92c8.8.07,15.41,6.71,15.24,15.31a15.77,15.77,0,0,1-15.73,15.23c-8.33.06-15.25-7.08-15.15-15.64C14.39,396.05,20.91,389.85,29.94,389.92Z" transform="translate(-14.29 -114.98)"/>
    </svg>
  : iconName === 'media' ?
    <svg
      className={`icon icon-${iconName}  w-${size} h-${size} p-2`}
      fill={(!hover && resolvedTheme === 'dark') ? "black" : (!hover && resolvedTheme === 'light') ? "white" : hover? color : color  }
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 971.41 972.97"

      ><defs><style></style></defs>
      <path  fillRule="evenodd"  clipRule="evenodd" className="cls-1" d="M622.24,463.59c42.93,65.75,84.15,128.92,125.41,192.06q93.47,143.05,187,286.1c5.23,8,11.47,15.8,9.34,26.36-1.78,8.84-7,14.75-16,16.87-12.68,3-21-3.18-27.52-13.16q-36.09-55.14-72.22-110.23Q703.2,670.23,578.47,478.67c-8-12.39-16.6-17.76-31.51-17.14q-48.15,2-96.4.91c-13.9-.3-22.37,4-30.1,15.86Q262.63,720.74,103.92,962.62c-2.63,4-5.1,8.16-7.93,12-8.51,11.64-19.6,15.76-32.06,7.5-12.73-8.44-12.34-20.61-5-32.58,10.09-16.36,20.66-32.41,31.18-48.49Q231.71,684.87,373.27,468.66c.65-1,.48-2.52.85-4.76q-62.69,0-124.94,0c-12.5,0-15.6,8.56-17.59,18.81C222,531.84,212.17,580.89,202.47,630c-6,30.55-9.2,33.17-40.81,33.17-39.83,0-79.66-.18-119.5.07-15.68.1-27.78-3.75-27.34-22.38.41-17.14,12.21-21.4,26.7-21.62,11-.17,22-.74,32.95.06,14.69,1.08,19.08-5.52,18.89-19.42-.57-39.83-.66-79.67.08-119.49.25-13.83-4.69-18.48-18-17.06-6.72.72-13.67-.79-20.52-1.07C15,460.56,14.42,460,14.45,421.05c0-18.55.58-37.11-.12-55.63-.72-19.16,8.71-28.08,26.83-28.77,15.77-.61,31.58-.29,47.37-.54,12.19-.19,25,2.39,25.29-17.53.31-19.56-11.36-18.33-24.24-18.16-17.17.22-34.34,0-51.51,0-13.63,0-22.63-5.54-23.3-20.18-.72-15.51,8.26-22.37,22.59-23.53,6.14-.49,12.35-.24,18.53-.25,57.54,0,57.54,0,57.54-58.56,0-48.76-.09-97.52,0-146.28.08-30.41,7.29-37.69,37.53-37.94,19.92-.16,39.85-.41,59.74.36,14.86.57,28.2,6,28.31,23.39.12,17.67-13.24,22.17-28.2,23.18-1.37.09-2.75.09-4.12.14-46.57,1.78-46.58,1.78-46.59,47.78,0,67.3.58,134.61-.35,201.9-.27,19.79,6.45,26.08,26.09,26q303.89-.81,607.77,0c20.46.06,25.47-7.34,25.24-26.45-.88-72.79-.34-145.59-.36-218.38,0-30.8,0-30.84-30-30.85q-193.66,0-387.33,0c-9.57,0-19.22.69-28.52-2.8-9.12-3.43-15.3-9.09-15.72-19.38-.46-11.07,5.43-17.86,15.14-22.12,7.2-3.15,14.76-2.8,22.29-2.8q215.31,0,430.6,0c33.57,0,39.92,6.3,40,39.59.16,58.38,0,116.75,0,175.12,0,28,0,28,28.84,28,15.1,0,30.22-.28,45.32.22s25.72,8,25.18,23.77c-.52,15.28-11.69,20.21-25.88,20-19.23-.23-38.46.27-57.69-.05-11.68-.2-15.71,5.49-15.72,16.42s2.14,19.19,15.43,19.17c23.35,0,46.71-.45,70,.32,28.34.94,34.87,8.11,35,36.21.12,19.91.28,39.84-.06,59.75-.38,22.3-7.25,29.17-29.62,30.49-7.53.44-15.09.52-22.63.69-29.83.69-29.78.68-29.74,31.69,0,35,.45,70.06-.28,105.07-.3,14.36,4.89,19.91,19.18,19.06a300.26,300.26,0,0,1,39.11.37c14.12,1,24.07,8.77,23,23.6-1,13.37-10.17,20-24.18,19.89q-68-.36-136-.06c-17.28,0-23.82-10.32-26.76-25.44-9.54-49.11-20.34-98-28.71-147.29-3.58-21.11-12.39-28.31-33.8-27.27C698.9,464.86,662.57,463.59,622.24,463.59Zm-124.33-81q-209,0-418-.15c-13.44,0-22.11,1.56-21.81,18.63s10.22,16.6,21.81,16.36c8.92-.18,17.85-.18,26.77.05,24.14.6,32.22,7.89,32.84,32.12.74,28.81.25,57.65.26,86.48,0,22-.2,43.93,0,65.89.06,6.6-1.15,14.88,8.36,16.35,11,1.7,11-8,13.51-14.67,1-2.51.82-5.41,1.35-8.1,9.85-49.73,20-99.41,29.45-149.23,3.77-19.91,13.62-29.22,34.94-29.17q271.8.7,543.61.1c19.67,0,30.36,7.52,34.14,27.41,10,52.49,21.09,104.76,31.62,157.13,1.66,8.25,2.43,17.88,13.82,16.64,12.48-1.37,8.58-12.3,8.65-19.71.36-39.8.18-79.62.18-119.43,0-61.37,0-61.37,60.52-61.89,20.37-.18,25.54-7.62,18.72-26.09-4.42-11.94-14.48-8.54-22.73-8.55Q706.92,382.41,497.91,382.54Z" transform="translate(-14.29 -13.52)"/><path className="cls-1" d="M476.51,741.07q0-105,0-210.05c0-15.36,1.54-30.33,21.47-30.83,20.66-.52,24.55,14.79,24.58,30.91q.38,211.08.17,422.16a49.08,49.08,0,0,1-.71,8.2c-2.26,13.22-7.77,24.7-23,24.3-15.88-.41-22.6-11.49-22.74-26.41-.27-29.51-.12-59-.13-88.55q0-64.86,0-129.73Z" transform="translate(-14.29 -13.52)"/><path className="cls-1" d="M481.8,215.71c0,21.8.39,38.95-.12,56.08-.43,14.75-4.38,28.33-22.59,28.29-17.51-.05-22.34-12.46-23.77-27.67-.91-9.67,5.22-22.93-6.33-28-12.48-5.49-27-2.8-40.61-1.3-8,.89-8.21,8-8.36,14.34-.19,8.22.33,16.53-.68,24.65-1.48,12-9.21,17.84-21.14,18.1-12.22.26-21.12-6.37-21.32-17.76-.75-43.14-2.52-86.52,1.13-129.39,2.73-32.07,36.3-56.66,68.43-57.3,35.25-.7,64,21,72.47,55C484.68,173.72,480.55,197.17,481.8,215.71ZM407.55,195c14.93.65,29.72,2.58,28.07-20.68C434.17,154,424.23,140,408,140.15c-16.5.11-27.28,15.56-28.26,36.45C378.62,200.06,394.93,194.16,407.55,195Z" transform="translate(-14.29 -13.52)"/><path className="cls-1" d="M517.3,197.09c0-24-.23-48,.08-72,.29-22.5,6.94-28.77,29.86-29.33.68,0,1.37,0,2.06,0,95.19-1.39,138.28,57.84,109,149.82-9.88,31-40,54-72.42,54.83-14.4.37-28.82-.07-43.22.1-17.11.21-25.28-8.29-25.27-25.16,0-13-.06-26.07-.07-39.11S517.3,210.12,517.3,197.09Zm44.11.17h-.1c0,12.35-.09,24.7,0,37,.19,21.39,7.35,27.23,27.7,21,15.63-4.76,26.21-15.42,27.19-32.47a380.71,380.71,0,0,0,.1-47.29c-1.46-21.95-18.25-36-39.94-35.87-10.26,0-15.31,3.62-15,14.36C561.67,168.45,561.41,182.86,561.41,197.26Z" transform="translate(-14.29 -13.52)"/><path className="cls-1" d="M195.9,197c0-13-.28-26,.06-39s7.48-20.12,20.51-20.78c13.24-.67,21.9,6.69,22.44,18.92,1.22,28,1.25,56.1.11,84.09-.54,13.29-10,21.27-23.7,20.17-12.76-1-19.13-9.66-19.35-22.35C195.75,224.33,195.92,210.65,195.9,197Z" transform="translate(-14.29 -13.52)"/><path className="cls-1" d="M783.57,198.84c0,13,.66,26-.14,38.95-.87,14.31-9,23.61-23.7,22.5-13.51-1-19.82-10.35-19.73-24.09.15-25.29-.11-50.58-.07-75.87,0-13.44,5.56-22.59,20.13-23.26,15.65-.72,22.26,9.09,23.28,22.83C784.3,172.82,783.55,185.86,783.57,198.84Z" transform="translate(-14.29 -13.52)"/><path className="cls-1" d="M298.16,59.24c-13.66-1.12-22.08-8.92-22.36-22.15-.25-12.41,7.73-20.89,20.39-21.44,13.42-.59,22.63,6.79,23.22,20.62S311.66,57.48,298.16,59.24Z" transform="translate(-14.29 -13.52)"/>
    </svg>
  : iconName === 'namava' ?
    <svg
      className={`icon icon-${iconName} w-${size} h-${size} p-2`}
      fill={(!hover && resolvedTheme === 'dark') ? "black" : (!hover && resolvedTheme === 'light') ? "white" : color  }
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 491.62 70.34"

    >
      <path d="M182.64,285.17c-1.58-.72-2-2-2-3.66.09-3.51,0-7,0-10.55q0-18.6,0-37.19,0-6.48,0-12.94a9.77,9.77,0,0,1,.16-1.62c.44-2.37,1.49-3.5,3.85-3.92a15.48,15.48,0,0,1,5.26,0,7.71,7.71,0,0,1,5.37,3.72c3,4.82,6.14,9.5,9.23,14.25q10.38,16,20.85,31.88c.19.3.4.58.58.88.34.58.64.5,1,0l2.2-3.38L246,236.94c3.64-5.57,7.32-11.12,10.89-16.73,1.12-1.76,2.22-3.46,4.21-4.3a11.81,11.81,0,0,1,8.36-.24c2,.63,2.67,2.46,2.77,4.42.29,6,.23,12.07.06,18.11-.05,1.72.11,3.44.11,5.17,0,12.62,0,25.25,0,37.88,0,1.75-.43,3.14-2.13,3.92h-7.11c-5.16-1.73-7-4.23-6.95-9.72V246.37a3.2,3.2,0,0,0-.89,1q-10.64,16.3-21.28,32.62c-1.62,2.49-3.45,4.7-6.64,5.21h-1.92a8.07,8.07,0,0,1-4.87-2.83c-.62-.82-1.25-1.63-1.81-2.48L197.32,247c-.14-.22-.21-.53-.61-.56v1.09q0,14.47,0,28.94a8.53,8.53,0,0,1-7,8.75Z" transform="translate(-4.19 -214.83)"/><path d="M59.4,259.12v-1.29c0-7.86,0-15.72,0-23.59,0-3.8.08-7.6.16-11.4A8.31,8.31,0,0,1,67.42,215c1.73,0,3.46,0,5.19,0a2.76,2.76,0,0,1,3,3q0,32,0,64.05a2.68,2.68,0,0,1-2.9,2.95c-1.69,0-3.39,0-5.09,0a7.79,7.79,0,0,1-5.93-2.72c-3.84-4.16-7.64-8.35-11.46-12.53q-7.53-8.25-15.07-16.51-5.54-6-11.09-12.08c-1.14-1.24-2.27-2.49-3.45-3.79a1.8,1.8,0,0,0-.21,1.27v42.57a10,10,0,0,1-.05,1.34A2.73,2.73,0,0,1,17.58,285c-1.92,0-3.84.06-5.76,0-4-.15-7.53-3.93-7.6-8,0-2.78,0-5.56,0-8.34q0-22.59,0-45.16a8.24,8.24,0,0,1,6.82-8.32,31.49,31.49,0,0,1,7-.09,2.44,2.44,0,0,1,1.65.91q4,4.38,8,8.78,3.5,3.83,7,7.66L50,249.18q4.2,4.6,8.42,9.2A2.21,2.21,0,0,0,59.4,259.12Z" transform="translate(-4.19 -214.83)"/><path d="M157.23,284.82c-1.18,0-2.37,0-3.55,0a6.75,6.75,0,0,1-5.75-3.12,30.47,30.47,0,0,1-2.83-6.17c-.91-2.29-1.82-4.58-2.69-6.88a1.25,1.25,0,0,0-1.36-.92q-12.92,0-25.85,0a1.29,1.29,0,0,0-1.4,1c-1.31,3.41-2.63,6.8-4,10.18a10.38,10.38,0,0,1-3,4.48,6.57,6.57,0,0,1-4.09,1.45c-2.44,0-4.87,0-7.31,0s-3.64-1.76-2.77-4c2.33-5.95,4.7-11.89,7-17.84q8.07-20.37,16.12-40.75c1.55-3.94,4.18-6.63,8.49-7.13a27,27,0,0,1,8.61.15,9.78,9.78,0,0,1,7.32,6.43q6.92,17.43,13.82,34.86,4.75,12,9.5,24c1,2.59-.14,4.3-2.93,4.3Zm-29.08-52.34c-.23,0-.26.21-.32.35q-4.33,11.05-8.66,22.12c-.35.88.1.88.74.88h16.22c1.17,0,1.23-.1.79-1.22q-4.08-10.42-8.17-20.86A3.13,3.13,0,0,0,128.15,232.48Z" transform="translate(-4.19 -214.83)"/><path d="M489.28,284.82h-3.17a7.08,7.08,0,0,1-6.81-4.14c-1.59-3-2.55-6.28-3.87-9.39-.36-.86-.71-1.72-1-2.6a1.26,1.26,0,0,0-1.42-1c-2.88,0-5.76,0-8.65,0-5.67,0-11.34,0-17,0a1.46,1.46,0,0,0-1.62,1.1c-1.33,3.5-2.72,7-4.1,10.45a12,12,0,0,1-1.56,2.74,6.61,6.61,0,0,1-5.51,2.81c-2.44,0-4.87,0-7.31,0a2.71,2.71,0,0,1-2.67-3.93q6-15.3,12.1-30.59,5.69-14.36,11.37-28.7a10.17,10.17,0,0,1,9.86-6.63c1.86,0,3.73-.11,5.57.05a9.81,9.81,0,0,1,8.68,6.6c4.85,12.14,9.64,24.31,14.46,36.46,2.87,7.25,5.67,14.53,8.67,21.73,1.31,3.16.13,5.4-3.42,5A24.82,24.82,0,0,0,489.28,284.82Zm-29.13-52.57a4.27,4.27,0,0,0-.31.56q-4.35,11.1-8.7,22.21c-.34.87.21.8.75.8h16.32c1.07,0,1.13-.08.73-1.1q-3.24-8.34-6.5-16.69C461.71,236.17,461,234.31,460.15,232.25Z" transform="translate(-4.19 -214.83)"/><path d="M391.67,267.55l3.17-8.09q7.4-18.88,14.8-37.76a13.55,13.55,0,0,1,2.53-4.38,6.73,6.73,0,0,1,5-2.15c2.47,0,4.93,0,7.4,0a2.7,2.7,0,0,1,2.58,3.8c-2.65,6.75-5.33,13.5-8,20.25Q411.47,258.6,403.79,278c-1.87,4.74-5.25,7-10.36,7a44.21,44.21,0,0,1-5.76-.11,9.8,9.8,0,0,1-8.19-6.56q-5.58-14-11.11-28.08l-12.18-30.77a3.25,3.25,0,0,1,0-3,2.34,2.34,0,0,1,1.95-1.26,74.77,74.77,0,0,1,8.73.06c2.67.25,4.39,1.9,5.57,4.2,1.5,2.94,2.53,6.08,3.74,9.14,3.76,9.48,7.45,19,11.17,28.48l3.81,9.73A1.08,1.08,0,0,0,391.67,267.55Z" transform="translate(-4.19 -214.83)"/><path d="M353.28,285c-2.53,0-5.06,0-7.59,0a1.58,1.58,0,0,1-1.59-.94q-10-18.21-20-36.38c-.16-.29-.24-.79-.62-.75s-.44.51-.61.81q-10,18.14-20,36.29a1.63,1.63,0,0,1-1.66,1c-5,0-10.06,0-15.09,0-1.17,0-1.21-.07-.64-1.1l14.13-25.61q6.57-11.88,13.11-23.76L323,216c.47-.84.55-.85,1,0q4.52,8.13,9,16.28l15.25,27.62L361.55,284c.47.86.42.94-.58.94Z" transform="translate(-4.19 -214.83)"/><path d="M334,274.46a10.53,10.53,0,1,1-10.48-10.61A10.47,10.47,0,0,1,334,274.46Z" transform="translate(-4.19 -214.83)"/>
    </svg>
: null
  )
}