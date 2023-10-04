import React from "react";
const Card = (props)=>{
    const{name , people , fuel , mpg ,type,price ,image_url } = props

   
    return (
            <>
            <div className="bg-white pt-4 pl-4 pt-2 pb-2 rounded-[1rem] pr-2">
               <img src={image_url} className="w-[17rem] h-[17rem] rounded-[1rem]" />
               <h1 className="text-xl font-semibold pt-2">{name}</h1>
               <div className="grid grid-cols-2 gap-4">
                <h1 className="mr-2">{people} people</h1>
                <h1 className="mr-2">{fuel} </h1>
                <h1 className="mr-2">{mpg}  </h1>
                <h1>{type} </h1>
                
                </div>
                <div className="flex flex-row justify-around items-center pt-8">
                <div className="flex flex-row "> 
                <h1 className=" font-bold">{price}<span className="text-black font-normal">/month</span></h1>

                </div>
                <button className="text-white bg-blue-600 pt-2 pb-2 pl-4 pr-4 rounded-[1.5rem]">Rent now</button>
                </div>
            </div>
            </>

    )
}
export default Card