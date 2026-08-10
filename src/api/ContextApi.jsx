import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // Get cart from localStorage when app starts
    const [products, setProducts] = useState(() => {
        const savedItem = localStorage.getItem("items");

        return savedItem ? JSON.parse(savedItem) : [];
    });

    // Save cart to localStorage whenever products changes
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(products));
    }, [products]);

    // Add item to cart
    const getCartItem = (item) => {
        setProducts(prev => {
            const existingItem = prev.find(
                product => product.id === item.id
            );

            if (existingItem) {
                // Increase quantity if already in cart
                return prev.map(product =>
                    product.id === item.id
                        ? {
                            ...product,
                            quantity: product.quantity + 1
                        }
                        : product
                );
            }

            // Add new item
            return [
                ...prev,
                {
                    ...item,
                    quantity: 1
                }
            ];
        });
    };

    return (
        <CartContext.Provider
            value={{
                getCartItem,
                products,
                setProducts
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);