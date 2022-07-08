import React from 'react'
import a1 from './image/img2.svg'
import Common from './Comman';


const Home = () => {
  return (
    <>
      <Common h1text={'Grow Your Business With'}
        imgsrc={a1}
        bname={'UBrain PVT.LTD'}
        tagline={'We have telented developers for making Websites '}
        visit={ '/service'}
        btnname={' Get Started'}
        />
    </>
  )
}

export default Home