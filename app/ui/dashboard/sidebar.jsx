'use client'

import { usePathname } from 'next/navigation'
import SidebarLinks from './sidebar-links'
import styles from './sidebar.module.css'
import { useSidebarStore } from '../../store/sidebar'

const WIDTH_SIDEBAR = '280px'

export default function Sidebar () {
  const pathname = usePathname()
  const toggleSidebar = useSidebarStore(state => state.toggle)

  return (
    <div className={`z-10 fixed md:block md:relative md:left-0 transition-[left] ${toggleSidebar ? 'left-0' : '-left-[100%]'}`}>
      <aside className={`${styles.scroll} w-[${WIDTH_SIDEBAR}] h-screen bg-white/85 backdrop-blur-sm shadow-[0_0_30px_#0003] md:shadow-none md:border md:border-gray-200`}>
        <div className='flex flex-col'>
          <div className='h-20 flex justify-center items-center gap-2 bg-white sticky top-0 opacity-0 md:opacity-100'>
            <div className=''><img src="/logos/logo.svg" alt="logo nh" className='w-12'/></div>
            <h2 className='text-xl font-bold'>NH SYSMOBI</h2>
          </div>

          <SidebarLinks pathname={pathname} />
        </div>
      </aside>
    </div>
  )
}
