import React, { useEffect, useState } from 'react';
import { getItemData } from '../api/ItemApiAxios';
import { useParams } from 'react-router-dom';
import { useCart } from '../api/ContextApi';

const Item = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams()
    const { getCartItem } = useCart()


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
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col sm:flex-row gap-6 border border-gray-200 rounded-2xl p-5 sm:p-6 mb-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >

                    {/* Image */}
                    <div className="w-full sm:w-1/3 h-64 sm:h-72 border border-gray-100 rounded-xl p-3 bg-gray-50 flex items-center justify-center overflow-hidden">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>

                    {/* Information */}
                    <div className="w-full flex flex-col justify-center">

                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            {product.title}
                        </h1>

                        <h3 className="text-sm text-gray-600 mb-2">
                            ⭐ Rating: {product.rating}
                        </h3>

                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                            Price: ${product.price}
                        </h2>

                        <p className="my-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                            {product.description}
                        </p>

                        <h3 className="text-sm text-gray-600 mt-2">
                            Shipping: {product.shippingInformation}
                        </h3>

                        <div className="mt-5 flex gap-4">
                            <button
                                className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-sm"
                                onClick={() => {
                                    getCartItem(product);
                                    alert("Item added to Cart")
                                }}
                            >
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