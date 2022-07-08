import React from 'react'

import Common from './Comman';
import a1 from './image/a1.webp'

const About = () => {
  return (
    <>

      <Common h1text={'About Us Page'}
        bname={'UBrain PVT.LTD.'}
        imgsrc={a1}
        tagline={'To provide websites which are stable and customizable by clients so that clients do not have to pay monthly charges on website maintenance. Contact no: 9998221281'}
        visit={'/'}
        btnname={'Next...'}
      />

    </>
  )
}

export default About