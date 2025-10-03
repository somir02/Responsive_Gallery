import React, { useState } from "react";
import { images } from "../constants/images";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

const Modal = ({ images, columns = 4 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-64 overflow-hidden rounded-xl"
            onClick={() => openModal(index)}
          >
            <img src={imgSrc} className="w-full h-full object-cover hover:opacity-70 cursor-pointer" />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <AiOutlineClose />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl"
          >
            <AiOutlineLeft />
          </button>

          <img
            src={images[currentIndex]}
            className="max-w-[90%] max-h-[80%] rounded shadow-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl"
          >
            <AiOutlineRight />
          </button>

          <div className="flex gap-4 overflow-x-auto max-w-[90%] p-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 
            ${
              i === currentIndex
                ? "border-white scale-110"
                : "border-transparent"
            }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default Modal;
