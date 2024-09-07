import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState("Hyderabad");

    useEffect(() => {
        fetchUserLocation();
    }, []);

    const fetchUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const city = await getCityFromCoordinates(lat, lon);
                    setLocation(city || "Hyderabad"); // Default to Hyderabad if location not found
                },
                () => {
                    setLocation("Hyderabad"); // Fallback if location access denied
                }
            );
        } else {
            setLocation("Hyderabad"); // Fallback if geolocation is not available
        }
    };

    const getCityFromCoordinates = async (lat, lon) => {
        const apiKey = 'YOUR_API_KEY_HERE';
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`
        );
        const data = await response.json();
        if (data.status === 'OK') {
            const result = data.results.find(res => res.types.includes("locality"));
            return result ? result.address_components[0].long_name : null;
        }
        return null;
    };

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>
    );
};
