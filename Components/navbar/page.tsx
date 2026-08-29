export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-2 ">
        <div className="flex font-bold "><p>KOSHA.</p></div>
        <div className="flex">
            <ul className="flex space-x-4 text-xs">

                <li><a href="store">STORE</a></li>
                <li><a href="/store/products">PRODUCT</a></li>
                <li><a href="/store/cart">CART</a></li>
            </ul>
        </div>
        
        </div>
    )
}