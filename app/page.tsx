import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import KontakPage from "./kontak/page"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Footer />
    </main>
  )
}
