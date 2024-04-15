import { Icon } from "@iconify/react";

const navigationList = [
  {
    id: 1,
    icon: "iconamoon:home",
    url: "home",
  },

  {
    id: 2,
    icon: "iconamoon:screen-full-bold",
    url: "services",
  },
  {
    id: 3,
    icon: "lucide:user-round",
    url: "about",
  },

  {
    id: 4,
    icon: "mingcute:star-line",
    url: "testimonials",
  },
  {
    id: 5,
    icon: "lucide:mail",
    url: "contact",
  },
];

export default function Nav({
  accentHoverBgColor,
  activeSection,
  showTextAccent,
}) {
  return (
    <nav className="flex relative justify-center z-50">
      <div className="px-6 py-3 text-slate-300 bg-white/10 flex gap-4 text-2xl fixed rounded-full justify-center bottom-8 backdrop-blur">
        <ShowNavigation
          accentHoverBgColor={accentHoverBgColor}
          activeSection={activeSection}
          showTextAccent={showTextAccent}
        />
      </div>
    </nav>
  );
}

function ShowNavigation({ accentHoverBgColor, activeSection, showTextAccent }) {
  const getNavigation = navigationList;
  return (
    <>
      {getNavigation.map((nav) => (
        <a
          href={`#${nav.url}`}
          className={`${
            activeSection === nav.url ? showTextAccent : "text-white/50"
          } ${accentHoverBgColor} rounded-md p-1 hover:text-tertiary hover:scale-110 transition`}
          key={nav.id}
        >
          <Icon icon={nav.icon} />
        </a>
      ))}
    </>
  );
}
