import { useState } from "react";

import { Icon } from "@iconify/react";
import Img1 from "/images/landing_page4.jpg";
import Img2 from "/images/sample_image1.jpg";
import Img3 from "/images/landing_page1.jpg";
import Img4 from "/images/landing_page3.jpg";
import Img5 from "/images/landing_page6.jpg";
import Img6 from "/images/graphic_design.png";
import Img7 from "/images/landing_page5.jpg";
import Img8 from "/images/landing_page2.jpg";
import Img9 from "/images/wanderlinx.png";
import Img10 from "/images/landing_page7.jpg";

export default function Gallery() {
  let imgData = [
    { id: 1, imgSrc: Img2 },
    { id: 2, imgSrc: Img4 },
    { id: 3, imgSrc: Img5 },
    { id: 4, imgSrc: Img3 },
    { id: 5, imgSrc: Img6 },
    { id: 6, imgSrc: Img1 },
    { id: 7, imgSrc: Img9 },
    { id: 8, imgSrc: Img7 },
    { id: 9, imgSrc: Img8 },
    { id: 10, imgSrc: Img10 },
  ];

  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  };
  return (
    <section
      className="flex justify-center px-4 sm:px-10 xl:px-20 pt-12 lg:pt-20 xl:pt-32"
      id="id2"
    >
      <div className="w-full max-w-screen-2xl">
        <div className={model ? "model open" : "model"}>
          <img src={tempingSrc} alt="" loading="lazy" />
          <Icon
            icon="mingcute:close-fill"
            className="text-white text-3xl fixed top-8 right-8 cursor-pointer hover:scale-110"
            onClick={() => setModel(false)}
          />
        </div>
        <div className="overflow-hidden">
          <div className="gallery" data-aos="fade-up">
            {imgData.map((item, index) => (
              <div
                className="pics grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:scale-105"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  src={item.imgSrc}
                  alt=""
                  loading="lazy"
                  className="w-full rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
