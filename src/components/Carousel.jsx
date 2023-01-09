import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Carousel({ imgs: [img1, img2, img3] }) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">
          <ArrowBackIosIcon />
        </span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">
          <NavigateNextIcon />
        </span>
      </button>
    </div>
  );
}

export { Carousel };
