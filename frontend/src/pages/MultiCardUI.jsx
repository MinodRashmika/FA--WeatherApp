import React, { useState } from "react";
import {Footer, Card } from "../components/"
import newList from '../assets/data'



const MultiCardUI = () => {

    const [searchTerm, setSearchTerm] = useState("");


    return (
      
        <div className="app m-0 p-0 bg-backdrop bg-w-full bg-top bg-blend-darken bg-cover bg-fixed min-h-[100vh]" >

                <div>
                    <h1 className="text-3xl flex justify-center pt-5">Weather App</h1>
                </div>
            <form>
                <label for="default-search" class="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
                <div class="relative flex justify-between">
                    <div className="w-6/12 flex items-center mx-auto mt-5">
                        <div class="relative inset-y-0 left-8 flex items-center pl-3 pointer-events-none ">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="flex mr-5 w-full p-4 pl-10 order-1 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Cities..." 
                        onChange={(e) => {
                          setSearchTerm(e.target.value)
                        }} 
                        required/>
                    </div>
                </div>
            </form>
          <div className="grid grid-cols-1 gap-0 justify-items-center mx-12 md:grid-cols-2 lg:grid-cols-3 min-h-[80vh]">
          {
            newList.filter((data) => {
              if(searchTerm === ""){
                return data;
              } else if (data.CityName.toString().toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return data;
              }
            }).map(item => {
              return(
              <div>
                <Card location = {item.CityCode}/>
              </div>)
            })
          }

          </div>  

          <Footer />
        </div>
          
    )

} 

export default MultiCardUI