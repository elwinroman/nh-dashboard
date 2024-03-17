'use client'

import { Menu, Bell, Settings } from './icons'
import { useSidebarStore } from '../../store/sidebar'

const handleClick = (toggle, updateToggle) => () => {
  updateToggle(!toggle)
}
export default function Navbar () {
  const toggle = useSidebarStore(state => state.toggle)
  const updateToggle = useSidebarStore(state => state.updateToggle)

  return (
    <div className='w-full h-20 sticky top-0 z-20 md:z-0'>
      <nav className='w-full h-full bg-white flex items-center px-5 shadow-[0_.75rem_1.5rem_#12263f08]'>
        <div className='flex-1 m-0 md:hidden'>
          <i className='cursor-pointer' onClick={handleClick(toggle, updateToggle)}><Menu classname='text-gray-500' /></i>
        </div>

        <div className='flex gap-5 md:flex-1 md:justify-end text-gray-500'>
          <i><Bell /></i>
          <i><Settings /></i>
          <button className='w-9 h-9 rounded-full p-0.5 bg-gray-100 transition-color duration-200 hover:scale-105'>
            <div className='overflow-hidden rounded-full border-2 border-white'>
              <img src='/user-anonymous-thumbail.webp' alt='user anonymous profile' />
        </div>
      </nav>
    </div>

  )
}
