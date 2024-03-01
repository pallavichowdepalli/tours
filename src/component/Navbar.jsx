import "../styles/Nav.css"
import {pageLinks, socialLinks} from './data'
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { SiSquarespace } from "react-icons/si"

function Navbar() {
    return(
        <>
        <section className="d-flex row">
            <div className="col text-end">
                <h1>Back<span className="text-primary">Roads</span></h1>
            </div>
            <div className="d-flex justify-content-center col">
             <ul className="  d-flex grid gap-3 list-unstyled ">
                {
                    pageLinks.map((item) =>{
                        return(
                            <li>{item.text}</li>
                            


                        )}

                    )
                }
              </ul> 
              </div>
              <div className="col d-flex justify-content-center">
             <ul className="d-flex grid gap-3 list-unstyled">
             <li><AiFillTwitterCircle /></li>
             <li><BsFacebook/></li>
              <li><SiSquarespace/></li>
             </ul>
            </div>
        </section>
        </>
    )
}

export default Navbar;