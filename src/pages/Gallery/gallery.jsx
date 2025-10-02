import React from "react";
import Modal from "../../components/modal";
import { images } from "../../constants/images";

const Gallery = () => {
  return (
    <div className="p-4">
      <Modal images={images} columns={5} />
    </div>
  );
};

export default Gallery;
