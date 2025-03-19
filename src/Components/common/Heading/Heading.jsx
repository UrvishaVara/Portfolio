import React from 'react'

const Heading = ({ text, classNames }) => {
    return (
        <h2 className={`font-normal text-5xl text-white my-5 ${classNames}`}>
            {text}
        </h2>
    )
}

export default Heading