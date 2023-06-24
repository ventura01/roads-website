
import AboutSection from '@/components/AboutSection'
import ContactUs from '@/components/ContactUs'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Services />
      <Features />
      <ContactUs />
    </main>
  )
}
