import React from 'react'

const ProductCard = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-6" id='TrendingSection'>
            <a href="#" className='group w-56'>
                <img className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top' src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop" alt="image" />
                <p className='text-sm mt-2'>White crew-Neck T-Shirt</p>
                <p className='text-xl'>$ 29.00</p>
            </a>
            <a href="#" className='group w-56'>
                <img className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop" alt="image" />
                <p className='text-sm mt-2'>White crew-Neck T-Shirt</p>
                <p className='text-xl'>$ 39.00</p>
            </a>
            <a href="#" className='group w-56'>
                <img className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=735&auto=format&fit=crop" alt="image" />
                <p className='text-sm mt-2'>White crew-Neck T-Shirt</p>
                <p className='text-xl'>$ 29.00</p>
            </a>
            <a href="#" className='group w-56'>
                <img className='rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right' src="https://images.unsplash.com/photo-1667243038099-b257ab263bfd?q=80&w=687&auto=format&fit=crop" alt="image" />
                <p className='text-sm mt-2'>White crew-Neck T-Shirt</p>
                <p className='text-xl'>$ 49.00</p>
            </a>
        </section>
    )
}

export default ProductCard
