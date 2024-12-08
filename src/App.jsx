import React from "react";
import { assets, links, user } from "./assets/assets";

const App = () => {
  return (
    <div className="flex items-center justify-center my-2">
      <div className="flex flex-col items-center justify-center w-80 max-w-sm p-4 bg-grey800  rounded-lg shadow sm:p-6">
        <img
          className="w-16 rounded-full"
          src={assets.avatar_jessica}
          alt="avatar"
        />
        <h5 className="mt-4 text-base font-semibold text-white md:text-xl">
          {user.name}
        </h5>
        <p className="text-xs py-1 font-normal text-green">{user.location}</p>
        <p className="text-sm py-3 font-normal text-gray-300">{user.title}</p>

        <ul class="my-4 space-y-3 w-full text-center">
         {
          links.map((item,index)=>(
            <li key={index}>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-white rounded-lg bg-grey700 hover:bg-green hover:text-gray-700 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">{item}</span>
              
            </a>
          </li>
          ))
         }
      
          
          
        </ul>
      </div>
    </div>
  );
};

export default App;
