import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "International Conference";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 150); // Adjust speed by changing the interval

    return () => clearInterval(interval);
  }, []);
  const themes = [
    "Additive manufacturing",
    "AI: Manufacturing applications",
    "Autonomous production",
    "Analytics and big data",
    "Blockchain",
    "Cloud computing",
    "Cyber physical systems",
    "Cyber security in manufacturing",
    "Digital twins",
    "Economics & business models",
    "Ergonomics and social factors",
    "Human-machine interaction",
    "Industrial internet of things",
    "Smart and digital supply chains",
    "Maintenance and lifecycle management",
    "Manufacturing Technologies",
    "Product & Process Design",
    "Production systems and supply chain",
    "Project and risk management",
    "Quality management & assurance",
    "Robotics",
    "Occupational health & safety",
    "Smart Operators",
    "Sustainability-oriented production",
  ];
  return (
    <main className="/* bg-[url('/images/img2..jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center  h-screen">
        <div className="text-gray-100 w-[75%] text-center mx-auto leading-loose">
          <h4 className="xl:text-4xl md:text-5xl text-2xl font-semibold tracking-wide text-gray-200 leading-[50px]">
            <span className="xl:text-7xl text-4xl metallic-text text-white text-shadow-lg">
              {text}
            </span>
            <br /> Smart and Sustainable Manufacturing: Industry 4.0 & Beyond
          </h4>
          <h5 className="mt-8 text-lg font-semibold text-gray-300 text-shadow-sm italic">
            Tentative Date: March 07-09, 2025
          </h5>
          <br />
          <span className="text-xl w-1/2 text-gray-400">
            <strong>Venue: </strong> Production and Industrial Engineering
            Department
            <br />
            <strong>BIT Sindri </strong> (under DHTE, Govt. of Jharkhand)
          </span>
        </div>
        {/* <div className="bg-green-300 w-[40%] mr-4">
					<img
						src="https://img.freepik.com/free-vector/speaker-communicating-with-media-workers-press-conference-flat-illustration_1284-65933.jpg?w=996&t=st=1724924864~exp=1724925464~hmac=40a4e13f2153ebd8cce76196fa10c3cc1503660ce3e8ad6b699bae1a33c1fecd"
						width="1500"
						alt="Conference image"
					/>
				</div> */}
      </div>
      <div className="relative">
        <div className="w-full bg-black h-full py-6 absolute opacity-25"></div>
        <div className="w-[75%] relative mx-auto text-white z-10 py-10 ">
          <div
            data-aos="fade-up"
            // data-aos-anchor-placaement="top-center"
          >
            <h2
              className="text-center text-5xl font-serif font-semibold text-[#98DED9]"
              data-aos="zoom-in"
            >
              About the Conference
            </h2>
            <p className="text-lg text-gray-400 mt-10 leading-relaxed text-justify">
              Dive into the future of manufacturing at BIT Sindri, Dhanbad,
              where the Department of Production & Industrial Engineering
              invites you to an innovative international conference on Industry
              4.0. Over three dynamic days, engage with top experts, scholars,
              and industry leaders through interactive sessions, cutting-edge
              presentations, and collaborative workshops, all aimed at advancing
              India’s manufacturing sector. Experience a vibrant exchange of
              ideas and contribute to shaping the digitalization of
              manufacturing in the eastern region. With proceedings published on
              Scopus and Springer, your work will gain prestigious visibility.
              This conference aims to unite prominent researchers and
              practitioners globally for three days of presentations,
              discussions, and engagement. The discussions at this conference
              are anticipated to offer direction for the digitalization of
              manufacturing sectors in the eastern region of the nation.
              <br />
              <strong className="text-gray-300 text-center">
                The conference will have its proceedings published with
                Scopus-indexed journals or as book chapters.
              </strong>
            </p>
          </div>
          <div data-aos="fade-up">
            <h2
              className="text-center text-4xl mt-12 font-semibold uppercase font-serif text-[#98DED9]"
              data-aos="zoom-in"
            >
              Theme of the Conference
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-6 lg:mx-12">
              {themes.map((theme, index) => (
                <div
                  key={index}
                  className="bg-blue-950 bg-opacity-25 px-2.5 py-1 rounded-lg shadow-lg flex justify-center flex-col items-center"
                  data-aos="zoom-in"
                  data-aos-duration={`${index}00`}
                >
                  <p className="text-lg text-gray-200 text-center capitalize">{theme}</p>
                </div>
              ))}
            </div>

            <div
              className="flex justify-center mt-8"
              data-aos="zoom-in"
              data-aos-duration="2400"
            >
              <div className="bg-blue-950 bg-opacity-25 px-2.5 py-1 rounded-lg shadow-lg w-full sm:w-auto">
                {/* <div className="text-4xl text-[#98DED9] mb-4 text-center">
									<i className="fas fa-lightbulb"></i>
								</div> */}
                <p className="text-lg text-gray-200 text-center">
                  Innovative education models for smart and sustainable
                  production systems
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10  justify-between">
            <div className="">
              <h2
                className="text-4xl font-serif my-4 text-center font-semibold text-[#98DED9]"
                data-aos="zoom-in"
              >
                BIT SINDRI : A LEGACY OF ACHIEVEMENTS
              </h2>
              <div className="w-full mt-10 flex tracking-tighter max-lg:flex-col flex-row ">
                <img
                  src="images/Bit Pic.jpg"
                  alt="image1"
                  className="rounded-md aspect-auto w-full sm:w-[45%]"
                  data-aos="fade-up"
                />
                <div className="flex flex-col w-full " data-aos="fade-left">
                  <p
                    className="text-md text-gray-400 sm:ml-10 leading-normal tracking-normal  text-justify  w-full"
                    data-aos="fade-up"
                  >
                    Established in 1949, BIT Sindri boasts a comprehensive
                    infrastructure spread across more than 500 acres and
                    comprises ten academic departments. As one of India&apos;s
                    first government technical colleges, it is acclaimed for its
                    distinguished faculty and the exceptional quality of its
                    graduate and undergraduate programs.
                  </p>

                  <p
                    className="text-md text-gray-400 sm:ml-10 leading-normal tracking-normal  text-justify  w-full"
                    data-aos="fade-up"
                  >
                    <br />
                    Over the past 50 years, BIT Sindri has produced
                    approximately 34,000 highly qualified engineers who
                    contribute significantly to various technological and broad
                    societal disciplines. The institute maintains a robust
                    alumni network and has gained recognition for its innovative
                    short-term courses developed in collaboration with ISRO and
                    NASSCOM. Notably, in the new 2024-28 batch, there is a
                    significant increase of 322 seats in the B. Tech program,
                    along with 36 seats in the M. Tech program.
                  </p>
                  <p
                    className="text-md text-gray-400 sm:ml-10 leading-normal tracking-normal  text-justify  w-full"
                    data-aos="fade-up"
                  >
                    <br />
                    Originally affiliated with Vinoba Bhave University until
                    2017, BIT Sindri is now affiliated with Jharkhand University
                    of Technology (JUT), Ranchi, established in 2018 by former
                    Indian President Shri Pranab Mukherjee. All courses are
                    approved by the All India Council of Technical Education
                    (AICTE). This expansion aims to further the Institute&apos;s
                    mission of producing top-tier engineers who can lead
                    technological advancements in an independent India.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2
                className="text-4xl font-serif my-4 text-center font-semibold text-[#98DED9] "
                data-aos="zoom-in"
              >
                DEPARTMENT OF PRODUCTION ENGINEERING
              </h2>
              <div className="w-full mt-10  flex flex-row max-lg:flex-col ">
                <div className="w-full mt-10 mr-6 flex tracking-tighter flex-col  ">
                  <p
                    className="text-md text-gray-400 sm:mr-10 leading-normal tracking-normal text-justify w-full"
                    data-aos="fade-left"
                  >
                    The Department of Production and Industrial Engineering
                    serves as a dynamic hub in our institution, dedicated to
                    propelling students towards the forefront of advancements in
                    industrial management. Through a series of engaging
                    technical events, Department equips students with the
                    knowledge and expertise required to navigate the
                    ever-evolving landscape of manufacturing.
                  </p>
                  <p
                    className="text-md text-gray-400 sm:mr-10 leading-normal tracking-normal  text-justify w-full"
                    data-aos="fade-left"
                  >
                    <br />
                    We actively bridge the gap between academia and industry by
                    hosting webinars featuring renowned speakers. These experts,
                    hailing from prestigious institutions like the University of
                    Windsor, University of Sherbrooke, IITs, and NITs, as well
                    as leading organizations, share their insights on topics
                    like Industry 4.0, IoT, Additive Manufacturing, Robotics &
                    Automation, and Competitive Manufacturing. This exposure to
                    industry leaders allows students to gain practical
                    perspectives and prepare for successful careers.
                  </p>
                </div>
                <img
                  src="images/Dept Pic.jpg"
                  alt="image1"
                  className="rounded-md aspect-auto w-full sm:w-[45%] "
                  data-aos="fade-right"
                />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </main>
  );
}
