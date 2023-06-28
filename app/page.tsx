
import AboutSection from '@/components/AboutSection'
import ContactUs from '@/components/ContactUs'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ScrollToTopBtn from '@/components/ScrollToTopBtn'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Services />
      <Features />
      <ContactUs />
      <ScrollToTopBtn />
      <Testimonials />
    </main>
  )
}
