import { LayoutDashboard, ChevronRight } from './icons'
import Link from 'next/link'
import styles from './sidebar.module.css'

const menus = [
  {
    id: 1,
    name: 'Home',
    href: '/dashboard',
    collapsable: false,
    icon: <LayoutDashboard width='16' height='16' />
  },
  {
    id: 2,
    name: 'Resumen mes',
    href: '/resumen',
    collapsable: false,
    icon: <LayoutDashboard width='16' height='16' />
  },
  {
    id: 4,
    name: 'Proyectos',
    root_path: 'proyectos',
    collapsable: true,
    icon: <LayoutDashboard width='16' height='16' />,
    submenus: [
      {
        id: 41,
        name: 'Nuevo proyecto',
        href: '/proyectos/add'
      },
      {
        id: 42,
        name: 'Listar proyectos',
        href: '/proyectos/table'
      }
    ]
  },
  {
    id: 5,
    name: 'Agentes',
    root_path: 'agentes',
    collapsable: true,
    icon: <LayoutDashboard width='16' height='16' />,
    submenus: [
      {
        id: 51,
        name: 'Agregar agente',
        href: '/dashboard/agentes/add'
      },
      {
        id: 52,
        name: 'Listar agentes',
        href: '/dashboard/agentes/table'
      }
    ]
  },
  {
    id: 6,
    name: 'Lotes',
    root_path: 'lotes',
    collapsable: true,
    icon: <LayoutDashboard width='16' height='16' />,
    submenus: [
      {
        id: 61,
        name: 'Agregar lote',
        href: 'lotes/crear'
      },
      {
        id: 62,
        name: 'Listar lotes',
        href: 'lotes/lista'
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
  const menuStyles = 'w-full flex items-center gap-1.5 hover:bg-sky-100 rounded px-3 py-2 hover:text-blue-600 transition-colors'
  const submenuStyles = 'w-full block rounded pl-8 py-1 hover:text-blue-600 transition-colors'

  return (
    <nav className=''>
      <ul>
        { menus.map(menu => (
          !menu.collapsable
            ? <li key={menu.id}>
                  <Link href={menu.href} className={`${menuStyles} ${pathname === menu.href ? 'bg-sky-100 text-blue-600' : 'text-gray-700'}`}>
                    <i>{menu.icon}</i>
                    <span className='text-sm'>{menu.name}</span>
                  </Link>
                </li>
            : <li key={menu.id}>
                <button className={`${menuStyles} ${pathname.includes(menu.root_path) ? 'bg-sky-100 text-blue-600' : 'text-gray-700'}`} onClick={handleClick}>
                  <i>{menu.icon}</i>
                  <span className='flex-1 text-left text-sm'>{menu.name}</span>
                  <i className='icon'><ChevronRight classname='transition-transform' width='15' height='15' /></i>
                </button>

                <div className={`${styles.panel}`}>
                  <ul className='flex flex-col'>
                    { menu.submenus.map(submenu => (
                      <li key={submenu.id}>
                        <Link href={submenu.href} className={`${submenuStyles} ${pathname === submenu.href ? 'text-blue-600' : 'text-gray-700'}`}>
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
