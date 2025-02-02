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
      <div className="flex flex-col justify-center gap-y-2 items-center">
        <Skeleton className='h-7 w-1/5 bg-gray-700' />
        <Skeleton className='h-7 w-1/5 bg-gray-700' />
      </div>
    )
  }

  return (
    <div className='bg-black min-h-screen text-white'>
      <h1 className='text-center pt-10 text-2xl font-semibold'>
        <span>Project </span>
        <span className='text-cyan-400'>Section.</span>
      </h1>
      <p className='text-sm text-center pt-8 px-4'>
          <span className=' opacity-50'>I've worked on a variety of </span>
          <span className='font-semibold'> real-world projects, </span>
          <span className=' opacity-50'>utilizing modern technologies like Next.js, TypeScript, and Node.js to tackle practical challenges. </span>
      </p>

      <div>
      { loading === false ? (
        <div>
          <p className='text-center'>Repos is being loading here!</p>
          <SkeletonCard />
        </div> 
      ) : (
        <div className='flex flex-col gap-5 px-72 pt-10'>
          { Array.isArray(repos) && repos.map((repo : repoTye ,index : number) => (

            <div className='bg-[#1e1e1e] pt-5 pb-5 pl-8 pr-8 rounded-sm cursor-pointer hover:bg-neutral-800' key={index}>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/167399572?v=4'" className='rounded-[50%] w-10' />
              <AvatarFallback>{repo?.name}</AvatarFallback>
            </Avatar>
                <div className='text-sm pt-4 flex flex-col gap-1' >
                  <div className='flex justify-between '>
                    <h1 className='font-bold'>{repo?.name}</h1>
                    <span><Link href={repo?.html_url}><LinkIcon size={12} className='text-cyan-400' /></Link></span>
                  </div>
                  <p className='text-xs opacity-40 w-[80%]'>{repo?.description ?? "No description Avialable for this"}</p>
                </div>
            </div>

          ))}
        </div>
      )}
      </div>

    </div>
  )
}

{/* <div className='flex flex-col content-center gap-4 pt-10'> 

{ loading === false ? (
  <>
    <p className='text-center'>Repos is being loading here!</p>
   <SkeletonCard />
  </> 
) : (
  <div>
    { Array.isArray(repos) && repos.map((repo : any ,index : number) => (

      <div className='bg-[#1e1e1e] pt-5 pb-5 pl-8 pr-8 rounded-sm' key={index}>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/167399572?v=4'" className='rounded-[50%] w-10' />
        <AvatarFallback>{repo?.name}</AvatarFallback>
      </Avatar>
          <div className='text-sm pt-4 flex flex-col gap-1' >
            <div className='flex justify-between '>
              <h1 className='font-bold'>{repo?.name}</h1>
              <span><Link href={repo?.html_url}><LinkIcon size={12} color='fuchsia' /></Link></span>
            </div>
            <p className='text-xs opacity-40 w-[80%]'>{repo?.description ?? "No description Avialable for this"}</p>
          </div>
      </div>

    ))}
  <p className='text-center pt-10'>
    <span className='opacity-50 text-sm'>More coming </span>
    <span className='text-cyan-400 underline underline-offset-4 decoration-yellow-400 decoration-wavy'>soon.</span>
    </p>
  </div>
)}
</div>  */}