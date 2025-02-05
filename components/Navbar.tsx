"use client"

import React from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export default function Navbar({checkNavMenuSelect,setCheckNavMenuSelect} : {checkNavMenuSelect : boolean,setCheckNavMenuSelect:React.Dispatch<React.SetStateAction<boolean>>}) {

  function handlenavtomenu(){
    setCheckNavMenuSelect(!checkNavMenuSelect)
  }

  return (
    <div className='flex justify-between px-44 text-base items-center py-5  xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]'> 
        <Avatar>
            <AvatarImage src='./githubuser.png' className='cursor-pointer rounded-[50%] w-6 hover:grayscale xs:w-10 sm:w-12 md:w-16 lg:w-16 xl:w-16 2xl:w-16 3xl:w-16 4xl:w-16 5xl:w-20 6xl:w-24'/>
            <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
      <div className='flex gap-5 items-center pr-4'>
        <HamburgerMenuIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-8 xs:h-8 sm:w-8 sm:h-8 xs:block sm:block md:block lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden 5xl:hidden 6xl:hidden' onClick={handlenavtomenu} />
        <div className='flex justify-between gap-14'>
          <p className='text-2xl font-semibold cursor-pointer opacity-60 hover:opacity-100 hover:text-cyan-400 xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block 5xl:text-4xl 6xl:text-5xl'><Link href={"/projects"} >Projects</Link></p>
          <p className='text-2xl font-semibold cursor-pointer opacity-60 hover:opacity-100 hover:text-cyan-400 xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block 3xl:block 4xl:block 5xl:block 6xl:block 5xl:text-4xl 6xl:text-5xl'><Link href={"/about"} >About</Link></p>
        </div>
      </div>
    </div>
  )
}