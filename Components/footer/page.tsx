import Link from "next/link";


export default function Footer() {
    return (
        <>
        <div className="flex mt-10 justify-between items-center border-t border-black py-4">
            <div className="flex flex-col leading-4">
                <h1>Kosha</h1>
              
            </div>
            <div className="flex">
                <ul className="flex flex-col space-x-4 text-xs">
                    <Link href="/">Store</Link>
                    <Link href="/store/discover">Products</Link>
                    <Link href="/store/cart">Cart</Link>

            </ul>
            </div>
        </div>
        <div className="flex m-auto">
           <p className=" text-xs"> © 2024 Kosha. All rights reserved.</p>
        </div>
        </>
    )
}