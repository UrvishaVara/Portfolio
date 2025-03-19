import React from 'react'

const BgLayout = ({ children }) => {
    return (
        <div className='bg-gray-700 min-w-96 bg-opacity-25 p-4 rounded-3xl shadow-md shadow-white/30'>{children}</div>
    )
}

export default BgLayout