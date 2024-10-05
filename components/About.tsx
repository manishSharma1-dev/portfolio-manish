import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


export default function About() {
  return (
    <div>

      <div className='pl-52 pr-52 pt-20'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-bold bg-gradient-to-tr from-red-500 to-fuchsia-700 inline-block text-transparent bg-clip-text'>Manish Sharma</h1>
          <p className='text-sm'>Aspiring Software Engineer/Developer</p>
          <p className='text-sm'>Turning <span className='opacity-50'>ideas</span> into code ...</p>
          <div className='flex gap-3 pt-3'>
              <Button className='text-xs pt-1 pb-1 pl-3 pr-3' variant={'secondary'}><Link href={'/projects'}>Projects</Link></Button>
              <Button className='text-xs pt-1 pb-1 pl-3 pr-3' variant={'ghost'}>Download CV</Button>
          </div>
        </div>
      </div>

      <div className='bg-[#1e1e1e] pt-16 pb-16 pl-52 pr-52 mt-10 flex flex-col gap-5 gridlinesdesign'>
         <div>
            <h1 className='underline text-xl underline-offset-2'>About me</h1>
            <p className='pt-5 w-[70%] text-[13px] opacity-70'>I am Manish Sharma, a developer with strong Foundation in javascript, typescript, Sql, and basices in Java. Currently i am learning go because of its high performance in building backend projects. Always eager to learn, and excited about leveraging technology to drive innovation. Let' s Connect.</p>
         </div> 

         <div>
            <h1 className='underline text-xl underline-offset-2'>Skills & Technology</h1>
            <p className='pt-5 w-[70%] text-[13px] opacity-70'>I'm much Famaliar with Javascript, Typescript, Sql, Python, C, Java also Showing interest in Go.</p>
            <p className='pt-2 w-[70%] text-[13px] opacity-70'>Framework, Library, Services - React, Next Js, Node js, Express js, Postgresql, MongoDB, Redis ,Docker , AWS( S3, ECS ) and etc.</p>
         </div> 
      </div>

    </div>
  )
}


