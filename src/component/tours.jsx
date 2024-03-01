import React from 'react'
import Title from './title';
import {tours} from './data';
function Tours() {
  return (
    <section>
        <Title title='FEATURED' subtitle='TOURS'/>
        <div className='d-flex'>
        {
        tours.map((item) =>{
            return(
                <div className='features' >
                    <div >
                    <img src={item.image} alt="" style={{width:'100%'}} />
                    <p>{item.info}</p>
                    </div>
                    <div>
                        <p>{item.location}</p>
                        <p>{item.cost}</p>
                        <p>{item.duration}</p>
                    </div>
                </div>
            )
        }

        )
    
        }
      </div>
    </section>
  )
}

export default Tours;