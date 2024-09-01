import React from 'react'
import MovieCards from './MovieCards'

const Categories = ({ heading, items, location }) => {
    console.log(heading)
    return (
        <div>
            <h1 className="text-gray-300 ml-8 mb-1 mt-5 font-semibold text-3xl font-serif">{heading}</h1>
            <div className='w-[100%] flex flex-wrap'>
                {items.map((item) => {
                    return <MovieCards key={item.label} {...item} location={location}></MovieCards>
                })}
            </div>
        </div>
    )
}

export default Categories