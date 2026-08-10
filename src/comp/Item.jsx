import React, { useEffect, useState } from 'react';
import { getItemData } from '../api/ItemApiAxios';
import { useParams } from 'react-router-dom';
import { useCart } from '../api/ContextApi';

const Item = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams()
    const {getCartItem} = useCart()
    

    const getDataInfo = async (category) => {
        try {
            const res = await getItemData(category)
            setProducts(res.data.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDataInfo(category)
    }, [category])

        // Increase Quantity
    const increase = (id) => {
        setQuantity((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1,
        }));
    };

    // Decrease Quantity
    const decrease = (id) => {
        setQuantity((prev) => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) - 1),
        }));
    };

    return (
        <div className='flex flex-col border-2 w-full h-3/4 p-3 gap-2 m-auto'>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4"
                >
                    {/* Image */}
                    <div className="w-full sm:w-1/3 border p-2">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-full object-fit"
                        />
                    </div>

                    {/* Information */}
                    <div className="w-full">
                        <h1 className="text-xl font-bold">{product.title}</h1>
                        <h3>⭐ Rating: {product.rating}</h3>
                        <h2 className="font-semibold">Price: ${product.price}</h2>
                        <p className="my-2">{product.description}</p>
                        <h3>Shipping: {product.shippingInformation}</h3>

                        <div className="mt-4 flex gap-4">
                            <button className="px-4 py-2 bg-black text-white rounded" onClick={()=>{ getCartItem(product);
                                alert("Item added to Cart")}
                                }>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Item;
