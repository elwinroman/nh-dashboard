import { UserSpeak, LayersMinimalistic, Widget5, ChevronRight, Point, UsersGroupRounded, Library } from './icons'

import Link from 'next/link'
import styles from './sidebar.module.css'

const menus = [
  {
    name: 'Home',
    href: '/dashboard',
    collapsable: false,
    icon: <Widget5 classname='w-[22px]' />
  },
  {
    name: 'Proyectos',
    root_path: 'proyectos',
    collapsable: true,
    icon: <LayersMinimalistic classname='w-[22px]' />,
    submenus: [
      {
        name: 'Nuevo proyecto',
        href: '#'
      },
      {
        name: 'Listar proyectos',
        href: '#'
      }
    ]
  },
  {
    name: 'Lotes',
    root_path: 'lotes',
    collapsable: true,
    icon: <Library classname='w-[22px]' />,
    submenus: [
      {
        name: 'Agregar lote',
        href: '#'
      },
      {
        name: 'Listar lotes',
        href: '#'
      }
    ]
  },
  {
    name: 'Agentes',
    root_path: 'agentes',
    collapsable: true,
    icon: <UserSpeak classname='w-[22px]' />,
    submenus: [
      {
        name: 'Agregar agente',
        href: '/dashboard/agentes/add'
      },
      {
        name: 'Listar agentes',
        href: '/dashboard/agentes/table'
      }
    ]
  },
  {
    name: 'Clientes',
    root_path: 'clientes',
    collapsable: true,
    icon: <UsersGroupRounded classname='w-[22px]' />,
    submenus: [
      {
        name: 'Nuevo cliente',
        href: '#'
      },
      {
        name: 'Listar clientes',
        href: '#'
      }
    ]
  }
]

const handleClick = (e) => {
  const button = e.currentTarget
  const parent = button.parentNode
  const submenuWrapper = button.nextElementSibling
  parent.classList.toggle('active')

  const submenuPanel = submenuWrapper.firstElementChild
  const height = submenuPanel.offsetHeight

  const icon = button.querySelector('.icon > svg')

  if (parent.classList.contains('active')) { // expandir
    submenuWrapper.style.height = height + 'px'
    icon.style.transform = 'rotate(90deg)'
  } else { // collapsar
    submenuWrapper.style.height = 0
    icon.style.transform = 'rotate(0deg)'
  }
}

export default function SidebarLinks ({ pathname }) {
  return (
    <nav className='px-4 py-6'>
      <ul className='flex flex-col gap-1'>
        { menus.map(menu => (
          !menu.collapsable
            ? <li key={menu.name}>
                <Link
                  href={menu.href}
                  className={`${styles.menu} ${pathname === menu.href
                    ? 'bg-sky-100 text-blue-600 font-semibold hover:bg-sky-200'
                    : 'font-medium text-gray-500 hover:bg-gray-100'}`}
                >
                  <i>{menu.icon}</i>
                  <span className='text-sm'>{menu.name}</span>
                </Link>
              </li>
            : <li key={menu.name} className='group'>
                <button
                  className={`${styles.menu} ${pathname.includes(menu.root_path)
                    ? 'bg-sky-100 text-blue-600 font-semibold hover:bg-sky-200'
                    : 'font-medium text-gray-500 hover:bg-gray-100 group-[.active]:bg-gray-100'}`}
                  onClick={handleClick}
                >
                  <i>{menu.icon}</i>
                  <span className='flex-1 text-left text-sm'>{menu.name}</span>
                  <i className='icon'><ChevronRight classname='w-[14px] transition-transform' /></i>
                </button>

                <div className={`${styles.panel}`}>
                  <ul className='flex flex-col gap-1 py-1'>
                    { menu.submenus.map(submenu => (
                      <li key={submenu.name}>
                        <Link href={submenu.href}
                          className={`${styles.submenu} ${pathname === submenu.href
                            ? 'font-semibold'
                            : 'text-gray-500'}`}
                        >
                          <i>
                            <Point classname={`w-[12px] transition-transform ${pathname === submenu.href
                              ? 'text-blue-600 scale-150'
                              : 'text-gray-500'} `} />
                          </i>
                          <span className='text-sm'>{submenu.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
        ))}
      </ul>
    </nav>
  )
}
