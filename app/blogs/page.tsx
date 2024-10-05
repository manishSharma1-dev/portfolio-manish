"use client"

import Link from 'next/link'
import React from 'react'
import Soon from "@/public/soon.gif"
import Image from 'next/image'

export default function page() {
  return (
    <div className='min-h-screen bg-[#1e1e1e] text-white'>
        <div className='pt-10 pb-10 pl-28 pr-28 flex flex-col justify-center items-center gap-6'>
            <h1 className='text-xl'>Currently No blogs..</h1>
            <p className='text-sm opacity-50 '>But there will be...</p>
            <Image src={Soon} alt='Comming soon' className='w-[40rem] '/>
            <p className='text-xl pt-5'>Back to <span className='text-fuchsia-500  underline underline-offset-4 decoration-2'><Link href={'/'}>Home ?</Link></span></p>
        </div>
    </div>
  )
}
