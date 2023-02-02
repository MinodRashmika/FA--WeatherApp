import React from "react";
import { Navbar, Footer, Card } from "../components/";

 

const MultiCardUI = () => {

    return (
        <div className="app m-0 p-0">
          <Navbar/>
          <div className="grid grid-cols-3 gap-2">
            <div><Card name='Name 1' desc='this is first desc Lorem'/></div>
            <div><Card/></div>
            <div><Card/></div>
            <div><Card/></div>
            <div><Card/></div>
            <div><Card/></div>

          </div>
          <Footer />
        </div>
          
    )

} 

export default MultiCardUI