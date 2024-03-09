import { Icon } from "@iconify/react";

const navigationList = [
  {
    id: 1,
    icon: "iconamoon:home-fill",
    url: "#id1",
  },
  {
    id: 2,
    icon: "mingcute:grid-2-fill",
    url: "#id3",
  },
  {
    id: 4,
    icon: "mingcute:user-2-fill",
    url: "#id4",
  },
  {
    id: 5,
    icon: "solar:star-bold",
    url: "#id5",
  },
  {
    id: 6,
    icon: "mage:email-fill",
    url: "#id6",
  },
];

export default function Nav({ accentHoverBgColor }) {
  return (
    <nav className="flex relative justify-center z-50">
      <div className="w-60 p-2 text-white bg-white/10 flex gap-3 text-2xl fixed rounded-full justify-center bottom-4 backdrop-blur">
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
          className={`${accentHoverBgColor} rounded-md p-1 hover:text-primary hover:scale-110 transition`}
          key={nav.id}
        >
          <Icon icon={nav.icon} />
        </a>
      ))}
    </>
  );
}
