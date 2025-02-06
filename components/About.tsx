"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Mail,Copy,CopyCheckIcon } from "lucide-react"
import { IconCloud } from './ui/icon-cloud'

const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "c",
  "c++",
  "java",
  "sql",
  "MongoDb",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "redis",
  "visualstudiocode",
];

export default function About() {
  const [checkifEmailCopy,setCheckIfEmailCopy] = useState(false)

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  function handlecopyButton() {
    navigator.clipboard.writeText('manishvsharma1@gmail.com')
    setCheckIfEmailCopy(true)
  }

  return (
    <div>

      <div className='pl-48 pr-48 pt-20   xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-5xl sm:text-5xl font-bold inline-block xs:flex xs:flex-col sm:flex sm:flex-col sm:gap-4 2xl:text-6xl 3xl:text-6xl 4xl:text-6xl 5xl:text-7xl 6xl:text-7xl'>
            <span>Hi ,{"I'm"} </span> 
            <span className='text-cyan-400'>Manish Sharma.</span>
          </h1>
          <p className='text-base font-medium xs:text-base sm:text-xl sm:pt-4  md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl 4xl:text-xl 5xl:text-3xl 6xl:text-3xl'>Aspiring Software Engineer/Developer who loves to</p>
          <p className='text-sm  xs:text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-xl 3xl:text-lg 4xl:text-xl 5xl:text-3xl 6xl:text-3xl'> 
            <span className='opacity-50'>turn </span>
            <span className='pl-1 pb-1'>ideas </span> 
            <span className='opacity-50'>into code .</span>
          </p>
          <div className='flex gap-3 pt-3'>
              <Button className='text-lg rounded-xl py-4 px-6 hover:bg-zinc-700  xs:py-6  xs:text-base xs:px-6 sm:py-6 sm:px-6 sm:text-lg md:text-lg xl:text-lg lg:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-xl md:px-6 lg:px-7 xl:px-7 2xl:px-7 3xl:px-7 4xl:px-7 md:py-6 lg:py-7 xl:py-7 2xl:py-7 3xl:py-7 4xl:py-7 5xl:px-9 5xl:py-9 5xl:text-3xl 6xl:px-9 6xl:py-9 6xl:text-3xl' variant={'default'}><Link href={'/projects'}>Projects</Link></Button>
              <Button className='text-xs pt-1 pb-1 pl-3 pr-3 hover:bg-zinc-700  rounded-xl   xs:py-6  xs:text-base xs:px-6 sm:py-6 sm:px-6 sm:text-lg md:text-lg xl:text-lg lg:text-lg 2xl:text-xl 3xl:text-xl md:px-6 lg:px-7 xl:px-7 2xl:px-7 3xl:px-7 4xl:px-7 md:py-6 lg:py-7 xl:py-7 2xl:py-7 3xl:py-7 4xl:py-7 5xl:px-9 5xl:py-9 5xl:text-3xl 6xl:px-9 6xl:py-9 6xl:text-3xl'><Link href={'https://docs.google.com/document/d/1_mtnMOfXls6Bx0yFG8Ar6uoYQnHZuU8k6wHKTCIec40/edit?usp=sharing'}>Download CV</Link></Button>
          </div>
          <div className='flex items-center gap-2 '>
            <Mail size={10} className=' xs:w-3 xs:h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 3xl:w-4 3xl:h-4 4xl:w-4 4xl:h-4  5xl:w-7 5xl:h-7 6xl:w-7 6xl:h-7 '/>
            <p className='text-cyan-400 text-[10px] xs:text-base  sm:text-lg md:text-lg xl:text-lg lg:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-xl 5xl:text-3xl 6xl:text-3xl'>manishvsharma1@gmail.com</p>
            {checkifEmailCopy == false ? <Copy size={10} className='cursor-pointer xs:w-3 xs:h-3  sm:w-2 sm:h-2 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 3xl:w-4 3xl:h-4 4xl:w-4 4xl:h-4 5xl:w-7 5xl:h-7 6xl:w-7 6xl:h-7' onClick={handlecopyButton}/> : <CopyCheckIcon  size={10} className='cursor-pointer xs:w-3 xs:h-3  sm:w-2 sm:h-2 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 3xl:w-4 3xl:h-4 4xl:w-4 4xl:h-4 5xl:w-7 5xl:h-7 6xl:w-7 6xl:h-7' onClick={() => setCheckIfEmailCopy(false)} />}
          </div>
        </div>
      </div>

      <div className='bg-[#1e1e1e] py-10 pl-48 pr-48 mt-10 flex flex-col gap-10 gridlinesdesign xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]'>
         <div className='flex flex-col gap-4'>
            <h1 className='text-xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl 4xl:text-5xl 5xl:text-6xl 6xl:text-6xl'>About me</h1>
            <p className='pt-5 w-[80%] text-[13px] xs:text-base xs:w-[100%] sm:text-lg sm:w-[95%] md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>
              <span className='opacity-50 leading-6'>Hi, {"I’m"} Manish Sharma a passionate developer with a solid foundation in JavaScript, TypeScript, and SQL, along with a working knowledge of Java. {"I’m"} currently expanding my skill set by learning</span>
              <span className='text-cyan-400 cursor-pointer leading-6'><Link href={'https://go.dev/'}> Go</Link> </span>
              <span className='opacity-50 leading-6'> because of itspowerful features like native concurrency, the defer keyword, and efficient garbage collection, and cuz his avatar also looks cool, all of which make it ideal for building scalable web services. </span>
            </p>
            <p className='pt-5 w-[80%] text-[13px] xs:text-base xs:w-[100%] sm:text-lg sm:w-[95%] md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>
              <span className='opacity-50 leading-6'>When {"I’m"} not coding, {"I’m"} diving into</span>   
              <span className='text-cyan-400 leading-6'> tech blogs, </span>
              <span className='opacity-50 leading-6'> 
              watch youtube video to learn about new technology. I also enjoy playing basketball.</span>
            </p>

            <p className='pt-5 w-[80%] text-[13px] xs:text-base xs:w-[100%] sm:text-lg sm:w-[95%] md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>
            <span className='opacity-50 leading-6'>If {"you’re"} looking to connect over shared interests or explore potential collaborations, please feel free to reach out. {"I’m"} always open to discussing new ideas and learning opportunities.</span>
            </p>
         </div> 

         <div className='flex flex-col gap-4'>
            <h1 className='text-xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-5xl 4xl:text-5xl 5xl:text-6xl 6xl:text-6xl'>Skills & Technology</h1>
            <div>
              <p className='pt-5 w-[70%] text-[13px] opacity-50 leading-6 xs:text-base xs:w-[100%] sm:text-lg sm:w-[95%] md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>{"I’m"} much Famaliar with Javascript, Typescript, Sql, Python, C, Java also Showing interest in Go.</p>
              <p className='pt-2 w-[70%] text-[13px] opacity-50 leading-6 xs:text-base xs:w-[100%] sm:pt-4 sm:text-lg sm:w-[95%] md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>Framework, Library, Services - React, Next Js, Node js, Express js, Postgresql, MongoDB, Redis ,Docker and etc.</p>
            </div>
         </div>

         <div className="relative flex size-full items-center  justify-center overflow-hidden xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]">
            <IconCloud images={images} />
         </div>

      </div>
    </div>
  )
}


