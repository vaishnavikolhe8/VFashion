import React from 'react'
import Title from './Title'
import { categories } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='container mx-auto px-6 py-16' id='CategoryCircle'>
            <Title title="Category" subtitle="Browse By Category"></Title>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" >
                {categories.map((item, index) => (
                    <Link
                        key={index} to={`/category/${item.slug}`}
                    >
                        <div
                            className="group w-40 h-40 perspective-[1000px] cursor-pointer"
                        >
                            <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:rotate-y-180">

                                {/* Front */}
                                <div className="absolute inset-0 backface-hidden rounded-full bg-amber-400 flex items-center justify-center">
                                    {item.name}
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-full bg-white flex items-center justify-center">
                                    <img src={item.image} alt={item.name} className="w-20 h-20" />
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    )
}

export default Category
