import { Navbar } from "./components/layouts/Navbar"
import { Hero } from "./components/sections/Hero"

export const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar/>
      <main>
        <Hero/>
      </main>
    </div>
  )
}

