import React from 'react'
import Aboutus from '../images/image-about.jpg'
  
 const About =() => {
  return (
    <section>
      <h1 style={{textAlign:'center'}}>About <span style={{color:'blue'}}>Us</span></h1>
    <div className='d-flex mt-5'>
  <div className='col-6 '>
      <img src={Aboutus} alt="" style={{width:'400px',marginLeft:'200px'}}/>
      </div>
  
      <div className='col-6'>
      <h2>Explore the Difference</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia</p>
      <button>read more</button>
      </div>
    </div>
    </section>
  )
}

export default About