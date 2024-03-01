import React from 'react'
import { services } from './data'

function Services() {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Our <span style={{color:'blue'}}>Services</span></h1>
        <div className='d-flex'>
      {
        services.map((item) =>{
            return(
                <div className='d-flex'>
                <section className='d-flex grid gap-4'>
                    <div>
                    {/* <p>{item.id}</p> */}
                    <p className='fs-2 '>{item.icon}</p>
                    </div>
                    <div>
                    <p>{item.title}</p>
                    <p>{item.text}</p>
                    </div>
                </section>
                </div>
            )
        }
        
        )
      }
      </div>
    </div>
    
  )
}

export default Services