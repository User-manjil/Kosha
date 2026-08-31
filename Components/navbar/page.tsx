import Link from "next/link"

// const {}
export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-2 ">
        <div className="flex font-bold "><h1>kosha.</h1></div>
        <div className="flex items-center space-x-4">
            <ul className="flex space-x-4 text-xs">

              <Link href="/">Store</Link>
              <Link href="/store/discover">Products</Link>
              <Link href="/store/cart">Cart</Link>

            </ul>

            <div className="flex">
                <button  className="font-regular bg-black  text-white py-1 px-4 text-xs cursor-pointer"><a href="/login">Sign in</a></button>
            </div>
        </div>
        
        </div>
    )
}