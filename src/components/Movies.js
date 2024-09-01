// import React, { useState, useEffect } from 'react';
// import Categories from './Categories';
// import Shimmer from './Shimmer';

// const Movies = () => {
//     const [categories, setCategories] = useState([]);
//     const location = "Hyderabad";

//     useEffect(() => {
//         getCategories();
//     }, []);

//     const getCategories = async () => {
//         const data = await fetch(`https://in.bookmyshow.com/api/seo/v1/footer?url=/${location.toLowerCase()}/movies/pad-gaye-pange/ET00408781`);
//         const response = await data.json();
//         const filteredCategories = response?.footer?.links.filter(category =>
//             category.heading === `Upcoming Movies in ${location}` ||
//             category.heading === `Movies Now Showing in ${location}`
//         );
//         setCategories(filteredCategories);
//     };

//     return categories.length === 0 ? (<Shimmer />) : (
//         <div>
//             {categories.map((category, index) => (
//                 <Categories key={index} {...category} location={location} />
//             ))}
//         </div>
//     );
// }

// export default Movies;
import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Shimmer from './Shimmer';
import Location from './Location';

const Movies = () => {
    const [categories, setCategories] = useState([]);
    const [location, setLocation] = useState("Hyderabad");

    useEffect(() => {
        fetchUserLocation();
    }, []);

    useEffect(() => {
        getCategories();
    }, [location]);

    const fetchUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const city = await getCityFromCoordinates(lat, lon);
                    setLocation(city || "Hyderabad");
                },
                () => {
                    setLocation("Hyderabad");
                }
            );
        }
    };

    const getCityFromCoordinates = async (lat, lon) => {
        const apiKey = 'AIzaSyDpFOlZfcgb2BbpsH_5vze4NqlPnpoL4SQ';
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`);
        const data = await response.json();

        if (data.status === 'OK') {
            const result = data.results.find(res => res.types.includes("locality"));
            return result ? result.address_components[0].long_name : null;
        }
        return null;
    };

    const getCategories = async () => {
        const data = await fetch(`https://in.bookmyshow.com/api/seo/v1/footer?url=/${location.toLowerCase()}/movies/pad-gaye-pange/ET00408781`);
        const response = await data.json();
        const filteredCategories = response?.footer?.links.filter(category =>
            category.heading === `Upcoming Movies in ${location}` ||
            category.heading === `Movies Now Showing in ${location}`
        );
        setCategories(filteredCategories);
    };

    return (
        <div>
            <Location setLocation={setLocation} />
            {categories.length === 0 ? (
                <Shimmer />
            ) : (
                <div>
                    {categories.map((category, index) => (
                        <Categories key={index} {...category} location={location} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Movies;
