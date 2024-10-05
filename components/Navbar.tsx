"use client"

import React from 'react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Linkedin, MailIcon } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export default function Navbar() {

  function handletoemail(){
    const email = "your-email@example.com";
    
    window.location.href = `mailto:${email}`
  }

  return (
    <div className='flex justify-between items-center pt-2 pb-4 pl-4 pr-4 text-sm border-b'>
      <div className='flex gap-10 items-center'>
          <div>
            <Avatar>
              <AvatarImage src='https://avatars.githubusercontent.com/u/167399572?v=4' className=' rounded-[50%] w-7 hover:grayscale' />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
          </div>
          <p><Link href={'/projects'}>Projects</Link></p>
          <p><Link href={'/blogs'}><span className='font-bold decoration-2 underline underline-offset-4 hover:opacity-50 decoration-fuchsia-600 '>Blogs</span></Link></p>
      </div>

      <div className='flex gap-6 items-center'>
        <Link href={'https://github.com/manishSharma1-dev'}><GitHubLogoIcon  fontSize={20} className='opacity-50 hover:opacity-100 '/></Link>
        <Link href={'https:///www.linkedin.com/in/manish-sharma111'}><Linkedin size={20} className='opacity-50 hover:opacity-100 '/></Link>
        <MailIcon size={20} className='opacity-50 hover:opacity-100 cursor-pointer'  onClick={handletoemail}/>
      </div>
    </div>
  )
}
