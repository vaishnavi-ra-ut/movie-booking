import React, { useEffect, useState } from 'react'
import { FETCH_URL } from '../utils/constants';
const MovieCards = ({ label, link, location }) => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        getMovies();
    }, [])
    const getMovies = async () => {
        try {
            console.log(link);
            const data = await fetch(`https://in.bookmyshow.com/api/seo/v1/footer?url=/bhopal${link}`);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }

            // Ensure the response is not empty before trying to parse it
            const textResponse = await data.text();
            if (!textResponse) {
                throw new Error('Empty response from server');
            }

            // Attempt to parse JSON
            const response = JSON.parse(textResponse);
            console.log(response);
            setMovies(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        // <div className='text-white'>
        <div className="bg-[#171921] rounded-lg shadow-lg overflow-hidden w-[13.80rem] mx-[0.78rem] my-3 
                h-[31rem]">
            {<img src={movies?.ldSchema?.movieJsonLd?.image} alt={label} className="w-full object-cover " />}
            <div className="p-4">
                <div className="font-bold text-lg text-white">{label}</div>
                <div className="text-gray-400 ">{movies?.ldSchema?.movieJsonLd?.genre.join(" , ")}</div>
                <div className="flex items-center text-sm mt-2">
                    {/* <span className="text-green-500">⭐ {movie.rating}/10</span> */}
                    <span className="ml-2 text-gray-600">{ }</span>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default MovieCards