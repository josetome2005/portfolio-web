import './App.css'
import { AboutMe } from './sections/AboutMe/AboutMe'
import { Contact } from './sections/Contact/Contact'
import { Header } from './sections/Header/Header'
import { Hero } from './sections/Hero/Hero'
import { Projects } from './sections/Projects/Projects'
import { Stack } from './sections/Stack/Stack'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Stack />
      <Projects />
      <Contact />
    </>
  )
}

export default App
