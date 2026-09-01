export default function ProductsCard({ product }: { product: any }) {
    return (
        <div className="flex flex-col  border border-black  p-2 m-2 w-54">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-md font-semibold ">{product.name}</h2>
            <p className="text-gray-600 mb-1">${product.price}</p>
            <p className="text-black mb-1 text-xs ">{product.description}</p>
            <button className="bg-black/80 text-white text-xs px-4 py-1 rounded hover:bg-black">Add to Cart</button>
        </div>
    );
}