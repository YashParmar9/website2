import React from 'react'
import { NavLink } from 'react-router-dom'
// import a1 from './image/a1.webp'
// import a1 from './image/img2.svg'


const Comman = (props) => {
  return (
    <>
      <section className="d-flex align-items-center" id="header" >
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">

                <div className="  col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex flex-column justify-content-center " >
                  <h1>{props.h1text} <strong className=" navbar-brand "><br />{props.bname}</strong></h1>
                  <h2 className="my-3"> { props.tagline} </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary btnstart" >{ props.btnname}</NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2  header-img " style={{ position: 'relative' }}>
                  <img className="img-fluid animated divani  " src={props.imgsrc} alt="..." />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Comman