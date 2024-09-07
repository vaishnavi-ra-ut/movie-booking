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
// import React, { useState, useEffect } from 'react';
// import Categories from './Categories';
// import Shimmer from './Shimmer';

// const Movies = ({ selectedLocation }) => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         getCategories();
//     }, [selectedLocation]); // Re-fetch data when selectedLocation changes

//     const getCategories = async () => {
//         try {
//             const data = await fetch(`https://in.bookmyshow.com/api/seo/v1/footer?url=/${selectedLocation.toLowerCase()}/movies/pad-gaye-pange/ET00408781`);
//             const response = await data.json();
//             const filteredCategories = response?.footer?.links.filter(category =>
//                 category.heading === `Upcoming Movies in ${selectedLocation}` ||
//                 category.heading === `Movies Now Showing in ${selectedLocation}`
//             );
//             setCategories(filteredCategories);
//         } catch (error) {
//             console.error("Failed to fetch movie categories", error);
//         }
//     };

//     return categories.length === 0 ? (<Shimmer />) : (
//         <div>
//             {categories.map((category, index) => (
//                 <Categories key={index} {...category} location={selectedLocation} />
//             ))}
//         </div>
//     );
// }

// export default Movies;
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import Redux hook
import Categories from "./Categories";
import Shimmer from "./Shimmer";

const Movies = () => {
    const [categories, setCategories] = useState([]);

    // Get current location from Redux
    const location = useSelector((state) => state.location.currentLocation);

    useEffect(() => {
        getCategories();
    }, [location]); // Fetch movies whenever location changes

    const getCategories = async () => {
        try {
            const data = await fetch(
                `https://in.bookmyshow.com/api/seo/v1/footer?url=/${location.toLowerCase()}/movies/pad-gaye-pange/ET00408781`
            );
            const response = await data.json();
            const filteredCategories = response?.footer?.links.filter(
                (category) =>
                    category.heading === `Upcoming Movies in ${location}` ||
                    category.heading === `Movies Now Showing in ${location}`
            );
            setCategories(filteredCategories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    return categories.length === 0 ? (
        <Shimmer />
    ) : (
        <div>
            {categories.map((category, index) => (
                <Categories key={index} {...category} location={location} />
            ))}
        </div>
    );
};

export default Movies;
