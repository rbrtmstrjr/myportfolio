import { Icon } from "@iconify/react";
import Nav from "./components/Navigation";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//styles
import "swiper/css";
import "swiper/css/pagination";

const accent = [
  {
    id: 1,
    bgColor: "bg-accent",
    textColor: "text-accent",
    hoverTextColor: "hover:text-accent",
    hoverBgColor: "hover:bg-accent",
    borderColor: "border-accent",
  },
  {
    id: 2,
    bgColor: "bg-accent1",
    textColor: "text-accent1",
    hoverTextColor: "hover:text-accent1",
    hoverBgColor: "hover:bg-accent1",
    borderColor: "border-accent1",
  },
  {
    id: 3,
    bgColor: "bg-accent2",
    textColor: "text-accent2",
    hoverTextColor: "hover:text-accent2",
    hoverBgColor: "hover:bg-accent2",
    borderColor: "border-accent2",
  },
  {
    id: 4,
    bgColor: "bg-accent3",
    textColor: "text-accent3",
    hoverTextColor: "hover:text-accent3",
    hoverBgColor: "hover:bg-accent3",
    borderColor: "border-accent3",
  },
  {
    id: 5,
    bgColor: "bg-accent4",
    textColor: "text-accent4",
    hoverTextColor: "hover:text-accent4",
    hoverBgColor: "hover:bg-accent4",
    borderColor: "border-accent4",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Dikit Marichris",
    position: "Associate Process Manager",
    feedback: `There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered There are many
    variations of hahaaha`,
    imgUrl: "./images/testi1.jpg",
  },
  {
    id: 2,
    name: "Floria Joseph",
    position: "Web Designer / Analyst",
    feedback: `There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered There are many
    variations of passages of Lorem Ipsum available, but the
    majority have suffered`,
    imgUrl: "./images/testi2.jpg",
  },
  {
    id: 3,
    name: "Isla Edmark",
    position: "Web Designer / Analyst",
    feedback: `There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered There are many
    variations of passages of Lorem Ipsum available, but the
    majority have suffered`,
    imgUrl: "./images/testi3.jpg",
  },
];

export default function App() {
  const [showContact, setShowContact] = useState(true);
  const [showBgAccent, setShowAccent] = useState("bg-accent");
  const [showTextAccent, setShowTextAccent] = useState("text-accent");
  const [showHoverTextAccent, setShowHoverTextAccent] =
    useState("hover:text-accent");
  const [showHoverBgAccent, setShowHoverBgAccent] = useState("hover:bg-accent");
  const [showBorderAccent, setShowBorderAccent] = useState("border-accent");

  const [showAccentTab, setShowAccentTab] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeAccent = (bgColor, textColor, hoverText, hoverBg, border) => {
    setShowAccent(bgColor);
    setShowTextAccent(textColor);
    setShowHoverTextAccent(hoverText);
    setShowHoverBgAccent(hoverBg);
    setShowBorderAccent(border);

    setShowAccentTab(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7evv4mi",
        "template_dm7gee7",
        e.target,
        "6gM0emAOAZeZe2w1J"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowContact(false);
  };
  return (
    <div className="bg-primary overflow-hidden">
      {showAccentTab && (
        <div
          className="z-50 shadow-lg right-4 lg:right-20 top-14 rounded-full fixed h-auto w-60 bg-white/10 backdrop-blur-lg p-3"
          onMouseLeave={() => setShowAccentTab(!showAccentTab)}
        >
          <div className="flex gap-3 justify-center items-center">
            {accent.map((acc) => (
              <div
                className={`h-7 w-7 rounded-full ${
                  acc.bgColor === showBgAccent ? "ring-2 ring-white" : ""
                } ${acc.bgColor} hover:scale-110 hover:cursor-pointer`}
                key={acc.id}
                onClick={() =>
                  changeAccent(
                    acc.bgColor,
                    acc.textColor,
                    acc.hoverTextColor,
                    acc.hoverBgColor,
                    acc.borderColor
                  )
                }
              ></div>
            ))}
          </div>
        </div>
      )}

      {loading && (
        <div className="z-50 transition fixed top-0 left-0 w-full h-full bg-primary/80 flex items-center justify-center">
          <div className="lds-facebook">
            <div className={showBgAccent}></div>
            <div className={showBgAccent}></div>
            <div className={showBgAccent}></div>
          </div>
        </div>
      )}

      <nav className="flex justify-between px-4 lg:px-20 pt-4" id="id1">
        <h1 className={`${showTextAccent} font-primary text-lg`}>RM</h1>
        <div
          className={`text-white/50 ${showHoverTextAccent} hover:cursor-pointer flex items-center gap-2 text-xs`}
          onMouseEnter={() => setShowAccentTab(!showAccentTab)}
        >
          <Icon icon="solar:pallete-2-linear" className="text-xl" />
          <span className="select-none">Themes</span>
        </div>
      </nav>

      <Nav accentHoverBgColor={showHoverBgAccent} />
      <Home
        accentBgColor={showBgAccent}
        accentTextColor={showTextAccent}
        accentHoverTextColor={showHoverTextAccent}
      />
      <section className="px-4 xl:px-20 py-12 xl:py-20 bg-secondary filter backdrop-blur-md">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          <div className="w-full xl:w-1/4 flex items-center flex-col">
            <div className="flex items-center gap-4">
              <Icon
                icon="carbon:split-screen"
                className={`${showTextAccent} text-4xl`}
              />
              <h2 className="font-primary text-3xl xl:text-4xl text-slate-300">
                150 +
              </h2>
            </div>
            <p className="text-white/50 text-sm mt-2">
              Website For Businesses Created
            </p>
          </div>
          <div className="w-full xl:w-1/4 flex items-center flex-col">
            <div className="flex items-center  gap-4">
              <Icon
                icon="mynaui:edit-one"
                className={`${showTextAccent} text-4xl`}
              />
              <h2 className="font-primary text-3xl xl:text-4xl text-slate-300">
                70 +
              </h2>
            </div>
            <p className="text-white text-white/50 text-sm mt-2">
              Existing Website Redesigned
            </p>
          </div>
          <div className="w-full xl:w-1/4 flex items-center flex-col">
            <div className="flex items-center gap-4">
              <Icon
                icon="iconoir:light-bulb"
                className={`${showTextAccent} text-4xl`}
              />
              <h2 className="font-primary text-3xl xl:text-4xl text-slate-300">
                2 Years
              </h2>
            </div>
            <p className="text-white text-white/50 text-sm mt-2">
              Solid Web Design Experience
            </p>
          </div>
          <div className="w-full xl:w-1/4 flex items-center flex-col">
            <div className="flex items-center gap-4">
              <Icon
                icon="teenyicons:grid-layout-outline"
                className={`${showTextAccent} text-3xl`}
              />
              <h2 className="font-primary text-3xl xl:text-4xl text-slate-300">
                1 Year
              </h2>
            </div>
            <p className="text-white text-white/50 text-sm mt-2">
              Graphic Design Experience
            </p>
          </div>
        </div>
      </section>

      <Gallery />
      <Services
        showTextAccent={showTextAccent}
        showHoverAccent={showHoverTextAccent}
        showBgHoverAccent={showHoverBgAccent}
      />
      <AboutMe
        showAccent={showBgAccent}
        showTextAccent={showTextAccent}
        showHoverAccent={showHoverTextAccent}
        showBorderAccent={showBorderAccent}
      />

      <section className="px-4 xl:px-20 py-12 xl:py-24 bg-primary" id="id5">
        <h2 className="text-3xl xl:text-5xl font-primary text-slate-300 text-center mb-8">
          What Others Say?
        </h2>
        <div className="flex mt-12 xl:mt-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            navigation={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bullet-inactive-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-opacity": "0.2",
              "--swiper-pagination-bullet-size": "10px",
            }}
          >
            {testimonials.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col-reverse xl:flex-row items-center">
                  <div className="w-full xl:w-1/2 xl:-mt-0 -mt-6">
                    <div className="-mr-0 xl:-mr-12 shadow-xl rounded-xl backdrop-blur-2xl bg-white/20 p-6 xl:p-10 flex flex-col gap-4">
                      <Icon
                        icon="ph:quotes-fill"
                        className={`-mt-0 xl:-mt-24 ${showTextAccent} text-9xl`}
                      />
                      <p className="text-white/50 text-sm">{data.feedback}</p>
                      <div>
                        <h1 className="text-2xl font-primary text-slate-300">
                          {data.name}
                        </h1>
                        <p className="text-white/50 text-sm">{data.position}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full xl:w-1/2 rounded-2xl">
                    <div
                      className={`w-full h-full ${showBgAccent} bg-opacity-50 rounded-2xl overflow-hidden`}
                    >
                      <img
                        src={data.imgUrl}
                        className="w-full inset-0 object-cover h-full rounded-2xl mix-blend-multiply"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="mt-12">...</div>
          </Swiper>
        </div>
      </section>

      <section
        className="flex justify-center items-center px-6 py-12 md:px-20 md:py-24 bg-primary"
        id="id6"
      >
        <div className="w-full max-w-screen-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/5 flex flex-col gap-4 pr-0 md:pr-12">
              <h1 className="text-slate-300 font-primary text-3xl md:text-5xl">
                Get In Touch!
              </h1>
              <p className="text-gray-400 text-sm leading-6">
                Thank you for exploring my portfolio! If you have any questions,
                collaboration ideas, or just want to connect, Id love to hear
                from you. Here are some various ways to get in touch, Feel free
                to call me or drop me an email. I am excited to connect with
                you.
              </p>
              <div className="flex gap-2">
                <div className={`w-10 rounded-full p-1 ${showBgAccent}`}></div>
                <div
                  className={`w-4 rounded-full p-1 bg-opacity-60 ${showBgAccent}`}
                ></div>
                <div
                  className={`w-2 rounded-full p-1  bg-opacity-40 ${showBgAccent}`}
                ></div>
              </div>
              <div className="flex mt-6 md:mt-12 items-center">
                <Icon
                  icon="carbon:phone"
                  className={`${showTextAccent} text-3xl`}
                />
                <div className="ml-6">
                  <h3 className="text-gray-400 font-secondary">09093538362</h3>
                </div>
              </div>
              <div className="flex items-center">
                <Icon
                  icon="mage:email"
                  className={`${showTextAccent} text-3xl`}
                />
                <div className="ml-6">
                  <h3 className="text-gray-400 font-secondary">
                    Albertmaestro2023@gmail.com
                  </h3>
                </div>
              </div>
              <div className="flex items-center">
                <Icon
                  icon="fluent:location-12-regular"
                  className={`${showTextAccent} text-3xl`}
                />
                <div className="ml-6">
                  <h3 className="text-gray-400 font-secondary">
                    Mansalay, Oriental Mindoro
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 mt-8 md:mt-0 bg-tertiary rounded-lg p-6 md:p-12 text-gray-400">
              {showContact ? (
                <form onSubmit={sendEmail} className="flex flex-col gap-6">
                  <input
                    type="text"
                    name="name"
                    className="px-5 py-3 bg-slate-200 text-sm text-primary rounded-lg w-full"
                    placeholder="Name"
                    required
                  />

                  <input
                    type="email"
                    name="user_email"
                    className="px-5 py-3 bg-slate-200 text-sm text-primary rounded-lg w-full"
                    placeholder="Email"
                    required
                  />

                  <textarea
                    type="text"
                    name="message"
                    className="px-5 py-3 bg-slate-200 text-sm text-primary rounded-lg w-full"
                    placeholder="Message"
                    required
                  />

                  <input
                    type="submit"
                    className={`w-24 text-primary text-sm ${showBgAccent} p-2 rounded-lg cursor-pointer`}
                    value="Send"
                  />
                </form>
              ) : (
                <p>
                  Thanks for reaching me out. I will response as soon as
                  possible!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
