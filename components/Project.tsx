import React from 'react'
import Image from 'next/image'
import project1 from '@/public/project-1.png'
import project2 from '@/public/project2.png'
import project3 from "@/public/project3.png"
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'


export default function Project() {
  return (
    <div className='pl-52 pr-52 pt-10 pb-3'>
      <h1 className='text-2xl font-bold bg-gradient-to-tr from-red-500 to-fuchsia-700 inline-block text-transparent bg-clip-text pb-3'>Projects</h1>
      <p className='text-sm opacity-65'>I've worked on a variety of <span className='font-bold text-opacity-100'>real-world projects,</span> applying modern technologies to solve practical challenges and build impactful applications.</p>

      <div className='flex justify-between items-center'>
         <p className='text-xs opacity-35 pt-4'>Some of them are listed here..</p> 
      </div>

      <div className='pt-10 pb-10 pl-20 pr-20'>
        <div className='flex gap-x-10 gap-y-10 flex-wrap justify-between'>

          <div className='w-[40%]'>
            <Image src={project1} alt='Github project' className='rounded-sm ' />
            <div className='flex flex-col text-sm pt-3 gap-1'>
              <div className='flex items-center gap-2 underline underline-offset-4'>
              <Link href={'https://github.com/manishSharma1-dev/finedPeace'}><h1 className='font-bold'>FindPeace</h1></Link>
                 <p><Link href={'https://github.com/manishSharma1-dev/finedPeace'}><LinkIcon size={10} color='fuchsia'/></Link></p>
              </div>
              <p className='text-xs opacity-40'>A platform where you can share your thought, or something that building over time. No profile, no follower just a moment of relief in total privacy.</p>
            </div>
          </div>

          <div className='w-[40%]'>
            <Image src={project2} alt='Github project' className='rounded-sm ' />
            <div className='flex flex-col text-sm pt-3 gap-2'>
              <div className='flex items-center gap-3 underline underline-offset-4'>
              <Link href={'https://github.com/manishSharma1-dev/AuctionPoint'}><h1 className='font-bold'>Auction Points</h1></Link>
                 <p><Link href={'https://github.com/manishSharma1-dev/AuctionPoint'}><LinkIcon size={10} color='fuchsia'/></Link></p>
              </div>
              <p className='text-xs opacity-40'>A platform where you can find the best price of the items.</p>
            </div>
          </div>

          <div className='w-[40%]'>
            <Image src={project3} alt='Github project' className='rounded-sm ' />
            <div className='flex flex-col text-sm pt-3 gap-1'>
              <div className='flex items-center gap-3 underline underline-offset-4'>
              <Link href={'https://github.com/manishSharma1-dev/twitter-Debate'}><h1 className='font-bold'>twitter-Debate</h1></Link>
                 <p><Link href={'https://github.com/manishSharma1-dev/twitter-Debate'}><LinkIcon size={10} color='fuchsia'/></Link></p>
              </div>
              <p className='text-xs opacity-40'>A fun project to generate twitter debate on various topics between leader's in tech giants. </p>
            </div>
          </div>

        </div>
      </div>

      <p  className='text-xs pt-4'>See all my project <span className='text-purple-500 underline underline-offset-2 '><Link href={'/projects'}>on project page.</Link></span></p>

    </div>
  )
}
