import React, { useEffect, useState } from 'react'
import { FETCH_URL } from '../utils/constants';
const MovieCards = ({ label, link, location }) => {
    const [movies, setMovies] = useState();
    console.log(link);
    useEffect(() => {
        getMovies();
    }, [])
    const getMovies = async () => {
        try {
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
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <div className='text-white'></div>
    )
}

export default MovieCards