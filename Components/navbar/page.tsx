export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-2 ">
        <div className="flex font-bold "><p>KOSHA.</p></div>
        <div className="flex items-center space-x-4">
            <ul className="flex space-x-4 text-xs">

                <li><a href="/">STORE</a></li>
                <li><a href="/store/cart">CART</a></li>

            </ul>

            <div className="flex">
                <button className="font-regular bg-black text-white py-1 px-4 text-xs cursor-pointer">Login</button>
            </div>
        </div>
        
        </div>
    )
}