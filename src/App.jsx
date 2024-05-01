import { Icon } from "@iconify/react";
import Nav from "./components/Navigation";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

//styles
import "swiper/css";
import "swiper/css/pagination";
import Aos from "aos";

const socialMedia = [
  {
    id: 1,
    icon: "bi:github",
    url: "https://github.com/rbrtmstrjr",
  },
  {
    id: 2,
    icon: "bi:facebook",
    url: "https://www.facebook.com/rbrtmstrjr09",
  },
  {
    id: 3,
    icon: "devicon-plain:linkedin",
    url: "https://www.linkedin.com/in/robert-maestro-64a7981a0/",
  },
  {
    id: 4,
    icon: "teenyicons:instagram-solid",
    url: "https://www.instagram.com/rajon_ix/",
  },
];

const accent = [
  {
    id: 1,
    bgColor: "bg-accent",
    textColor: "text-accent",
    hoverTextColor: "hover:text-accent",
    hoverBgColor: "hover:bg-accent",
    borderColor: "border-accent",
    hoverBorderColor: "hover:border-accent",
    light: "bg-accent10",
  },
  {
    id: 2,
    bgColor: "bg-accent1",
    textColor: "text-accent1",
    hoverTextColor: "hover:text-accent1",
    hoverBgColor: "hover:bg-accent1",
    borderColor: "border-accent1",
    hoverBorderColor: "hover:border-accent1",
    light: "bg-accent11",
  },
  {
    id: 3,
    bgColor: "bg-accent2",
    textColor: "text-accent2",
    hoverTextColor: "hover:text-accent2",
    hoverBgColor: "hover:bg-accent2",
    borderColor: "border-accent2",
    hoverBorderColor: "hover:border-accent2",
    light: "bg-accent22",
  },
  {
    id: 4,
    bgColor: "bg-accent3",
    textColor: "text-accent3",
    hoverTextColor: "hover:text-accent3",
    hoverBgColor: "hover:bg-accent3",
    borderColor: "border-accent3",
    hoverBorderColor: "hover:border-accent3",
    light: "bg-accent33",
  },
  {
    id: 5,
    bgColor: "bg-accent4",
    textColor: "text-accent4",
    hoverTextColor: "hover:text-accent4",
    hoverBgColor: "hover:bg-accent4",
    borderColor: "border-accent4",
    hoverBorderColor: "hover:border-accent4",
    light: "bg-accent44",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Dikit Marichris",
    position: "Associate Process Manager | Personiv Manila",
    feedback: `Robert is a good team member, he is very approachable and his creativity can solve business design issue. A very skilled and cool one!`,
    imgUrl: "./images/emcy1.png",
  },
  {
    id: 2,
    name: "Floria Joseph",
    position: "Web Designer | Personiv Manila",
    feedback: `I work with Rob, he is very creative when it comes to design and layouts and he is one of the most approachable when I need help at work.`,
    imgUrl: "./images/joseph_1.png",
  },
  {
    id: 3,
    name: "Isla Edmark",
    position: "Analyst | Personiv Manila",
    feedback: `His talent for crafting visually stunning web designs is impressive! He is creative and reliable for giving design quality tips and solutions.`,
    imgUrl: "./images/edmark_3.png",
  },
  {
    id: 4,
    name: "Relova Larry",
    position: "Web Designer | Personiv Manila",
    feedback: `Robert is so approachable. Every time I have questions, instead of asking my teammates, I directly ask him for guidance. He’s so good at designing things from website to graphics to branding designs. I believe his skills can help small/large businesses known in digital marketing. Kudos to him!`,
    imgUrl: "./images/larry_4.png",
  },
];

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [counterOn, setCounterOn] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [showContact, setShowContact] = useState(true);
  const [showBgAccent, setShowAccent] = useState("bg-accent");
  const [showTextAccent, setShowTextAccent] = useState("text-accent");
  const [showHoverTextAccent, setShowHoverTextAccent] =
    useState("hover:text-accent");
  const [showHoverBgAccent, setShowHoverBgAccent] = useState("hover:bg-accent");
  const [showBorderAccent, setShowBorderAccent] = useState("border-accent");
  const [showLightAccent, setShowLightAccent] = useState("bg-accent10");
  const [showHoverBorderAccent, setShowHoverBorderAccent] = useState(
    "hover:border-accent"
  );

  const [showAccentTab, setShowAccentTab] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSectionEnter = (section) => {
    setActiveSection(section);
  };

  const changeAccent = (
    bgColor,
    textColor,
    hoverText,
    hoverBg,
    border,
    hoverBorder,
    light
  ) => {
    setShowAccent(bgColor);
    setShowTextAccent(textColor);
    setShowHoverTextAccent(hoverText);
    setShowHoverBgAccent(hoverBg);
    setShowBorderAccent(border);
    setShowHoverBorderAccent(hoverBorder);
    setShowLightAccent(light);

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
                    acc.borderColor,
                    acc.hoverBorderColor,
                    acc.light
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

      <nav className="flex justify-between px-4 lg:px-20 pt-4" id="home">
        <h1 className={`${showTextAccent} font-primary text-lg`}>RM</h1>
        <div
          className={`text-darkGray hover:cursor-pointer flex items-center gap-6 text-xs`}
        >
          <a href="./images/maestro_robert_resume.pdf" target="_blank">
            <h1 className={`select-none ${showHoverTextAccent}`}>Resume</h1>
          </a>
          <h1
            className={`select-none ${showHoverTextAccent}`}
            onMouseEnter={() => setShowAccentTab(!showAccentTab)}
          >
            Themes
          </h1>
        </div>
      </nav>

      <Nav
        accentHoverBgColor={showHoverBgAccent}
        activeSection={activeSection}
        showTextAccent={showTextAccent}
      />
      <ScrollTrigger onEnter={() => handleSectionEnter("home")}>
        <Home
          accentBgColor={showBgAccent}
          accentTextColor={showTextAccent}
          accentHoverTextColor={showHoverTextAccent}
          socialMedia={socialMedia}
          id="home"
        />
      </ScrollTrigger>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section
          className="px-4 xl:px-20 py-12 xl:py-20 bg-secondary/10 filter backdrop-blur-md"
          data-aos="fade-right"
        >
          {counterOn && (
            <div className="flex flex-col xl:flex-row gap-16 xl:gap-16">
              <div className="w-full xl:w-1/4 flex items-center flex-col">
                <div className="flex flex-grow items-center gap-4">
                  <Icon
                    icon="iconoir:computer"
                    className={`${showTextAccent} text-4xl`}
                  />

                  <h2 className="font-primary text-3xl xl:text-4xl text-slate-300">
                    <CountUp
                      start={0}
                      end={150}
                      duration={1}
                      delay={0}
                    ></CountUp>{" "}
                    +
                  </h2>
                </div>
                <p className="text-darkGray text-sm mt-2 leading-6">
                  Different Website Created
                </p>
              </div>
              <div className="w-full xl:w-1/4 flex items-center flex-col">
                <div className="flex items-center  gap-4">
                  <Icon
                    icon="mynaui:edit-one"
                    className={`${showTextAccent} text-4xl`}
                  />
                  <h2 className="font-primary text-3xl xl:text-4xl text-slate-300">
                    <CountUp
                      start={0}
                      end={100}
                      duration={1}
                      delay={0}
                    ></CountUp>{" "}
                    +
                  </h2>
                </div>
                <p className="text-darkGray text-sm mt-2 leading-6">
                  Existing Website Redesigned
                </p>
              </div>
              <div className="w-full xl:w-1/4 flex items-center flex-col">
                <div className="flex items-center gap-4">
                  <Icon
                    icon="iconamoon:screen-full"
                    className={`${showTextAccent} text-4xl`}
                  />
                  <h2 className="font-primary text-3xl xl:text-4xl text-slate-300">
                    <CountUp start={0} end={2} duration={1}></CountUp> Years
                  </h2>
                </div>
                <p className="text-darkGray text-sm mt-2 leading-6">
                  Solid Web Design Experience
                </p>
              </div>
              <div className="w-full xl:w-1/4 flex items-center flex-col">
                <div className="flex items-center gap-4">
                  <Icon
                    icon="ph:layout-duotone"
                    className={`${showTextAccent} text-4xl`}
                  />
                  <h2 className="font-primary text-3xl xl:text-4xl text-slate-300">
                    <CountUp start={0} end={1} duration={1}></CountUp> Year
                  </h2>
                </div>
                <p className="text-darkGray text-sm mt-2 leading-6">
                  Graphic Design Experience
                </p>
              </div>
            </div>
          )}
        </section>
      </ScrollTrigger>

      <Gallery />

      <ScrollTrigger onEnter={() => handleSectionEnter("services")}>
        <Services
          showTextAccent={showTextAccent}
          showHoverAccent={showHoverTextAccent}
          showBgHoverAccent={showHoverBgAccent}
          showBgAccent={showBgAccent}
          showLightAccent={showLightAccent}
        />
      </ScrollTrigger>

      <ScrollTrigger onEnter={() => handleSectionEnter("about")}>
        <AboutMe
          showAccent={showBgAccent}
          showTextAccent={showTextAccent}
          showHoverAccent={showHoverTextAccent}
          showBorderAccent={showBorderAccent}
        />
      </ScrollTrigger>

      <ScrollTrigger onEnter={() => handleSectionEnter("testimonials")}>
        <section className="px-4 xl:px-20 py-12 xl:py-24" id="testimonials">
          <label className="flex justify-center items-center outline-title leading-none tracking-expand text-5xl xl:text-8xl opacity-20 font-primary ml-2 z-20">
            FEEDBACK
          </label>
          <h2
            className="text-3xl xl:text-5xl font-primary -mt-5 xl:-mt-12 text-slate-300 text-center mb-8"
            data-aos="fade-down"
          >
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
                    <div className="w-full xl:w-1/2 xl:-mt-0 -mt-6 z-0 xl:z-50">
                      <div className="-mr-0 xl:-mr-12 shadow-xl border border-white/20 rounded-2xl backdrop-blur-2xl bg-white/10 p-6 xl:p-10 flex flex-col gap-4">
                        <Icon
                          icon="ph:quotes-fill"
                          className={`-mt-0 xl:-mt-24 ${showTextAccent} text-9xl`}
                        />
                        <p className="text-sm leading-6">⭐⭐⭐⭐⭐</p>
                        <p className="text-darkGray text-sm leading-6">
                          {data.feedback}
                        </p>
                        <div>
                          <h1 className="text-2xl font-primary text-slate-300">
                            {data.name}
                          </h1>
                          <p className="text-darkGray text-sm leading-6">
                            {data.position}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2 rounded-2xl">
                      <div
                        className={`w-full h-full ${showBgAccent} backdrop-blur-md bg-opacity-70 rounded-2xl overflow-hidden`}
                      >
                        <img
                          src={data.imgUrl}
                          loading="lazy"
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
      </ScrollTrigger>

      <ScrollTrigger onEnter={() => handleSectionEnter("contact")}>
        <section
          className="flex justify-center bg-secondary/10 items-center px-6 py-12 md:px-20 md:py-24 "
          id="contact"
        >
          <div className="w-full max-w-screen-2xl">
            <div className="flex flex-col md:flex-row">
              <div
                className="w-full md:w-3/5 flex flex-col gap-4 pr-0 md:pr-12"
                data-aos="fade-right"
              >
                <label className="outline-title leading-none tracking-expand text-5xl xl:text-8xl opacity-20 font-primary z-20">
                  CONNECT
                </label>
                <h2 className="text-3xl xl:text-5xl font-primary -mt-10 xl:-mt-12 text-slate-300">
                  Get in Touch
                </h2>
                <p className="text-darkGray text-sm leading-6">
                  Thank you for taking the time to explore my portfolio! If you
                  have any inquiries, collaboration proposals, or simply wish to
                  connect, I would love to hear from you. Please don't hesitate
                  to reach out. I'm eager to connect with you.
                </p>
                <div className="flex gap-2">
                  <div
                    className={`w-10 rounded-full p-1 ${showBgAccent}`}
                  ></div>
                  <div
                    className={`w-4 rounded-full p-1 bg-opacity-60 ${showBgAccent}`}
                  ></div>
                  <div
                    className={`w-2 rounded-full p-1  bg-opacity-40 ${showBgAccent}`}
                  ></div>
                </div>

                <div className="flex items-center mt-6">
                  <Icon
                    icon="mage:email"
                    className={`${showTextAccent} text-3xl`}
                  />
                  <div className="ml-6">
                    <h3 className="text-darkGray font-secondary">
                      robertmaestro09@gmail.com
                    </h3>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    icon="fluent:location-12-regular"
                    className={`${showTextAccent} text-3xl`}
                  />
                  <div className="ml-6">
                    <h3 className="text-darkGray font-secondary">
                      Mansalay, Oriental Mindoro
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-2/5 mt-8 md:mt-0 bg-secondary/20  rounded-2xl p-8 md:p-12 text-gray-400"
                data-aos="fade-left"
              >
                <div className="flex justify-center items-center w-full h-full">
                  {showContact ? (
                    <form
                      onSubmit={sendEmail}
                      className="w-full flex flex-col gap-6"
                    >
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
                    <p className="leading-6 w-full h-full border">
                      Thanks for reaching me out. I will response as soon as
                      possible!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>

      <footer className="px-6 py-12 md:px-32 md:py-24">
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-3xl xl:text-5xl font-primary text-slate-300">
            Want to know More?
          </h2>
          <div className="flex flex-col justify-center items-center gap-4">
            <a
              href="./images/maestro_robert_resume.pdf"
              target="_blank"
              className={`${showBgAccent} hover:transition hover:duration-300 hover:scale-110 px-5 py-3 text-primary rounded-lg`}
            >
              Download Resume
            </a>
            <p className="text-white mx-2">or visit</p>
            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  key={social.id}
                >
                  <Icon
                    icon={social.icon}
                    className={`text-darkGray text-4xl ${showHoverTextAccent} hover:scale-125 transition`}
                    key={social.id}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-slate-300 font-bold">
              Robert Maestro Jr. | Portfolio 2024
            </h3>
            <p className="text-sm text-darkGray leading-6">
              Made With Pure Hardwork And Love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
