import React from 'react';

const MovieShowtimes = () => {
  const cinemas = [
    {
      name: "PVR: Inorbit, Cyberabad",
      info: "Cancellation Available",
      timings: ["09:50 AM", "01:05 PM", "04:10 PM", "07:55 PM", "11:10 PM"],
    },
    {
      name: "AAA Cinemas: Ameerpet",
      info: "Non-cancellable",
      timings: ["01:35 PM", "07:45 PM"],
    },
    {
      name: "AMB Cinemas: Gachibowli",
      info: "Non-cancellable",
      timings: ["10:05 AM", "01:20 PM", "04:15 PM", "07:45 PM", "10:45 PM"],
    },
    {
      name: "Aparna Cinemas: Nallagandla",
      info: "Non-cancellable",
      timings: ["10:00 AM", "10:45 AM", "01:45 PM", "04:00 PM", "08:10 PM", "11:10 PM"],
    },
  ];

  return (
    <div className="p-6 bg-black">
      <h1 className="text-2xl text-gray-200 font-bold mb-4 -mt-6">Theaters Near You</h1>
      <div className="space-y-4">
        {cinemas.map((cinema, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg text-gray-300 font-semibold">{cinema.name}</h2>
              <span
                className={`text-sm ${cinema.info === 'Cancellation Available' ? 'text-green-600' : 'text-red-600'}`}
              >
                {cinema.info}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cinema.timings.map((time, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 border rounded hover:bg-gray-800 text-gray-200"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieShowtimes;
