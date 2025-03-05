import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
    <div className='w-full flex group items-center gap-2 px-4 border border-input rounded-xl md:w-[40%] bg-[#333839]'>
        {/* <Input /> */}
        <input className='py-2 w-full bg-transparent text-base  text-gray-50 border-none outline-none active:outline-none ring-0 placeholder:text-gray-400' type="text" />
        <SearchIcon className='w-5 h-5 cursor-pointer duration-150 group-hover:text-rose-400' />
    </div>
  )
}

export default Search