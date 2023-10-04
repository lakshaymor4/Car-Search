import React, { useState, useEffect } from "react";
import data from "../data/cars.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "./cards";
import But from "./butto";
const Gss = () => {
    const navigate =  useNavigate()
  const { page } = useParams();
  const pint = parseInt(page, 10)
  const [Fd, sfd] = useState(data.cars);
  const ipp = 6; 

  
const chn = ()=>{
    if(pint!=1){
    navigate("/page/"+(pint-1))}
    
}
const chnn = ()=>{
    if(pint!=10){
    navigate("/page/"+(pint+1))}
    
}
  const hand = (e) => {
    const sTerm = e.target.value;
   

    const Fc = data.cars.filter((car) =>
      car.name.toLowerCase().includes(sTerm.toLowerCase())
    );

    sfd(Fc);
   
  };



  useEffect(() => {
    
  }, [Fd]);



  

 
  const ilt = pint * ipp;
  const iof = ilt - ipp;
  const cI = Fd.slice(iof, ilt);

  return (
    <>
    <div className="bg-slate-200 h-full min-h-screen">
      <div className="flex flex-row justify-center pt-4 ">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-[18rem] rounded-[2.5rem] mr-8 pt-1 pb-1 pl-2 pr-2"
          onChange={hand}
        />
        <h4 className="mr-8">Relevance</h4>
        <h4>All brands</h4>
      </div>
      <div className="flex flex-col items-center pt-10">
      <div className="grid grid-cols-3 gap-4">
        {cI.map((car) => (
          <Card
            key={car.name}
            name={car.name}
            people={car.people}
            fuel={car.fuel_type}
            mpg={car.mileage}
            type={car.gear_type}
            price={car.price}
            image_url={car.image_url}
          />
        ))}
      </div>
      </div>
      <div className="pagination flex flex-row justify-center pb-10 pt-4">
        <div><button className="mr-4 text-white pt-1 pb-1 pl-2 pr-2 rounded-[2.5rem] bg-slate-500"  onClick={chn}>Previous</button></div>
        <div><But no={0}   /></div>
        <div><But no={1}   /></div>
        <div><But no={2}   /></div>
        <div><But no={3}   /></div>
        <div><But no={4}   /></div>
        <div><But no={5}   /></div>
        <div><But no={6}   /></div>
        <div><But no={7}   /></div>
        <div><But no={8}   /></div>
        <div><But no={9}   /></div>
        <div><button onClick={chnn} className="mr-4 text-white pt-1 pb-1 pl-2 pr-2 rounded-[2.5rem] bg-slate-500">Next</button></div>
      </div>
</div>
    </>
  );
};

export default Gss;
