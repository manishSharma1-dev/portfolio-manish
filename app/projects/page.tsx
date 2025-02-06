"use client"

import { useEffect, useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Skeleton } from "@/components/ui/skeleton"
import { LinkIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

type repoTye = {
  name : string;
  html_url : string;
  description : string;
}


export default function Page() {
  const [repos,setRepoData] = useState<repoTye[] | null>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const TOKEN = process.env.NEXT_PUBLIC_GITHUB_API_KEY;

    const fetchProfileUser = async() => {

      try {

        const response = await fetch('https://api.github.com/users/manishSharma1-dev/repos',{
          headers : {
            Authorization: `token ${TOKEN}`,
          }
        })

        if(!response.ok){
          const errText = await response.text()
          console.log(errText)
          return;
        }
  
        const data = await response.json()

        setRepoData(data)

      } catch (error) {

        console.error("Repo Accessing Failed",error)

      } finally {
        setLoading(true);
      }
    }

    fetchProfileUser()

  },[])


  function SkeletonCard() { 
    return (
      <div className="flex flex-col justify-center gap-y-2 pt-10 items-center xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]">
        <Skeleton className='h-7 w-1/5 bg-gray-700' />
        <Skeleton className='h-7 w-1/5 bg-gray-700' />
      </div>
    )
  }

  return (
    <div className='bg-black min-h-screen text-white  xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]'>

      <h1 className='text-center pt-10 font-semibold xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>
        <span>Project </span>
        <span className='text-cyan-400'>Section.</span>
      </h1>
      <p className='text-sm text-center pt-8 xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>
          <span className=' opacity-50'>{"I've"} worked on a variety of </span>
          <span className='font-semibold'> real-world projects, </span>
          <span className=' opacity-50'>utilizing modern technologies like Next.js, TypeScript, and Node.js to tackle practical challenges. </span>
      </p>

      <div>
      { loading === false ? (
        <div>
          <p className='text-center pt-10 xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl'>Repos is being loading here!</p>
          <SkeletonCard />
        </div> 
      ) : (
        <div className='flex flex-col gap-10 pt-8 xs:px-4 sm:px-10 md:px-32 lg:px-52 xl:px-52 2xl:px-60 3xl:px-72 4xl:px-80 5xl:px-96 6xl:px-96'>
          { Array.isArray(repos) && repos.map((repo : repoTye ,index : number) => (

            <div className='bg-[#1e1e1e] pt-5 pb-5 pl-8 pr-8 rounded-sm cursor-pointer hover:bg-neutral-800' key={index}>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/167399572?v=4'" className='rounded-[50%] w-10' />
              <AvatarFallback>{repo?.name}</AvatarFallback>
            </Avatar>
                <div className='text-sm pt-4 flex flex-col gap-1' >
                  <div className='flex justify-between'>
                    <h1 className='font-bold xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-xl 5xl:text-2xl 6xl:text-3xl'>{repo?.name}</h1>
                    <span><Link href={repo?.html_url}><LinkIcon size={12} className='text-cyan-400' /></Link></span>
                  </div>
                  <p className='text-xs opacity-40 w-[80%] xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl 3xl:text-xl 4xl:text-xl 5xl:text-2xl 6xl:text-3xl'>{repo?.description ?? "No description Avialable for this"}</p>
                </div>
            </div>

          ))}
        </div>
      )}
      </div>

    </div>
  )
}