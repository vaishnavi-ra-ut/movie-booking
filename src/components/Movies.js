import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import Redux hook
import Categories from "./Categories";
import Shimmer from "./Shimmer";

const Movies = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(""); // Add error state
    // Get current location from Redux
    const location = useSelector((state) => state.location.currentLocation);

    useEffect(() => {
        getCategories();
    }, [location]); // Fetch movies whenever location changes

    const getCategories = async () => {
        setLoading(true); // Set loading to true when starting to fetch data
        setError(""); // Clear any previous errors
        try {
            const data = await fetch(
                `https://in.bookmyshow.com/api/seo/v1/footer?url=/${location.toLowerCase()}/movies/pad-gaye-pange/ET00408781`
            );
            const response = await data.json();

            if (response?.footer?.links) {
                const filteredCategories = response.footer.links.filter(
                    (category) =>
                        category.heading.includes("Upcoming Movies") ||
                        category.heading.includes("Now Showing")
                );

                setCategories(filteredCategories);

                if (filteredCategories.length === 0) {
                    setError("No movies data available for this location.");
                }
            } else {
                setError("Invalid API response.");
            }

        } catch (error) {
            setError("Error fetching categories: " + error.message);
        }

        setLoading(false); // Set loading to false once fetching is done
    };

    if (loading) {
        return <Shimmer />; // Show shimmer while loading
    }

    if (error) {
        return <div className="text-white font-bold p-56 text-3xl absolute top-[20%] left-[23%]">{error}</div>; // Show error message if there's any error
    }

    return (
        <div>
            {categories.map((category, index) => (
                <Categories key={index} {...category} location={location} />
            ))}
        </div>
    );
};

export default Movies;
