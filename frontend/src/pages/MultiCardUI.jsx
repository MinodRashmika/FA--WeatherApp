import React from "react";
import { Navbar, Footer, Card } from "../components/"

 

const MultiCardUI = () => {

    return (
        <div className="app m-0 p-0 bg-backdrop bg-repeat bg-w-full bg-center bg-fixed min-h-full" >
          <Navbar/>
          <div className="grid grid-cols-1 gap-0 justify-items-center mx-12 md:grid-cols-2">
            <div><Card location='Colombo'/></div>
            <div><Card location='Kuala Lampur'/></div>
            <div><Card location='New Delhi'/></div>
            <div><Card location='Singapore'/></div>
            <div><Card location='Philadelphia'/></div>

          </div>
          <Footer />
        </div>
          
    )

} 

export default MultiCardUI