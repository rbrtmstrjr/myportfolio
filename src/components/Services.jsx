import { Icon } from "@iconify/react";
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
  showTextAccent,
  showBgHoverAccent,
  showHoverBorderAccent,
}) {
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
          <ShowServices
            showTextAccent={showTextAccent}
            showBgHoverAccent={showBgHoverAccent}
            showHoverBorderAccent={showHoverBorderAccent}
          />
        </div>
      </section>
    </div>
  );
}

function ShowServices({
  showTextAccent,
  showBgHoverAccent,
  showHoverBorderAccent,
}) {
  const showServices = services;

  return (
    <>
      {showServices.map((services) => (
        <div
          className={`w-full xl:w-1/4 flex-grow flex flex-col bg-secondary/20 rounded-2xl p-8 xl:p-12 hover:border-t-8  ${showHoverBorderAccent} hover:scale-105 transition duration-300 hover:cursor-pointer hover:bg-secondary/30`}
          key={services.id}
        >
          <Icon icon={services.icon} className={`${showTextAccent} text-4xl`} />

          <h3 className="text-slate-300 font-primary text-xl 2xl:text-2xl mt-4">
            {services.title}
          </h3>
          <p className="text-white/50 text-sm">{services.description}</p>
          <a href={services.url} className="mt-2">
            <button
              className={`${showBgHoverAccent} mt-4 transition duration-300 hover:text-primary px-5 py-3 border border-slate-300/20 text-slate-300/70 text-xs rounded-lg`}
            >
              View Sample
            </button>
          </a>
        </div>
      ))}
    </>
  );
}
