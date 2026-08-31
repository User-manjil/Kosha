import SearchBar from "@/Components/searchBar/page";
import ProductsCard from "@/Components/ui/productCard";


export default function discover(){

    return(
        <>
        
        <div className="flex flex-col">
         <h1 className="font-bold text-2xl text-center"> Welcome to the kosha gifts</h1>   
         <SearchBar/>
         <div className="flex mt-3">
              <ProductsCard product={{ name: "Dashain Combo", price: 19.99,description:"combo gifts ",  image: "/banner2.png" }} />
              <ProductsCard product={{ name: "Dashain Combo", price: 19.99,description:"combo gifts ",  image: "/banner2.png" }} />
              <ProductsCard product={{ name: "Dashain Combo", price: 19.99,description:"combo gifts ",  image: "/banner2.png" }} />
             
             </div>
        </div>
        </>
    )
}