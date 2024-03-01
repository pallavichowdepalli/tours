import React from "react";
import Tours from "./component/tours";
import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import Aboutus from "./component/aboutus";
import Services from "./component/services";
import Footer from "./component/footer";



function App() {
  return (
  <div>
    <Navbar/>
    <Banner/>
    <Aboutus/>
    <Services/>
    <Tours/>
    <Footer/>

    
    
  </div>
  );
}

export default App;
