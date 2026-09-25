import { Routes, Route, Navigate } from 'react-router'
import { Toaster } from 'sonner'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tjanster from './pages/Tjanster'
import OmOss from './pages/OmOss'
import Kontakt from './pages/Kontakt'

export default function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
