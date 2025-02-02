"use client"

import React from 'react'
import { GitHubLogoIcon,TwitterLogoIcon,LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { useRouter } from 'next/navigation'

export default function Navbar() {

  const router = useRouter()

  function handletoemail(){
    const email = "your-email@example.com";
    
    window.location.href = `mailto:${email}`
  }

  return (
    <div className='flex justify-between px-44 items-center py-5'>
      <div className='flex gap-6 items-center pl-4'>
        <Avatar>
            <AvatarImage src='./githubuser.png' className='cursor-pointer rounded-[50%] w-6 hover:grayscale ' />
            <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        <Link href={"/projects"} className='text-sm cursor-pointer hover:opacity-70'>projects</Link>
      </div>
      <div className='flex gap-5 items-center pr-4'>
        <Mail className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400' width={15} height={15} onClick={handletoemail}/>
        <GitHubLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400' width={15} height={15} onClick={() => router.push('https://github.com/manishSharma1-dev')}/>
        <TwitterLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400' width={15} height={15} onClick={() => router.push('https://x.com/Manish1_sh')}/>
        <LinkedInLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400' width={15} height={15} onClick={() => router.push('https:///www.linkedin.com/in/manish-sharma111')}/>
      </div>
    </div>
  )
}