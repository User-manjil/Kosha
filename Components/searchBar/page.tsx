"use client";
import { useState } from "react";
import {useAppContext} from "@/context/AppContext"
export default function SearchBar() {
    // const [search , setSearch] = useState("")
    const {search , setSearch} = useAppContext();
    

    return (
        <>
        <div className="flex mt-1 flex-col">
            <div className="flex">
                 <input className="border border-black w-full px-3 py-2" placeholder="Search item here" onChange={(e)=>{setSearch(e.target.value)}} />
                 <button  className="bg-black text-white px-5 mx-1 cursor-pointer"  >Search</button>

            </div>
       

        <div className="flex">
            {search.length > 0 && <p>Showing Results for: <span className="font-bold"> {search}</span></p>}

        </div>


        </div>
        
        
        </>

    )
};