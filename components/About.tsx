import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


export default function About() {
  return (
    <div>

      <div className='pl-48 pr-48 pt-20'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-bold inline-block '>Hi ,I'm <span className='text-cyan-400'>Manish Sharma</span></h1>
          <p className='text-sm font-semibold'>Aspiring Software Engineer/Developer who loves to</p>
          <p className='text-sm'>
            <span className='opacity-50'>Turn </span>
            <span>ideas </span> 
            <span className='opacity-50'>into code ...</span>
          </p>
          <div className='flex gap-3 pt-3'>
              <Button className='text-xs pt-1 pb-1 pl-3 pr-3' variant={'secondary'}><Link href={'/projects'}>Projects</Link></Button>
              <Button className='text-xs pt-1 pb-1 pl-3 pr-3'>Download CV</Button>
          </div>
        </div>
      </div>

      <div className='bg-[#1e1e1e] pt-10 pb-16 pl-48 pr-48  mt-10 flex flex-col gap-10 gridlinesdesign'>
         <div className='flex flex-col gap-4'>
            <h1 className='text-xl'>About me</h1>
            <p className='pt-5 w-[80%] text-[13px]'>
              <span className='opacity-50 leading-6'>Hi, I'm Manish Sharma—a passionate developer with a solid foundation in JavaScript, TypeScript, and SQL, along with a working knowledge of Java. I’m currently expanding my skill set by learning</span>
              <span className='text-cyan-400 cursor-pointer leading-6'><Link href={'https://go.dev/'}> Go</Link> </span>
              <span className='opacity-50 leading-6'> because of itspowerful features like native concurrency, the defer keyword, and efficient garbage collection, and cuz his avatar also looks cool, all of which make it ideal for building scalable web services. </span>
            </p>
            <p className='pt-5 w-[80%] text-[13px]'>
              <span className='opacity-50 leading-6'>When I'm not coding, I'm diving into</span>   
              <span className='text-cyan-400 leading-6'> tech blogs, </span>
              <span className='opacity-50 leading-6'> 
              watch youtube video to learn about new technology. I also enjoy playing basketball.</span>
            </p>

            <p className='pt-5 w-[80%] text-[13px]'>
            <span className='opacity-50 leading-6'>If you’re looking to connect over shared interests or explore potential collaborations, please feel free to reach out. I’m always open to discussing new ideas and learning opportunities.</span>
            </p>
         </div> 

         <div className='flex flex-col gap-4'>
            <h1 className='text-xl'>Skills & Technology</h1>
            <div>
              <p className='pt-5 w-[70%] text-[13px] opacity-50 leading-6'>I'm much Famaliar with Javascript, Typescript, Sql, Python, C, Java also Showing interest in Go.</p>
              <p className='pt-2 w-[70%] text-[13px] opacity-40 leading-6'>Framework, Library, Services - React, Next Js, Node js, Express js, Postgresql, MongoDB, Redis ,Docker , AWS( S3, ECS ) and etc.</p>
            </div>
         </div> 
      </div>

    </div>
  )
}


