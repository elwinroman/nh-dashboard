'use client'

import { usePathname } from 'next/navigation'
import SidebarLinks from './sidebar-links'
import styles from './sidebar.module.css'

export default function Sidebar () {
  const pathname = usePathname()

  return (
    <div className='fixed z-10 md:relative md:block'>
      <aside className={`w-[280px] h-screen bg-[rgba(255,255,255,0.8)] md:bg-slate-50 ${styles.scroll}`}>
        <div className='flex flex-col gap-6 px-2 py-6 border'>
          <div className='flex flex-col items-center gap-2'>
            <div className=''><img src="/logos/logotipo.svg" alt="logo nh" className='w-36'/></div>
            <h2 className='text-xl font-bold'>NH Dashboard</h2>
          </div>

          <SidebarLinks pathname={pathname}/>
        </div>
      </aside>
    </div>
  )
}
