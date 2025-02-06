import React from 'react'
import Image from 'next/image'
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { ProjectData,ProjectFieldType } from "@/components/ProjectData"


export default function Project() {
  return (
    <div className='pl-48 pr-48 pt-10 pb-3 mt-8  xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]'>
      <h1 className='text-3xl font-bold text-cyan-400 pb-10 xs:text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl 4xl:text-5xl 5xl:text-6xl 6xl:text-7xl'>Projects.</h1>
      <p className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>
        <span className='opacity-50 leading-6'>{"I've"} worked on a variety of </span>
        <span className='font-bold pl-1'> real-world projects, </span>
        <span className='opacity-50 leading-6'> applying modern technologies to solve practical challenges and build impactful applications.</span>
      </p>

      <div className='flex justify-between items-center'>
         <p className='text-xs opacity-35 pt-8 animate-pulse xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-xl 5xl:text-3xl 6xl:text-3xl'>Some of them are listed here..</p> 
      </div>


      <div className='pt-16 pb-10 pl-20 pr-20 xs:px-2 sm:px-2 md:px-2 lg:px-8 xl:px-12 2xl:px-20 3xl:px-24 4xl:px-24 5xl:px-28 6xl:px-32 7xl:px-36'>
        <div className='grid xs:grid-cols-1 sm:grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 md:gap-x-9 lg:gap-14 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-2 5xl:grid-cols-2 6xl:grid-cols-2'>

          {Array.isArray(ProjectData) && ProjectData.map((field : ProjectFieldType) => (
             <div className='w-[40%] xs:w-[100%] sm:w-[100%]' key={field?.id}>
             <Image src={field?.project} alt={field?.altText} className='rounded-xl' />
             <div className='flex flex-col text-sm pt-5 gap-3'>
               <div className='flex items-center gap-2 pt-2'>
                  <Link href={field?.githubLink}><h1 className='font-bold xs:text-xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>{field?.title}</h1></Link>
                  <p><Link href={field?.githubLink}><LinkIcon size={10} color='cyan' className='xs:w-4 xs:h-4 sm:w-6 sm:h-6'/></Link></p>
               </div>
               <p className='text-xs opacity-40 pt-2 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>{field?.description}</p>
             </div>
           </div>
          ))}

        </div>
      </div>

      <p  className='text-xs pt-4 pb-4 xs:px-2 sm:px-2 xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-xl 5xl:text-2xl 6xl:text-3xl'>
        <span className='opacity-60'>See all my project</span>
        <span className='text-cyan-400 '><Link href={'/projects'}> on project page.</Link></span>
      </p>

    </div>
  )
}
