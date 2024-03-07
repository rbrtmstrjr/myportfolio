import { useState } from "react";
import { Icon } from "@iconify/react";

let profileData = [
  {
    id: 1,
    title: "Skills",
  },
  { id: 2, title: "Experience" },
  { id: 3, title: "Education | Certifications" },
];

const dataIcon = [
  {
    id: 1,
    iconName: "icomoon-free:html-five",
  },
  {
    id: 2,
    iconName: "uiw:css3",
  },
  {
    id: 3,
    iconName: "cib:javascript",
  },
  {
    id: 4,
    iconName: "teenyicons:react-solid",
  },
  {
    id: 5,
    iconName: "file-icons:tailwind",
  },
  {
    id: 6,
    iconName: "simple-icons:webflow",
  },
  {
    id: 7,
    iconName: "bi:github",
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
      <section className="flex bg-secondary" id="id4">
        <div className="w-1/2 pl-20 py-32 overflow-hidden">
          <div className="bg-aboutme bg-cover bg-center grayscale opacity-80 hover:opacity-100 transition duration-500 hover:grayscale-0 h-full w-full rounded-xl"></div>
        </div>
        <div className="w-1/2  flex flex-col gap-4 py-32 pr-20 pl-8">
          <h2 className="text-5xl font-primary text-slate-300">About Me</h2>
          <p className="text-white/50 text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered <a href="#">alteration</a> in some form,
            by injected humour, or randomised words which dont look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum,
          </p>
          <ul className="flex gap-8 text-slate-300">
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
          <ul className="text-white/50 p-10 bg-tertiary rounded-xl mt-6">
            {profile === 1 && (
              <div className="text-sm">
                <h1 className="mb-3 text-slate-300">Design Tools</h1>
                <div className="flex flex-wrap gap-4 text-4xl">
                  <Icon
                    icon="simple-icons:adobephotoshop"
                    className={`${showHoverAccent} hover:scale-125 transition`}
                  />
                  <Icon
                    icon="simple-icons:adobeillustrator"
                    className={`${showHoverAccent} hover:scale-125 transition`}
                  />
                  <Icon
                    icon="gg:figma"
                    className={`${showHoverAccent} hover:scale-125 transition`}
                  />
                </div>
                <h1 className="mb-3 mt-6 text-slate-300">Development Tools</h1>
                <div className="flex flex-wrap gap-4 text-4xl">
                  {dataIcon.map((data) => (
                    <Icon
                      icon={data.iconName}
                      className={`${showHoverAccent} hover:scale-125 transition`}
                      key={data.id}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap mt-10 gap-2 text-xs">
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
