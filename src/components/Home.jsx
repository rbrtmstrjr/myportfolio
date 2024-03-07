import { Icon } from "@iconify/react";
import { useState } from "react";

import profile from "/images/gamer_bg.png";
import bg from "/images/coder.png";

const socialMedia = [
  {
    id: 1,
    icon: "bi:github",
    url: "3",
  },
  {
    id: 2,
    icon: "bi:facebook",
    url: "#",
  },
  {
    id: 3,
    icon: "devicon-plain:linkedin",
    url: "#",
  },
  {
    id: 4,
    icon: "teenyicons:instagram-solid",
    url: "#",
  },
];

const cards = [
  { id: 1, imageUrl: "bg-gamer", title: "Gamer" },
  { id: 2, imageUrl: "bg-designer", title: "Designer" },
  { id: 3, imageUrl: "bg-developer", title: "Developer" },
  { id: 4, imageUrl: "bg-photographer", title: "Photographer" },
  { id: 5, imageUrl: null, title: null },
  { id: 6, imageUrl: null, title: null },
];

export default function Home({
  accentBgColor,
  accentTextColor,
  accentHoverTextColor,
}) {
  const [startIndex, setStartIndex] = useState(0);
  const [addTransition, setTransition] = useState("");

  const prevSlide = () => {
    if (startIndex > 0) {
      setTransition("transform ease-out duration-300");
      setStartIndex(startIndex - 1);
    }
  };

  const nextSlide = () => {
    if (startIndex < cards.length - 3) {
      setTransition("transform ease-out duration-300");
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <>
      <main className=" text-slate-300 relative overflow-hidden bg-primary">
        <div className="absolute flex items-center">
          <img src={bg} alt="" className="w-4/5 h-screen opacity-10" />
        </div>
        <div className="px-4 2xl:px-20">
          <article className="flex flex-col md:flex-row py-6 2xl:py-20 z-10">
            <div className="w-full 2xl:w-1/2 flex flex-col justify-center items-center z-10 relative">
              <div className="flex text-xs absolute -left-2 -m-24 rotate-90">
                <h1 className="tracking-stretch">SCROLL</h1>
                <h1>- - - - - - - - - - - - - -</h1>
              </div>
              <div
                className={`absolute z-0 rounded-full ${accentBgColor} bg-opacity-70 -ml-2 mt-20 2xl:mt-1 w-40 h-40`}
              ></div>
              <img src={profile} alt="" className="mt-2 2xl:mt-0 w-3/5 z-10" />
            </div>
            <div className="w-full 2xl:w-1/2 flex flex-col gap-6 justify-center z-30">
              <div>
                <h1 className="relative leading-none tracking-wide text-8xl 2xl:text-9xl font-black font-primary z-30">
                  R<span className={accentTextColor}>4</span>JON
                </h1>
                <h1 className="outline-title leading-none tracking-wide text-8xl 2xl:text-9xl font-primary -mt-20 2xl:-mt-28 ml-2 z-20">
                  R4JON
                </h1>
                <p className="text-white/60 font-secondary text-sm pr-0 2xl:pr-14">
                  A creative web designer, I craft digital experiences that
                  leave a lasting impression. With a keen eye for aesthetics and
                  a knack for turning ideas into stunning websites, I bring your
                  online vision to life.
                </p>
              </div>
              <div className="flex gap-3 2xl:gap-6">
                <div className="">
                  <button
                    className={`w-36 2xl:w-40 ${accentBgColor} text-sm 2xl:text-base hover:scale-110 transition text-black rounded-bl-xl rounded-tr-xl font-primary p-2 z-20 tracking-mini_stretch text-center`}
                  >
                    CONNECT
                  </button>
                </div>
                <div className="flex items-center gap-3 2xl:gap-4 text-4xl text-white/50">
                  {socialMedia.map((social) => (
                    <Icon
                      icon={social.icon}
                      className={`text-white/30 ${accentHoverTextColor} hover:scale-125 transition`}
                      key={social.id}
                    />
                  ))}
                </div>
              </div>

              <div
                className={`flex gap-3 mt-6 overflow-hidden transition ${addTransition}`}
              >
                {cards.slice(startIndex, startIndex + 3).map((card, index) => (
                  <div
                    className={`relative ${
                      index === 0 ? "opacity-100" : "opacity-30"
                    } duration-1000 rounded-2xl w-1/2 2xl:w-1/3 h-60 ${
                      card.imageUrl
                    } bg-cover bg-no-repeat1 transition`}
                    key={card.id}
                  >
                    <div className="absolute w-full h-full text-white text-xl">
                      <div className="flex justify-center items-end pb-4 h-full">
                        <h1 className="font-primary">{card.title}</h1>
                      </div>
                    </div>
                    <div
                      className={`w-full h-full ${
                        index === 0 ? accentBgColor : ""
                      } rounded-2xl mix-blend-multiply opacity-30`}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Icon
                  icon="ep:arrow-left-bold"
                  className={`${accentHoverTextColor} ${
                    startIndex === cards.length - 3
                      ? `hover:scale-125 ${accentHoverTextColor} ${accentTextColor}`
                      : "text-white/30"
                  } hover:scale-125  transition text-xl cursor-pointer`}
                  onClick={prevSlide}
                />
                <Icon
                  icon="ep:arrow-right-bold"
                  className={`${accentHoverTextColor} ${
                    startIndex === 0 ? accentTextColor : "text-white/30"
                  } hover:scale-125 transition text-xl cursor-pointer`}
                  onClick={nextSlide}
                />
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
