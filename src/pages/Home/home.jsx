import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 h-full">
      <div className="w-full flex-1">
        <img
          src={selectedImage}
          className="w-full h-64 md:h-full rounded-lg border-3 border-blue-400"
        />
      </div>

      <div className="flex md:flex-col flex-row md:w-64 gap-4 ">
        {images.map((imgsrc, index) => (
          <img
            key={index}
            src={imgsrc}
            className="h-24 w-24 md:h-32 md:w-full rounded-lg cursor-pointer hover:opacity-80 flex-shrink-0"
            onClick={() => setSelectedImage(imgsrc)}
          />
        ))}

        <Link to="/detail" >
          <button
            className="h-24 w-24 md:h-32 md:w-full rounded-lg bg-[url(/img4.jpg)] bg-cover flex items-center justify-center cursor-pointer hover:opacity-80"
          >
            <span className="text-xs md:text-base text-white">View More Photos</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
