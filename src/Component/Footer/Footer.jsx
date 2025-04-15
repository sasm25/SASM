import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1025] text-white  relative border-t-[1px] py-8 border-slate-700	">
      {/* <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      /> */}
      <div className="flex flex-row max-md:justify-between justify-around mx-5 py-6">
        <div className="flex flex-col ml-3">
          <h4 className="text-2xl max-md:text-xl font-bold">Welcome</h4>
          <p className=" max-md:text-sm  mt-2  text-lg max-md:w-[90%] text-emerald-200">
            National Seminar on <br />
            Smart and Sustainable Manufacturing:<br/> Industry 4.0 and Beyond
          </p>
        </div>
        <div className="flex flex-col mr-4">
          <h4 className="text-2xl max-md:text-xl font-bold">Connect us on</h4>
          <div className="flex flex-row gap-2 mt-2 max-md:text-md text-xl text-gray-200 ">
            <Link
              to="https://www.instagram.com/pies_bitsindri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="underline hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/production-and-industrial-engineering-society/"
              className="underline hover:text-white"
            >
              <FaLinkedin />
            </Link>
          </div>{" "}
          <h1 className=" text-lg capitalize mt-6 max-md:text-base">
            All rights reserved @
            <strong>
              <Link
                to="https://www.bitsindri.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="max-md:text-base"
              >
                BIT Sindri
              </Link>
            </strong>
          </h1>
        </div>
      </div>
    </footer>
  );
}
