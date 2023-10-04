import React from "react";
import { Link } from "react-router-dom";
const But = ({no})=>{
    return(
        <Link to={`/page/${no + 1}`} >
            <button
              
             
             className="mr-4 text-white pt-1 pb-1 pl-2 pr-2 rounded-[2.5rem] bg-slate-500"
            >
              {no + 1}
            </button>
          </Link>
    )
}
export default But