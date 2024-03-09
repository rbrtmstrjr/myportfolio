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
      "Dissect digital footprint, unraveling crucial patterns and trends from user behavior to strategic recommendations.",
    url: "#",
  },
  {
    id: 3,
    icon: "f7:rectangle-grid-1x2",
    title: "UI / UX Design",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    url: "#",
  },
  {
    id: 4,
    icon: "streamline:pen-tool",
    title: "Graphics Design",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    url: "#",
  },
  {
    id: 5,
    icon: "ion:images-outline",
    title: "Photo Editing",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
    url: "#",
  },
  {
    id: 6,
    icon: "radix-icons:camera",
    title: "Photography",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
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
        <h2 className="text-3xl 2xl:text-5xl font-primary text-slate-300 text-center mb-8">
          What I Do?
        </h2>
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
          className={`w-full xl:w-slice flex flex-col bg-white/5 rounded-3xl p-8 xl:p-12 gap-3 hover:border-t-8  ${showHoverBorderAccent} hover:scale-105 transition duration-300 hover:cursor-pointer hover:bg-white/10`}
          key={services.id}
        >
          <Icon icon={services.icon} className={`${showTextAccent} text-4xl`} />

          <h3 className="text-slate-300 font-primary text-xl 2xl:text-2xl mt-4">
            {services.title}
          </h3>
          <p className="text-white/50 text-sm">{services.description}</p>
          <a href={services.url} className="mt-2">
            <button
              className={`${showBgHoverAccent} transition duration-300 hover:text-primary px-5 py-3 border border-slate-300/20 text-slate-300/70 text-xs rounded-lg`}
            >
              View Sample
            </button>
          </a>
        </div>
      ))}
    </>
  );
}
