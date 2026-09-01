import CommentBox from "@/Components/ui/commentBox";
import ProductsCard from "@/Components/ui/productCard";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Products() {

    return (
        <>
        <div className="flex flex-col">
        <div className="flex mb-10">
            <div className="flex   p-2 border">
            <Image src="/dashain combo.png" width={500} height={500} alt="product description page" />
            </div>

            {/* // product description page */}
            <div className="flex flex-col px-4">
                <h1 className="text-2xl">Raskshya Bandan Combo</h1>
                <h3 className="text-2xl font-bold">Rs.1800</h3>
                <p>Raskshya Bandan Combo is a special gift set for the festival of Raksha Bandhan. 
                    It includes a beautiful rakhi, a box of sweets, and a personalized greeting card. 
                    This combo is perfect for expressing your love and affection towards your sibling on 
                    this special occasion.</p>
                    <div className="flex mt-5  ">
                      
                     <Star fill="black" width={20} />   
                     <Star fill="black" width={20} />   
                     <Star fill="black" width={20} />   
                     <Star fill="black" width={20} />  
                     <Star width={20} />  

                     <div className="flex mx-5">
                        <h3 className="text-md font-medium">4.0</h3>
                        <h3 className="text-md font-medium">(20 reviews)</h3>
                     </div>
                    </div>
                <div className="flex  ">
                <button className="bg-black text-white p-2 mt-2 ">Add to Cart</button>
                </div>
            </div>
        </div>

        <div className="flex flex-col">
         <h1>Similar products</h1>
         <div className="flex">
             <ProductsCard product={{ name: "Dashain Combo", price: 19.99,description:"combo gifts ",  image: "/banner2.png" }} />
             <ProductsCard product={{ name: "Dashain Combo", price: 19.99,description:"combo gifts ",  image: "/banner2.png" }} />
             <ProductsCard product={{ name: "Dashain Combo", price: 19.99,description:"combo gifts ",  image: "/banner2.png" }} />
         </div>
        </div>

        <div className="flex flex-col mt-10">
            <h1>Comments</h1>
            <div className="flex flex-col border-t">
                <CommentBox comments={{id:'1',name:"Jethalal Gada",comment:"Product is awesome", rating:'4.5' }}  />
                <CommentBox comments={{id:'2',name:"Jethalal Gada",comment:"Product is awesome", rating:'4.5' }}  />
                <CommentBox comments={{id:'3',name:"Jethalal Gada",comment:"Product is awesome", rating:'4.5' }}  />

            </div>
        </div>

        </div>
        
        
        </>
    )
}