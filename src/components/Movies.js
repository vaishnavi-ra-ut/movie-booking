import React, { useState } from 'react'
import Categories from './Categories';
import { useEffect } from 'react';
import Shimmer from './Shimmer';
const Movies = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories();
    }, []);
    const location = "bhopal";
    const getCategories = async () => {
        const data = await fetch(`https://in.bookmyshow.com/api/seo/v1/footer?url=/${location}/movies/pad-gaye-pange/ET00408781`);
        const response = await data.json();
        console.log(response);
        setCategories(response?.footer?.links);
        console.log(categories);
    };
    return (categories.length === 0) ? (<Shimmer />) : (
        <div>
            {categories.map((category, index) => {
                return <Categories key={index} {...category} location={location}></Categories>
            })}
        </div>
    )
}

export default Movies
