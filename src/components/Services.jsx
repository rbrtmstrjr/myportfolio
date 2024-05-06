import { Icon } from "@iconify/react";
import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const services = [
  {
    id: 1,
    icon: "iconoir:web-window",
    title: "WEB DESIGN",
    description:
      "Transforming visions into captivating and responsive websites that engage and inspire. ",
    url: "#",
  },
  {
    id: 2,
    icon: "mingcute:code-line",
    title: "WEB DEVELOPMENT",
    description:
      "Build and maintain websites, creating functionality which help businesses promote thier product.",
    url: "#",
  },
  {
    id: 3,
    icon: "f7:rectangle-grid-1x2",
    title: "UI / UX DESIGN",
    description:
      "Optimizing user experience, creating intuitive interfaces and ensuring its smooth interactions.",
    url: "#",
  },
  {
    id: 4,
    icon: "streamline:pen-tool",
    title: "GRAPHICS DESIGN",
    description:
      "Creating visual concept for a variety of projects, such as advertisements, logos and other digital prints.",
    url: "#",
  },
  {
    id: 5,
    icon: "ion:images-outline",
    title: "PHOTO EDITING",
    description:
      "Manipulate and enhance images to improve their quality and create visually appealing compositions.",
    url: "#",
  },
  {
    id: 6,
    icon: "radix-icons:camera",
    title: "PHOTOGRAPHY",
    description:
      "Capture and create images to document events, tell stories, evoke emotions, or convey messages visually.",
    url: "#",
  },
];

export default function Services({
  showBgAccent,
  showTextAccent,
  showBgHoverAccent,
  showLightAccent,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServices, setIsServices] = useState(0);

  const openModal = (id) => {
    setIsModalOpen(true);
    setIsServices(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section
        className="flex justify-center px-4 py-12 lg:py-20 sm:px-10 xl:px-20 xl:py-32 "
        id="services"
      >
        <div className="w-full max-w-screen-2xl">
          <div className="mb-4 xl:mb-16">
            <label className="flex justify-center items-center outline-title leading-none tracking-expand text-5xl sm:text-7xl xl:text-8xl opacity-20 font-primary ml-2 z-20">
              MY SKILLS
            </label>
            <h2
              className="text-3xl sm:text-4xl xl:text-5xl font-primary -mt-5 lg:-mt-8 xl:-mt-12 text-slate-300 text-center mb-8"
              data-aos="fade-down"
            >
              What I Do?
            </h2>
          </div>

          <div className="flex flex-wrap gap-4" data-aos="fade-up">
            {services.map((services) => (
              <div
                className={`w-full sm:w-1/3 xl:w-1/4 flex-grow flex gap-2 flex-col bg-secondary/20 rounded-2xl p-8 xl:p-12 hover:scale-105 transition duration-300 hover:cursor-pointer hover:bg-secondary/30`}
                key={services.id}
              >
                <Icon
                  icon={services.icon}
                  className={`${showTextAccent} text-5xl`}
                />

                <h3 className="text-slate-300 font-primary text-xl lg:text-2xl mt-8">
                  {services.title}
                </h3>
                <p className="text-darkGray text-sm leading-6">
                  {services.description}
                </p>

                <button
                  className={`${showBgHoverAccent} w-28 mt-4 hover:transition hover:duration-300 hover:text-primary px-5 py-3 border border-darkGray/50 text-darkGray text-xs rounded-lg`}
                  onClick={() => openModal(services.id)}
                >
                  View Sample
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            onClick={closeModal}
            className="absolute text-2xl top-1 right-3 text-white hover:text-gray-300"
          >
            &times;
          </button>
          <div className="bg-tertiary w-11/12 xl:w-4/5 mx-auto rounded-2xl shadow-xl z-50">
            <div>
              {isServices === 1 && (
                <div className="flex flex-col-reverse xl:flex-row gap-0">
                  <div className="w-full xl:w-2/5 py-8 px-4 xl:px-14 xl:py-14 2xl:py-24 flex justify-center flex-col gap-2">
                    <h2 className="text-2xl xl:text-3xl font-primary text-slate-300">
                      Innervate Chiropractic
                    </h2>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      (Chiropractor Website)
                    </p>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      Innervate Chiropractic, led by Dr. Dean in Oklahoma City,
                      OK, is committed to enhancing patients' well-being through
                      personalized chiropractic care.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs mt-4">
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Thryv Editor
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Wellness
                      </span>

                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Responsive
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Minimal
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Informative
                      </span>
                    </div>
                    <div className="flex gap-3 mt-2 xl:mt-8">
                      <a
                        href="https://www.innervatechiropractic.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          className={`${showBgAccent} w-24 transition duration-300 px-4 py-3 border border-slate-300/20 text-primary text-xs rounded-lg`}
                        >
                          Visit Site
                        </button>
                      </a>

                      <button
                        className={`${showBgHoverAccent} w-28 transition duration-300 hover:text-primary px-5 py-3 border border-slate-300/20 text-slate-300/70 text-xs rounded-lg`}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full xl:w-3/5 p-8 flex items-center bg-dashboard bg-center bg-cover backdrop-blur-xl rounded-none rounded-t-2xl xl:rounded-tl-none xl:rounded-r-2xl"></div>
                </div>
              )}

              {isServices === 2 && (
                <div className="flex flex-col-reverse xl:flex-row gap-0">
                  <div className="w-full xl:w-2/5 py-8 px-4 xl:px-14 xl:py-14 2xl:py-24 flex justify-center flex-col gap-2">
                    <h2 className="text-2xl xl:text-3xl font-primary text-slate-300">
                      Wanderlinx
                    </h2>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      (Travel Services)
                    </p>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      Wanderlinx is a platform streamlines operates for travel
                      agents, handling ticket bookings across agencies while
                      preserving and enhancing brand identities.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs mt-4">
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        React Js
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Tailwind Css
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Responsive
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Minimal
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Modern
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Travel Agency
                      </span>
                    </div>
                    <div className="flex gap-3 mt-2 xl:mt-8">
                      <a
                        href="https://mywanderlinx.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          className={`${showBgAccent} w-24 transition duration-300 px-4 py-3 border border-slate-300/20 text-primary text-xs rounded-lg`}
                        >
                          Visit Site
                        </button>
                      </a>

                      <button
                        className={`${showBgHoverAccent} w-28 transition duration-300 hover:text-primary px-5 py-3 border border-slate-300/20 text-slate-300/70 text-xs rounded-lg`}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full xl:w-3/5 p-8 flex items-center bg-wanderlinx bg-center bg-cover backdrop-blur-xl rounded-none rounded-t-2xl xl:rounded-tl-none xl:rounded-r-2xl"></div>
                </div>
              )}

              {isServices === 3 && (
                <div className="flex flex-col-reverse xl:flex-row gap-0">
                  <div className="w-full xl:w-2/5 py-8 px-4 xl:px-14 xl:py-14 2xl:py-24 flex justify-center flex-col gap-2">
                    <h2 className="text-2xl xl:text-3xl font-primary text-slate-300">
                      2024 Portfolio
                    </h2>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      (Online Portfolio)
                    </p>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      A compilation detailing all the projects from wireframing
                      to prototyping to development.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs mt-4">
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Figma
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        React Js
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Tailwind Css
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Minimal
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Responsive
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Darkmode
                      </span>
                    </div>
                    <div className="flex gap-3 mt-2 xl:mt-8">
                      <a
                        href="https://www.figma.com/file/6nq6bq1exrU0ngZZfXtXYS/Portfolio-2024?type=design&node-id=0%3A1&mode=design&t=qsW7ECYU1WmUhiYA-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button
                          className={`${showBgAccent} transition duration-300 px-4 py-3 border border-slate-300/20 text-primary text-xs rounded-lg`}
                        >
                          Visit Figma File
                        </button>
                      </a>

                      <button
                        className={`${showBgHoverAccent} w-28 transition duration-300 hover:text-primary px-5 py-3 border border-slate-300/20 text-slate-300/70 text-xs rounded-lg`}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full xl:w-3/5 p-8 flex items-center bg-uiux bg-center bg-cover backdrop-blur-xl rounded-none rounded-t-2xl xl:rounded-tl-none xl:rounded-r-2xl"></div>
                </div>
              )}

              {isServices === 5 && (
                <div className="flex flex-col-reverse xl:flex-row gap-0">
                  <div className="w-full xl:w-2/5 py-8 px-4 xl:px-14 xl:py-14 2xl:py-24 flex justify-center flex-col gap-2">
                    <h2 className="text-2xl xl:text-3xl font-primary text-slate-300">
                      Birthday Poster
                    </h2>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      (Photo Editing)
                    </p>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      A birthday poster for Jorelyn's 7th birthday,
                      incorporating an enchanted ambiance with subtle pastel
                      hues, as requested by the client.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs mt-4">
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Photoshop
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Remini
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Generative Fill
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Enchanted
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Pastel
                      </span>
                    </div>
                    <div className="flex gap-3 mt-2 xl:mt-8">
                      <button
                        className={`${showBgHoverAccent} w-28 transition duration-300 hover:text-primary px-5 py-3 border border-slate-300/20 text-slate-300/70 text-xs rounded-lg`}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-auto xl:w-3/5">
                    <ReactCompareSlider
                      className="w-full h-full object-cover rounded-none rounded-t-2xl xl:rounded-tl-none xl:rounded-r-2xl"
                      itemOne={
                        <ReactCompareSliderImage
                          src="./images/sample_image1.jpg"
                          srcSet="./images/sample_image1.jpg"
                          alt="Image one"
                        />
                      }
                      itemTwo={
                        <ReactCompareSliderImage
                          src="./images/before.jpg"
                          srcSet="./images/before.jpg"
                          alt="Image two"
                        />
                      }
                    />
                  </div>
                </div>
              )}

              {isServices === 4 && (
                <div className="flex flex-col-reverse xl:flex-row gap-0">
                  <div className="w-full xl:w-2/5 py-8 px-4 xl:px-14 xl:py-14 2xl:py-24 flex justify-center flex-col gap-2">
                    <h2 className="text-2xl xl:text-3xl font-primary text-slate-300">
                      Organifi Sleep
                    </h2>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      (Social Media Ads)
                    </p>
                    <p className="text-white/60 font-secondary text-sm leading-6">
                      Create an advertisement layout for Organifi Sleep,
                      incorporating infographics to showcase product
                      information, and enhance visual appeal with floral
                      compositions.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs mt-4">
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Photoshop
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Instagram
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Social Content
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Informative
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full ${showLightAccent} text-primary`}
                      >
                        Sleep Suplement
                      </span>
                    </div>
                    <div className="flex gap-3 mt-2 xl:mt-8">
                      <button
                        className={`${showBgHoverAccent} w-28 transition duration-300 hover:text-primary px-5 py-3 border border-slate-300/20 text-slate-300/70 text-xs rounded-lg`}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full xl:w-3/5 p-8 flex items-center bg-graphic_design bg-center bg-cover backdrop-blur-xl rounded-none rounded-t-2xl xl:rounded-tl-none xl:rounded-r-2xl"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
