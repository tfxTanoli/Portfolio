import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
