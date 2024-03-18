import Sidebar from '../ui/dashboard/sidebar'
import Navbar from '../ui/dashboard/navbar'

export default function LayoutDashboard ({ children }) {
  return (
    <div className='w-full h-full flex'>
      <Sidebar />
      <section className='flex-auto h-full overflow-y-auto'>
        <Navbar />
        <main className='h-auto p-10 bg-[#f1f5f9]'>
          { children }
        </main>
      </section>
    </div>
  )
}
