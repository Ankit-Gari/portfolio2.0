
import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Gap from './components/Gap'
import Page3 from './pages/Page3'
import Page41 from './pages/Page41'
import Page42 from './pages/Page42'
import Page51 from './pages/Page51'
import Page52 from './pages/Page52'
import Page6 from './pages/Page6'
import PageVFX from './pages/PageVFX'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'
import Page10 from './pages/Page10'
import Timeline2 from "./pages/Timeline2";
import { Timeline } from 'gsap/gsap-core'

const App = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
      
      <Page1/>
      <Page2/>
      <Page3/>
      <Page52/>
      <Page6/>
      <Page51/>
      <Page41/>
      <Timeline2/>
      <Page42/>
      <Page7/>
      <Page8/>
      <Page9/>
      <Page10/>
    </div>

    </>
  )
}

export default App