'use client'
import React from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import githubUser from "@/public/githubuser.png"
import { Mail } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page() {

  const router = useRouter()

  function handletoemail(){
    const email = "your-email@example.com";
    
    window.location.href = `mailto:${email}`
  }

  return (
    <div className="bg-black min-h-screen text-white py-10  xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]">

      <div className=' flex flex-col'>
        <Image src={githubUser} alt='Profile Image' className='w-60 h-60 rounded-lg xs:w-40 xs:h-40 sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-60 lg:h-60 xl:w-72 xl:h-72 2xl:w-72 2xl:h-72 3xl:w-72 3xl:h-72 4xl:w-80 4xl:h-80 5xl:w-80 5xl:h-80 6xl:w-80 6xl:h-80 7xl:w-80 7xl:h-80'/>
        <div className='flex gap-7 items-center pt-6 py-6 xs:py-8 sm:py-10 md:py-10 lg:py-10 xl:py-10 2xl:py-10 3xl:py-10 4xl:py-10 5xl:py-10 6xl:py-10'>
                <Mail className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5 3xl:w-6 3xl:h-6 2xl:w-5 2xl:h-5  4xl:w-6 4xl:h-6 5xl:w-6 5xl:h-6 6xl:w-6 6xl:h-6' width={15} height={15} onClick={handletoemail}/>
                <GitHubLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5 3xl:w-6 3xl:h-6 2xl:w-5 2xl:h-5  4xl:w-6 4xl:h-6 5xl:w-6 5xl:h-6 6xl:w-6 6xl:h-6' width={15} height={15} onClick={() => router.push('https://github.com/manishSharma1-dev')}/>
                <TwitterLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5 3xl:w-6 3xl:h-6 2xl:w-5 2xl:h-5  4xl:w-6 4xl:h-6 5xl:w-6 5xl:h-6 6xl:w-6 6xl:h-6' width={15} height={15} onClick={() => router.push('https://x.com/Manish1_sh')}/>
                <LinkedInLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-5 xl:h-5 3xl:w-6 3xl:h-6 2xl:w-5 2xl:h-5  4xl:w-6 4xl:h-6 5xl:w-6 5xl:h-6 6xl:w-6 6xl:h-6' width={15} height={15} onClick={() => router.push('https:///www.linkedin.com/in/manish-sharma111')}/>
        </div>
        <div className='flex flex-col  opacity-85 gap-8 leading-10 xs:text-base xs:w-[100%] sm:text-lg sm:w-[95%] md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>
          <p>Hi, {"I'm"} <span className='text-cyan-400'>Manish Sharma</span>, a 3rd-year Computer Science student and a passionate developer with a strong foundation in JavaScript, TypeScript, SQL, and MongoDB, along with experience in Python, C, and Java. Currently, {"I’m"} diving into Go, drawn by its powerful features like native concurrency, the defer keyword, and efficient garbage collection.</p>
          <p>Beyond coding, {"I’m"} always eager to learn and stay up-to-date with the latest tech trends. Whether {"it's "}reading tech blogs, watching YouTube tutorials, or experimenting with new frameworks, {"I’m"} constantly expanding my knowledge. I also enjoy playing basketball and engaging in discussions about technology, innovation, and software development.</p>
          <p>If {"you're"} interested in connecting over shared interests, discussing exciting tech ideas, or exploring collaboration opportunities, feel free to reach out!</p>
        </div>
        
        <div className='pt-10'>
          <p className='text-center opacity-50 leading-6'>Always open to learn, {"Let's"} have a quick Chat.</p>

          <div className='flex justify-center items-center gap-5 xs:py-4 sm:py-4 md:py-4 lg:py-4 xl:py-6 2xl:py-7 3xl:py-8 4xl:py-8'>
            <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/")}>home</p>
            <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/about")}>About</p>
            <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/projects")}>Project</p>
            <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/blog")}>Blog</p>
          </div>

          <div className='flex justify-center items-center gap-4 pt-5'>
            <Image src={githubUser} alt='User Profile' className='cursor-pointer hover:grayscale w-6 rounded-[50%] xs:w-10 sm:w-12 md:w-14 lg:w-14 xl:w-14 2xl:w-16 3xl:w-14 4xl:w-14 5xl:w-16 6xl:w-16'/>
            <p className='font-semibold xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl 4xl:text-3xl 5xl:text-3xl 6xl:text-4xl'>Manish Sharma</p>
          </div>

          <div className='flex gap-7 items-center justify-center pt-6 py-6 xs:py-8 sm:py-10 md:py-10 lg:py-10 xl:py-10 2xl:py-10 3xl:py-10 4xl:py-10 5xl:py-10 6xl:py-10'>
            <Mail className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-8 3xl:h-8 2xl:w-8 2xl:h-8  4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 6xl:w-10 6xl:h-10' width={15} height={15} onClick={handletoemail}/>
            <GitHubLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-8 3xl:h-8 2xl:w-8 2xl:h-8  4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 6xl:w-10 6xl:h-10' width={15} height={15} onClick={() => router.push('https://github.com/manishSharma1-dev')}/>
            <TwitterLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-8 3xl:h-8 2xl:w-8 2xl:h-8  4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 6xl:w-10 6xl:h-10' width={15} height={15} onClick={() => router.push('https://x.com/Manish1_sh')}/>
            <LinkedInLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-8 3xl:h-8 2xl:w-8 2xl:h-8  4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 6xl:w-10 6xl:h-10' width={15} height={15} onClick={() => router.push('https:///www.linkedin.com/in/manish-sharma111')}/>
          </div>
        </div>
      </div>
  
    </div>
  )
}