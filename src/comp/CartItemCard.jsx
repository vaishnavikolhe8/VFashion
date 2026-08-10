import React, { useContext } from 'react'

const CartItemCard = () => {
    const {myname} =useContext()
  return (

        <div className='flex flex-col border-2 w-full h-3/4 p-3 gap-2 m-auto'>
            <h1>{myname}</h1>
                <div
                    className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4"
                >
                    {/* Image */}
                    <div className="w-full sm:w-1/3 border p-2">
                        <img
                            src=""
                            alt=""
                            className="w-full h-full object-fit"
                        />
                    </div>

                    {/* Information */}
                    <div className="w-full">
                        <h1 className="text-xl font-bold">product.title</h1>
                        <h2 className="font-semibold">Price: </h2>
                        <h2 className="font-semibold">Qantity: </h2>
                        <h3>Shipping: product.shippingInformation</h3>

                        <div className="mt-4 flex gap-4">
                            <div className="flex items-center border rounded-lg w-fit">
                                <button className="px-4 py-2"  >-</button>
                                <span className="px-6 py-2 border-x">0</span>
                                <button className="px-4 py-2" >+</button>
                            </div>
                            <button className="px-4 py-2 bg-black text-white rounded">
                               remove
                            </button>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default CartItemCard
