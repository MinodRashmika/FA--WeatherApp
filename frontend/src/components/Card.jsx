import React from "react";

const Card = (props) => {
    return(
        <div>
            <div className="p-10">
            <div class="max-w-lg max-h-lg rounded overflow-hidden shadow-lg bg-gray-800 ">
                <div className="max-h-[200px] bg-white">
                    <h1 className="text-black text-3xl flex justify-center">hello</h1>
                    <h1 className="text-black text-3xl flex justify-center">hello</h1>
                    <h1 className="text-black text-3xl flex justify-center">hello</h1>
                </div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.location}</div>
                <p class="text-black text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>
        </div>      
    )
}

export default Card;