import React from 'react'
import MovieCards from './MovieCards'

const Categories = ({ heading, items, location }) => {
    console.log(heading)
    return (
        <div>
            <h1 className='text-white'>{heading}</h1>
            {items.map((item) => {
                return <MovieCards key={item.label} {...item} location={location}></MovieCards>
            })}
        </div>
    )
}

export default Categories