import stree from "../assets/stree.avif"
import MovieShowtimes from "./MovieShowTimes";
const Info = () => {
  return (
    <div>
    <div className="bg-black mt-10 flex justify-center items-start p-6 ">
      <div className="bg-black shadow-lg rounded-lg flex flex-col md:flex-row ">
        {/* Poster Section */}
        <div className="md:w-1/3 mr-10">
          <img
            src={stree} // Replace with your image URL
            alt="Movie Poster"
            className="rounded-l-lg "
          />
          <div className="text-center bg-black text-white py-2 mr-65=3 ">
            In cinemas
          </div>
        </div>

        {/* Details Section */}
        <div className="p-[0.3%] md:w-4/4 flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl text-gray-300 font-bold">Stree 2: Sarkate Ka Aatank</h2>
            <button className="text-gray-300 hover:text-red-500">Share ➥</button>
          </div>
          
          <div className="flex items-center mt-2">
            <div className="text-green-500 font-semibold text-lg flex items-center">
              <span>9/10</span>
              <span className="ml-2 text-gray-600">(250.8K Votes)</span>
            </div>
            <button className="ml-4 bg-gray-200 text-black py-1 px-2 rounded hover:bg-gray-300">
              Rate now
            </button>
          </div>
          
          <div className="flex space-x-2 mt-4">
            <span className="bg-gray-400 px-2 rounded">2D</span>
            <span className="bg-gray-400 px-2 rounded">Hindi</span>
          </div>
          
          <div className="text-gray-600 mt-2">2h 29m &bull; Comedy, Horror &bull; UA &bull; 15 Aug, 2024</div>
          
          <button className="bg-red-600 text-white py-2 px-6 rounded mt-6 hover:bg-red-700">
            Trailer ▷ 
          </button>
          
          <div className="mt-8">
            <h3 className="text-xl text-gray-500 font-bold">About the movie</h3>
            <p className="text-gray-600 mt-2">
              After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it’s up to Bicky and his friends to save their town and loved ones.
            </p>
          </div>
        </div>
      </div>
    </div>
    <MovieShowtimes/>
    </div>
  );
};

export default Info; 


