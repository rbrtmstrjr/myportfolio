import { Icon } from "@iconify/react";
import { useState } from "react";

const services = [
  {
    id: 1,
    icon: "iconoir:web-window",
    title: "Web Design",
    description:
      "Transforming visions into captivating and responsive websites that engage and inspire. ",
    url: "#",
  },
  {
    id: 2,
    icon: "mingcute:code-line",
    title: "Web Development",
    description:
      "Build and maintain websites, creating functionality which help businesses promote thier product.",
    url: "#",
  },
  {
    id: 3,
    icon: "f7:rectangle-grid-1x2",
    title: "UI / UX Design",
    description:
      "Optimizing user experience, creating intuitive interfaces and ensuring its smooth interactions.",
    url: "#",
  },
  {
    id: 4,
    icon: "streamline:pen-tool",
    title: "Graphics Design",
    description:
      "Creating visual concept for a variety of projects, such as advertisements, logos and other digital prints.",
    url: "#",
  },
  {
    id: 5,
    icon: "ion:images-outline",
    title: "Photo Editing",
    description:
      "Manipulate and enhance images to improve their quality and create visually appealing compositions.",
    url: "#",
  },
  {
    id: 6,
    icon: "radix-icons:camera",
    title: "Photography",
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
      <section className="px-4 py-12 xl:px-20 xl:py-32 " id="id3">
        <div className="">
          <label className="flex justify-center items-center outline-title leading-none tracking-expand text-5xl xl:text-8xl opacity-20 font-primary ml-2 z-20">
            WHAT I DO?
          </label>
          <h2 className="text-3xl xl:text-5xl font-primary -mt-5 xl:-mt-12 text-slate-300 text-center mb-8">
            Services Offered
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row flex-wrap gap-4">
          {services.map((services) => (
            <div
              className={`w-full xl:w-1/4 flex-grow flex flex-col bg-secondary/20 rounded-2xl p-8 xl:p-12 hover:scale-105 transition duration-300 hover:cursor-pointer hover:bg-secondary/30`}
              key={services.id}
            >
              <Icon
                icon={services.icon}
                className={`${showTextAccent} text-5xl`}
              />

              <h3 className="text-slate-300 font-primary text-xl 2xl:text-2xl mt-8">
                {services.title}
              </h3>
              <p className="text-white/50 text-sm">{services.description}</p>

              <button
                className={`${showBgHoverAccent} w-28 mt-4 hover:transition hover:duration-300 hover:text-primary px-5 py-3 border border-slate-300/20 text-slate-300/70 text-xs rounded-lg`}
                onClick={() => openModal(services.id)}
              >
                View Sample
              </button>
            </div>
          ))}
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
                <div className="flex flex-col-reverse xl:flex-row gap-0 xl:gap-8">
                  <div className="w-full xl:w-2/5 py-8 px-4 xl:px-14 xl:py-14 2xl:py-24 flex justify-center flex-col gap-2">
                    <h2 className="text-2xl xl:text-3xl font-primary text-slate-300">
                      Action Coach Dame County
                    </h2>
                    <p className="text-white/60 font-secondary text-sm">
                      (Coaching Website)
                    </p>
                    <p className="text-white/60 font-secondary text-sm">
                      Action Coach Dane County is a coaching business that you
                      can rely on to guide you to increased profit and operating
                      efficiencies.
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
                        Coaching Website
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
                    </div>
                    <div className="flex gap-3 mt-2 xl:mt-8">
                      <a
                        href="https://siteeditor.thryv.com/preview/9e3e8c25"
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
                  <div className="relative w-full xl:w-3/5 p-8 flex items-center bg-dashboard bg-center bg-cover backdrop-blur-xl rounded-none rounded-t-2xl xl:rounded-tl-none xl:rounded-r-2xl">
                    <img
                      src="./images/res.png"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              )}

              {isServices === 2 && (
                <div className="flex flex-col-reverse xl:flex-row gap-0 xl:gap-8">
                  <div className="w-full xl:w-2/5 py-8 px-4 xl:px-14 xl:py-14 2xl:py-24 flex justify-center flex-col gap-2">
                    <h2 className="text-2xl xl:text-3xl font-primary text-slate-300">
                      Wanderlinx
                    </h2>
                    <p className="text-white/60 font-secondary text-sm">
                      (Travel Services)
                    </p>
                    <p className="text-white/60 font-secondary text-sm">
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
                  <div className="relative w-full xl:w-3/5 p-8 flex items-center bg-dashboard1 bg-center bg-cover backdrop-blur-xl rounded-none rounded-t-2xl xl:rounded-tl-none xl:rounded-r-2xl">
                    <img
                      src="./images/wanderlinx.png"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
