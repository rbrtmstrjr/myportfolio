import { Icon } from "@iconify/react";
import { useState } from "react";

import profile1 from "/images/gamerz.png";
import profile2 from "/images/designer.png";
import profile3 from "/images/dev_.png";
import bg from "/images/coder.png";

const cards = [
  { id: 1, imageUrl: "bg-gamer", title: "Gamer", profile: profile1 },
  { id: 2, imageUrl: "bg-designer", title: "Designer", profile: profile2 },
  { id: 3, imageUrl: "bg-developer", title: "Developer", profile: profile3 },
];

export default function Home({
  accentBgColor,
  accentTextColor,
  accentHoverTextColor,
  socialMedia,
}) {
  const [active, setActive] = useState(1);
  const [showBg, setShowBg] = useState(true);

  const showActiveCard = (id) => {
    setActive(id);
    setShowBg(false);
    setTimeout(() => {
      setShowBg(true);
    }, 300);
  };

  return (
    <>
      <main className=" text-slate-300 relative overflow-hidden">
        <div className="absolute flex items-center">
          <img src={bg} alt="" className="w-4/5 h-screen opacity-5" />
        </div>
        <div className="px-4 xl:px-20">
          <article className="flex flex-col md:flex-row py-6 2xl:py-20 z-10">
            <div
              className="w-full 2xl:w-1/2 flex flex-col justify-center items-center z-10 relative"
              data-aos="fade-right"
            >
              <div className="flex text-xs absolute -left-2 -m-24 rotate-90">
                <h1 className="tracking-stretch">SCROLL</h1>
                <h1>- - - - - - - - - - - - - -</h1>
              </div>
              <div
                className={` ${
                  showBg
                    ? `opacity-100 absolute z-0 mix-blend-screen rounded-full transition-opacity duration-300 ${accentBgColor} bg-opacity-70 -ml-3 xl:-ml-8 2xl:-ml-14 mt-6 xl:mt-9 2xl:-mt-4 w-32 h-32 xl:w-40 xl:h-40`
                    : "opacity-80"
                } `}
              ></div>

              {cards.map((card) => (
                <img
                  src={card.profile}
                  alt=""
                  className={`${
                    card.id === active ? "opacity-100" : "opacity-0 absolute"
                  } mt-2 2xl:mt-0 w-4/5 xl:w-3/5 z-10 transition-opacity duration-500`}
                  key={card.id}
                />
              ))}
            </div>
            <div
              className="w-full 2xl:w-1/2 flex flex-col gap-6 justify-center z-30"
              data-aos="fade-left"
            >
              <div>
                <h1 className="relative leading-none tracking-expand text-7xl xl:text-9xl font-black font-primary z-30">
                  R<span className={accentTextColor}>4</span>JON
                </h1>
                <h1 className="outline-title leading-none tracking-expand text-7xl xl:text-9xl font-primary opacity-70 -mt-[63px] xl:-mt-28 ml-2 z-20">
                  R4JON
                </h1>
                <p className="text-white/60 font-secondary text-sm pr-0 2xl:pr-28">
                  A creative web designer, I craft digital experiences that
                  leave a lasting impression. With a keen eye for aesthetics and
                  a knack for turning ideas into stunning websites, I bring your
                  online vision to life.
                </p>
              </div>
              <div className="flex gap-3 xl:gap-6">
                <div className="">
                  <a href="#id6">
                    <button
                      className={`w-36 2xl:w-40 ${accentBgColor} text-sm 2xl:text-base hover:scale-110 transition text-black rounded-bl-xl rounded-tr-xl font-primary p-2 z-20 tracking-mini_stretch text-center`}
                    >
                      CONNECT
                    </button>
                  </a>
                </div>
                <div className="flex items-center gap-2 2xl:gap-4 text-4xl text-white/50">
                  {socialMedia.map((social) => (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      key={social.id}
                    >
                      <Icon
                        icon={social.icon}
                        className={`text-white/30 ${accentHoverTextColor} hover:scale-125 transition`}
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className={`flex gap-1 mt-6 overflow-hidden transition`}>
                {cards.map((card) => (
                  <div
                    className={`relative ${
                      card.id === active
                        ? "opacity-100 scale-100 mx-1"
                        : "opacity-30 scale-95"
                    } duration-300 hover:cursor-pointer hover:scale-100 rounded-2xl w-1/2 2xl:w-1/3 h-60 ${
                      card.imageUrl
                    } bg-cover bg-center bg-no-repeat1 transition`}
                    key={card.id}
                    onClick={() => showActiveCard(card.id)}
                  >
                    <div className="absolute w-full h-full text-white text-xl">
                      <div className="flex justify-center items-end pb-4 h-full">
                        <h1 className="font-primary">{card.title}</h1>
                      </div>
                    </div>
                    <div
                      className={`w-full h-full ${
                        card.id === active ? `opacity-100 ${accentBgColor}` : ""
                      } rounded-2xl mix-blend-multiply opacity-50`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
