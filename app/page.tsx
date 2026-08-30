import ProductsCard from "@/Components/ui/productCard";
import Image from "next/image";


export default function Home(){

  return (
    <>
    <div className="flex items-center mx-auto border-black w-full h-fit">
      <Image src="/banner2.png" loading="eager" alt="hero"  width={1000} height={500} className="rounded-lg mx-auto w-fit h-full"/>    
    </div>
    <section className="flex flex-col  justify-start w-full h-fit mt-4">
    <div className="flex flex-col ">
      <h1 className="font-bold">Featured Gifts</h1>
     
     <div className="flex">
      <ProductsCard product={{ name: "Dashain Combo", price: 19.99,description:"combo gifts ",  image: "/banner2.png" }} />
      <ProductsCard product={{ name: "Product 2", price: 29.99, image: "/product2.jpg" }} />
      <ProductsCard product={{ name: "Product 3", price: 39.99, image: "/product3.jpg" }} />
     </div>
      
    </div>

    </section>
    
    
    </>
  )
}