import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const App = () => {

  useGSAP(() => {
    gsap.to('.box', {
      duration: 2,
      rotate: 360,
      delay: 1,
      repeat: true,
      ease: "bounce.inOut"
    })
    gsap.to('.circle', {
      duration: 2,
      rotate: 360,
      y: 102,
      delay: 1,
      repeat: true,
      ease: "bounce.inOut"
    })

  })

  return (
    <>

      <main>
        <div className="container">
          <div className="circle"></div>
          <div className="box"></div>
        </div>

        <div className="container">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
      </main>
    </>
  )
}

export default App