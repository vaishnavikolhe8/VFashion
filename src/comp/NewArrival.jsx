import React from 'react'
import Title from './Title'
import ProductCard from './ProductCard'

const NewArrival = () => {
  return (
    <div className='container mx-auto px-6 py-16'>
      <Title title="New Arrival" subtitle="Top Choices For You"></Title>

      <ProductCard></ProductCard>
    </div>
  )
}

export default NewArrival
