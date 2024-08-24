import stree from "../assets/stree.avif"
import veda from "../assets/veda.avif"
import kkm from "../assets/kkm.avif"
import alien from "../assets/alien.avif"
import harlod from "../assets/harlod.avif"

const posterImage = '/path/to/uploaded/image.png';

const movies = [
    {
        title: "Khel Khel Mein",
        genre: "Comedy/Drama",
        rating: 8.2,
        votes: "35K Votes",
        imageUrl: kkm
    },
    {
        title: "Stree 2: Sarkate Ka Aatank",
        genre: "Comedy/Horror",
        rating: 9,
        votes: "190.1K Votes",
        imageUrl: stree
    },
    {
        title: "Alien: Romulus",
        genre: "Horror/Sci-Fi/Thriller",
        rating: 8.3,
        votes: "1.3K Votes",
        imageUrl: alien
    },
    {
        title: "Vedaa",
        genre: "Action/Drama",
        rating: 8.1,
        votes: "33.8K Votes",
        imageUrl: veda
    },
    {
        title: "Harold and the Purple Crayon",
        genre: "Action/Adventure/Fantasy",
        rating: 7.3,
        votes: "628 Votes",
        imageUrl: harlod
    },
    {
        title: "Khel Khel Mein",
        genre: "Comedy/Drama",
        rating: 8.2,
        votes: "35K Votes",
        imageUrl: kkm
    },
    {
        title: "Stree 2: Sarkate Ka Aatank",
        genre: "Comedy/Horror",
        rating: 9,
        votes: "190.1K Votes",
        imageUrl: stree
    },
    {
        title: "Alien: Romulus",
        genre: "Horror/Sci-Fi/Thriller",
        rating: 8.3,
        votes: "1.3K Votes",
        imageUrl: alien
    },
    {
        title: "Vedaa",
        genre: "Action/Drama",
        rating: 8.1,
        votes: "33.8K Votes",
        imageUrl: veda
    },
    {
        title: "Harold and the Purple Crayon",
        genre: "Action/Adventure/Fantasy",
        rating: 7.3,
        votes: "628 Votes",
        imageUrl: harlod
    },
];

const MovieCard = ({ movie }) => {
    return (
        <div className="bg-[#171921] rounded-lg shadow-lg overflow-hidden w-[18.1%] m-[0.9%] h-auto">
            <img src={movie.imageUrl} alt={movie.title} className="w-full object-cover "/>
            <div className="p-4">
                <div className="font-bold text-lg text-white">{movie.title}</div>
                <div className="text-gray-400">{movie.genre}</div>
                <div className="flex items-center text-sm mt-2">
                    <span className="text-green-500">⭐ {movie.rating}/10</span>
                    <span className="ml-2 text-gray-600">{movie.votes}</span>
                </div>
            </div>
        </div>
    );
};

const MovieList = () => {
    return (
        <div className="flex flex-wrap overflow-hidden w-[100vw] p-[1%]">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;