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
    <div className='flex justify-between items-center ml-36 mr-36 pt-5 pb-4 pl-4 pr-4 text-sm'>
      <div className='flex gap-12 items-center'>
          <div>
            <Avatar>
              <AvatarImage src='./githubuser.png' className='cursor-pointer rounded-[50%] w-7 hover:grayscale ' />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
          </div>
          <p className='hover:opacity-70'><Link href={'/projects'}>Projects</Link></p>
          <p><Link href={'/blogs'}><span className='hover:opacity-80 '>Blogs</span></Link></p>
      </div>

      <div className='flex gap-6 items-center'>
        <Link href={'https://github.com/manishSharma1-dev'}><GitHubLogoIcon  fontSize={20} className='opacity-50 hover:opacity-100 '/></Link>
        <Link href={'https:///www.linkedin.com/in/manish-sharma111'}><Linkedin size={18} className='opacity-50 hover:opacity-100 '/></Link>
        <MailIcon size={18} className='opacity-50 hover:opacity-100 cursor-pointer'  onClick={handletoemail}/>
      </div>
    </div> 
  )
}
