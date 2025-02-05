"use client"

import React from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'


export default function Navigation({checkNavMenuSelect,setCheckNavMenuSelect} : {checkNavMenuSelect : boolean,setCheckNavMenuSelect:React.Dispatch<React.SetStateAction<boolean>>}) {

    const router = useRouter()

    function handlenavtomenu(){
        setCheckNavMenuSelect(!checkNavMenuSelect)
    }

  return (
    <div className='xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]'>
      <Cross1Icon className='text-[18px] cursor-pointer right-0 hover:opacity-80 hover:text-cyan-400 xs:w-6 xs:h-6 sm:w-6 sm:h-6 xs:block sm:block md:block ' onClick={handlenavtomenu}/>

      <div className='flex flex-col items-center gap-5 xs:py-4 sm:py-4 md:py-4 lg:py-4 xl:py-6 2xl:py-7 3xl:py-8 4xl:py-8'>
        <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/about")}>About</p>
        <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/project")}>Project</p>
        <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/blog")}>Blog</p>
      </div>

    </div>
  )
}
