import './globals.css';

import NavBar from '@/app/Components/NavBar/NavBar';
import Footer from '@/app/Components/Footer/Footer';

export default function RootLayout({ children }) {
  return (
    <div className='back'>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
