import React from 'react'
// import a1 from './image/img1.svg';
import {NavLink} from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="col-md-4  col-10  mx-auto">
                <div className="card " style={{  width:503 }} >
                {/* <div className="card " style={{maxWidth:287}}> */}
                    <img  src={props.imgsrc} id="cardi" className="card-img-top" alt="..." style={{ height:350 , width:500 }}/>
                    <div className="card-body">
                        <h5 className="card-title">{ props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/about" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
// 