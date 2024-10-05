"use client"

import { useEffect, useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Skeleton } from "@/components/ui/skeleton"
import { LinkIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'


export default function page() {
  const [repos,setRepoData] = useState([])
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
          console.error("Response received is not ok")
        }
  
        const data = await response.json()
  
        console.log("Repo data fetched successfuly",data)
  
        setRepoData(data)

      } catch (error : any) {

        console.error("Repo Accessing Failed",error?.message)

      } finally {
        setLoading(true);
      }
    }

    fetchProfileUser()

  },[])


  function SkeletonCard() {
    return (
      <div className="flex flex-col justify-center gap-y-2 items-center">
        <Skeleton className='h-7 w-2/5 bg-gray-700' />
        <Skeleton className='h-7 w-2/5 bg-gray-700' />
      </div>
    )
  }

  return (
    <div className="bg-primary text-white min-h-screen">
       <div className='pt-10 pb-10 pl-28 pr-28 '>

         <div className='flex flex-col justify-center items-center'>
          <h1 className='text-center text-2xl font-bold bg-gradient-to-tr from-red-500 to-fuchsia-700 inline-block text-transparent bg-clip-text pb-3'>Projects</h1>
            <p className=' text-sm opacity-65'>I've worked on a variety of <span className='font-bold text-opacity-100 underline underline-offset-4'>real-world projects,</span>utilizing modern technologies like Next.js, TypeScript, and Node.js to tackle practical challenges. </p>
         </div>

        <div className='flex flex-col content-center gap-4 pt-10 pl-60 pr-60'> 

        { loading === false ? (
          <>
            <p className='text-center'>Repos is being loading here!</p>
           <SkeletonCard />
          </> 
        ) : (
          <>
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
                    <p className='text-xs opacity-40 w-[80%]'>{repo?.description ? repo?.description : "No description Avialable for this"}</p>
                  </div>
              </div>

            ))}
          <p className='text-center pt-10'>More coming <span className='text-fuchsia-600 underline underline-offset-4 decoration-yellow-400 decoration-wavy'>soon.</span></p>
          </>
        )}
        </div> 
      </div>
    </div>
  )
}
