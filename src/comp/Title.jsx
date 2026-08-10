import React from 'react'

const Title = ({title,subtitle}) => {
    return (
        <div className='mb-12'>
            {/* title */}
            <div className='flex flex-row items-center gap-4 mb-3'>
                <div className='bg-black w-5 h-12 rounded-sm'></div>
                <div className='font-bold text-3xl '>{title}</div>
            </div>

            {/* subtitle */}
            <div className='font-bold text-2xl'>{subtitle}</div>

        </div>
    )
}

export default Title
