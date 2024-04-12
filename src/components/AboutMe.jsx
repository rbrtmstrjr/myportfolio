import { useState } from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

let profileData = [
  {
    id: 1,
    title: "Skills",
  },
  { id: 2, title: "Experience" },
  { id: 3, title: "Certifications" },
];

const dataIcon = [
  {
    id: 1,
    iconName: "icomoon-free:html-five",
    name: "Html 5",
  },
  {
    id: 2,
    iconName: "uiw:css3",
    name: "Css 3",
  },
  {
    id: 3,
    iconName: "cib:javascript",
    name: "Javascript",
  },
  {
    id: 4,
    iconName: "teenyicons:react-solid",
    name: "React Js",
  },
  {
    id: 5,
    iconName: "file-icons:tailwind",
    name: "Tailwind Css",
  },
  {
    id: 6,
    iconName: "simple-icons:webflow",
    name: "Webflow",
  },
  {
    id: 7,
    iconName: "bi:github",
    name: "Github",
  },
];

export default function AboutMe({
  showAccent,
  showTextAccent,
  showHoverAccent,
  showBorderAccent,
}) {
  const [profile, setProfile] = useState(1);

  const getProfileDescription = (data) => {
    setProfile(data);
  };

  return (
    <>
      <section className="flex flex-col xl:flex-row bg-secondary/10" id="id4">
        <div className="w-full xl:w-1/2 py-0 xl:py-32 pl-0 xl:pr-0 xl:pl-20">
          <img
            src="./images/me.jpg"
            className="h-full w-full object-cover rounded-none xl:rounded-2xl "
            alt=""
            data-aos="fade-right"
          />
        </div>

        <div
          className="w-full xl:w-1/2 flex flex-col gap-4 py-12 xl:py-32 pr-4 xl:pr-20 pl-4 xl:pl-8"
          data-aos="fade-left"
        >
          <label className="outline-title leading-none tracking-expand text-5xl xl:text-8xl opacity-20 font-primary z-20">
            ABOUT ME
          </label>
          <h2 className="text-3xl xl:text-5xl font-primary -mt-10 xl:-mt-12 text-slate-300">
            Hi Im Rajon
          </h2>
          <p className="text-white/50 text-sm">
            A dynamic designer with a passion for creating visually stunning
            digital experiences. With two years of experience as a web designer
            and an additional year specializing in graphic design, I can bring a
            unique blend of creativity and technical expertise to your projects.
          </p>
          <ul className="flex gap-5 xl:gap-8 text-slate-300">
            {profileData.map((data, index) => (
              <li
                key={index}
                className={`${
                  profile === data.id ? `font-bold ${showTextAccent}` : ""
                } cursor-pointer`}
                onClick={() => getProfileDescription(data.id)}
              >
                {data.title}
                <div
                  className={
                    profile === data.id
                      ? `absolute h-1 w-10 ${showAccent} rounded-md mt-3`
                      : "hidden"
                  }
                ></div>
              </li>
            ))}
          </ul>
          <ul className="text-white/50 p-8 xl:p-10 bg-secondary/20 rounded-2xl mt-6">
            {profile === 1 && (
              <div className="text-sm">
                <h1 className="mb-3 text-slate-300">Design Tools</h1>
                <div className="flex flex-grow flex-wrap gap-4 ">
                  <Icon
                    icon="simple-icons:adobephotoshop"
                    className={`${showHoverAccent} text-4xl hover:scale-125 ps transition`}
                  />
                  <Tooltip anchorSelect=".ps" place="top">
                    Photoshop
                  </Tooltip>

                  <Icon
                    icon="simple-icons:adobeillustrator"
                    className={`${showHoverAccent} ai text-4xl hover:scale-125 transition`}
                  />
                  <Tooltip anchorSelect=".ai" place="top">
                    Illustrator
                  </Tooltip>

                  <Icon
                    icon="gg:figma"
                    className={`${showHoverAccent} figma text-4xl hover:scale-125 transition`}
                  />
                  <Tooltip anchorSelect=".figma" place="top">
                    Figma
                  </Tooltip>
                </div>
                <h1 className="mb-3 mt-6 text-slate-300">Development Tools</h1>
                <div className="flex flex-grow flex-wrap gap-4">
                  {dataIcon.map((data) => (
                    <div key={data.id}>
                      <Icon
                        icon={data.iconName}
                        className={`${showHoverAccent} text-4xl hover:scale-125 transition`}
                        data-tooltip-id={data.id}
                        data-tooltip-content={data.name}
                      />
                      <Tooltip id={data.id} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-grow flex-wrap mt-10 gap-3 text-xs">
                  <span
                    className={`px-3 py-1 rounded-full ${showAccent} text-primary font-bold`}
                  >
                    Problem Solver
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${showAccent} text-primary font-bold`}
                  >
                    Teamwork
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${showAccent} text-primary font-bold`}
                  >
                    Adaptability
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${showAccent} text-primary font-bold`}
                  >
                    Creative
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${showAccent} text-primary font-bold`}
                  >
                    Flexibility
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${showAccent} text-primary font-bold`}
                  >
                    Time Management
                  </span>
                </div>
              </div>
            )}

            {profile === 2 && (
              <ol
                className={`border-l text-sm ${showBorderAccent} border-dashed pl-4`}
              >
                <li>
                  <div className="flex flex-start items-center">
                    <div
                      className={`${showAccent} w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-2`}
                    ></div>
                    <h4 className="-mt-2 text-slate-300">
                      Web Designer / Analyst | Personiv Manila
                    </h4>
                  </div>
                  <div className="ml-6 mb-6 mt-1">
                    <p className={`${showTextAccent} text-sm`}>
                      April 2022 - February 2024
                    </p>
                    <p className="text-sm mt-3">
                      Crafting visually stunning and highly functional websites
                      tailored to meet the unique needs of businesses using Thyv
                      CMS.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-start items-center">
                    <div
                      className={`${showAccent}  w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-2`}
                    ></div>
                    <h4 className="-mt-2 text-slate-300">
                      Graphics Designer | Amare Apparel
                    </h4>
                  </div>
                  <div className="ml-6 mb-6 mt-1">
                    <p className={`${showTextAccent} text-sm`}>
                      September 2020 - November 2021
                    </p>
                    <p className="text-sm mt-3">
                      Creating Design for T-Shirt, Tarpaulin and Other Digital
                      Prints. Also Maintain and Troubleshoot Printers.
                    </p>
                  </div>
                </li>
                <li>
                  <div
                    className={`bg-tertiary border-2 ${showBorderAccent} w-4 h-4 flex items-center justify-center rounded-full -ml-6 mr-7 -mt-2`}
                  ></div>
                </li>
              </ol>
            )}

            {profile === 3 && (
              <div className="text-sm flex flex-col gap-8">
                <div className="flex gap-2 flex-col">
                  <h4 className="-mt-2 text-slate-300">
                    Bachelor of Science In Information Technology <br />{" "}
                    (Mindoro State University)
                  </h4>
                  <p className={`${showTextAccent} text-sm`}>2015 - 2020</p>
                </div>
                <div className="flex gap-2 flex-col">
                  <h4 className="-mt-2 text-slate-300">
                    Monthly Design Contest | Personiv Manila
                    <br /> (1st Place)
                  </h4>
                  <p className={`${showTextAccent} text-sm`}>January 2023</p>
                </div>
              </div>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
