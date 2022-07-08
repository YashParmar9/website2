import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [data, setdata] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  })
  const formsub = (e) => {
    e.preventDefault();
    alert(` Name : ${data.fullname} Phone : ${data.phone}  Email : ${data.email}  Message : ${data.msg}`);
    setdata({
      fullname: '',
      phone: '',
      email: '',
      msg: '',
    })
  }
  const inputVal = (event) => {
    const { name, value } = event.target;
    setdata((preval) => {
      return {
        ...preval,
        [name]: value,

      }
    })
  }
  return (
    <>
    
         <div className="my-5">
          <h1 className="text-center"> Contect </h1>
        </div>
        <div className="container  contact_div">
          <div className="row ">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formsub}>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputVal}
                    placeholder="Enter Your Name" />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Phone</label>
                  <input type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={inputVal}
                    placeholder="Mobile Number" />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={inputVal}
                    placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control"
                    id="exampleFormControlTextarea1"
                    name="msg"
                    value={data.msg}
                    onChange={inputVal}
                    rows="3" />
                </div>

                <div class="col-12">
                  <button class="btn btn-outline-secondary" type="submit">Submit form</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Contact