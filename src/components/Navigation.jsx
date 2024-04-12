import { Icon } from "@iconify/react";

const navigationList = [
  {
    id: 1,
    icon: "iconamoon:home",
    url: "#id1",
  },

  {
    id: 2,
    icon: "iconamoon:screen-full-bold",
    url: "#id3",
  },
  {
    id: 3,
    icon: "lucide:user-round",
    url: "#id4",
  },

  {
    id: 4,
    icon: "mingcute:star-line",
    url: "#id5",
  },
  {
    id: 5,
    icon: "lucide:mail",
    url: "#id6",
  },
];

export default function Nav({ accentHoverBgColor }) {
  return (
    <nav className="flex relative justify-center z-50">
      <div className="px-6 py-3 text-slate-300 bg-white/10 flex gap-4 text-2xl fixed rounded-full justify-center bottom-8 backdrop-blur">
        <ShowNavigation accentHoverBgColor={accentHoverBgColor} />
      </div>
    </nav>
  );
}

function ShowNavigation({ accentHoverBgColor }) {
  const getNavigation = navigationList;

  return (
    <>
      {getNavigation.map((nav) => (
        <a
          href={nav.url}
          className={`${accentHoverBgColor} rounded-md p-1 hover:text-tertiary hover:scale-110 transition text-white/50`}
          key={nav.id}
        >
          <Icon icon={nav.icon} />
        </a>
      ))}
    </>
  );
}
