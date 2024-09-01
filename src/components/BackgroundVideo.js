import React, { useEffect } from 'react'

const BackgroundVideo = () => {
    useEffect(() => {
        getCategories();
    }, []);
    const location = "hyderabad";
    const getCategories = async () => {
        const data = await fetch(`https://in.bookmyshow.com/api/seo/v1/footer?url=/${location}/movies/pad-gaye-pange/ET00408781`);
        const response = await data.json();
        console.log(response);
    }
    return (
        <div>BackgroundVideo</div>
    )
}

export default BackgroundVideo