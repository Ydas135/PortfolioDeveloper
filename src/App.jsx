import { Navbar } from "./components/layouts/Navbar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Projects } from "./components/sections/Projects"

export const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar/>
      <main>
        <Hero/>
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}

