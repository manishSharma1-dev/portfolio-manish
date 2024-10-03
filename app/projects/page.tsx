import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Link } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div>
       <div className='pt-10 pb-10 pl-28 pr-28'>
        <div className='flex flex-col gap-4'>  
          
          <div className='bg-[#1e1e1e] pt-5 pb-5 pl-8 pr-8 rounded-sm'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className='text-sm pt-4 flex flex-col gap-1' >
                <div className='flex justify-between '>
                  <h1 className='font-bold'>Title</h1>
                  <span><Link size={12} color='fuchsia' /></span>
                </div>
                <p className='text-xs opacity-40'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat atque eius dolorem? Molestias possimus quos suscipit fugit sapiente, impedit quisquam laboriosam </p>
              </div>
          </div>

        </div> 
      </div>

    </div>
  )
}
