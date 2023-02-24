import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "./assets/partnerLogos/prghDarkMain.svg";
import "./PartnerBanner.scss";

function PartnerBanner() {
  const banners = Array(10).fill({ name: "PRGH", src: Logo });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="PartnerBanner">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
        transitionDuration={750}
        arrows={false}
      >
        {banners.map((b, i) => (
          <img key={i} src={b.src} alt={b.name} />
        ))}
      </Carousel>
    </div>
  );
}
export default PartnerBanner;
