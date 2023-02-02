import React from "react";

const Card = (props) => {
    return(
        <div>
            <div className="p-10">
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-500 ">
              <div className="flex justify-center">
                <img class="w-8/12 rounded mt-5" src="https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg" alt="Sunset in the mountains"/>  
              </div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
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