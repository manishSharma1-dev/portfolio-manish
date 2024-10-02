import React from 'react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center pt-3 pb-4 pl-4 pr-4 text-sm border-b'>
      <div className='flex gap-10'>
          <p>Projects</p>
          <p>BLogs </p>
          <p>Contact</p>
      </div>

      <Button className='border pt-1 pb-1 pl-3 pr-3'><GitHubLogoIcon /></Button>
    </div>
  )
}
