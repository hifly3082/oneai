import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainPage from '../pages/MainPage'
import '../global.css'

export default function RootLayout() {
  const location = useLocation()

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-primary to-secondary'>
      {location.pathname === '/' && <Header />}
      <div className='flex-1 flex flex-col gap-4 items-center justify-center py-[43px]'>
        {location.pathname === '/' && <MainPage />}
        <Outlet />
      </div>
      {location.pathname === '/' && <Footer />}
    </div>
  )
}
