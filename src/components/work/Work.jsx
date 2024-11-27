import React from "react";

const Work = () => {
  return (
    <div id="works" className="container m-auto mt-16">
      {/* Heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my works.
        </p>
      </div>
      {/* Work Cards */}
      <div className="card-wrapper mx-auto w-[90%] sm:w-fit mt-5">
        <div className="card-box grid grid-cols-2 gap-5 w-full md:grid-cols-2 sm:grid-cols-1">
          {/* One Malaysia */}
          <div
            className="work-card bg-white shadow-lg p-5 rounded-md"
            data-aos="fade-up"
          >
            <h4 className="text-xl font-bold text-gray-800">One Malaysia</h4>
            <p className="text-gray-600 mt-2">
              A web project promoting unity and diversity in Malaysia.
            </p>
            <a
              href="https://onemalaysia.world/" // Replace with your URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium mt-3 inline-block"
            >
              Visit Website
            </a>
          </div>

          {/* Boom Radio */}
          <div
            className="work-card bg-white shadow-lg p-5 rounded-md"
            data-aos="fade-up"
          >
            <h4 className="text-xl font-bold text-gray-800">Boom Radio</h4>
            <p className="text-gray-600 mt-2">
              A dynamic online radio station for entertainment and music.
            </p>
            <a
              href="https://boom-radio.vercel.app/" // Replace with your URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium mt-3 inline-block"
            >
              Visit Website
            </a>
          </div>

          {/* Travel with Nur */}
          <div
            className="work-card bg-white shadow-lg p-5 rounded-md"
            data-aos="fade-up"
          >
            <h4 className="text-xl font-bold text-gray-800">Travel with Nur</h4>
            <p className="text-gray-600 mt-2">
              A travel website designed to explore different destinations with useful guides and tips.
            </p>
            <a
              href="https://travel-with-nur.vercel.app/" // Link to your project
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium mt-3 inline-block"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
