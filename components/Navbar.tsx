"use client"

import React from 'react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Linkedin, MailIcon } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {

  function handletoemail(){
    const email = "your-email@example.com";
    
    window.location.href = `mailto:${email}`
  }

  return (
    <div className='flex justify-between items-center pt-3 pb-4 pl-4 pr-4 text-sm border-b'>
      <div className='flex gap-10'>
          <p>Projects</p>
          <p>Blogs </p>
      </div>

      <div className='flex gap-6 items-center'>
        <Link href={'https://github.com/manishSharma1-dev'}><GitHubLogoIcon className='opacity-50 hover:opacity-100'/></Link>
        <Link href={'https:///www.linkedin.com/in/manish-sharma111'}><Linkedin size={17} className='opacity-50 hover:opacity-100 '/></Link>
        <MailIcon size={17} className='opacity-50 hover:opacity-100 cursor-pointer'  onClick={handletoemail}/>
      </div>
    </div>
  )
}
