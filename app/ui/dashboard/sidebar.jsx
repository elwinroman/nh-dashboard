'use client'

import { outfit } from '../fonts'
import { usePathname } from 'next/navigation'
import { useSidebarStore } from '../../store/sidebar'
import SidebarLinks from './sidebar-links'
import styles from './sidebar.module.css'

export default function Sidebar () {
  const pathname = usePathname()
  const toggleSidebar = useSidebarStore(state => state.toggle)

  return (
    <div className={`z-10 fixed md:block md:relative md:left-0 transition-[left] ${toggleSidebar ? 'left-0' : '-left-[100%]'}`}>
      <aside className={`${styles.scroll} w-sidebar-sm h-screen bg-white/85 backdrop-blur-sm shadow-[0_0_30px_#0003] md:w-sidebar-md md:shadow-none md:border md:border-gray-200`}>
        <div className='flex flex-col'>
          <div className='h-20 flex justify-center items-center gap-2 bg-white sticky top-0 opacity-0 md:opacity-100'>
            <div className=''><img src="/logos/logo-hp.svg" alt="logo nh" className='w-10'/></div>
            <h2 className={`${outfit.className} text-3xl font-bold text-slate-700`}>HorizonPRO</h2>
          </div>

          <SidebarLinks pathname={pathname} />
        </div>
      </aside>
    </div>
  )
}
