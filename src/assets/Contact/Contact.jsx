import { useState } from "react";

export default function Contact() {
  const [mapKey, setMapKey] = useState(0);

  const refreshMap = () => {
    setMapKey((prevKey) => prevKey + 1);
  };

  return (
    <main className="py-20 pt-32">
      <div className="bg-black bg-opacity-15 p-6 rounded-lg shadow-lg w-[90%] md:w-[65%] mx-auto ">
      <div className="max-w-4xl mx-auto p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-emerald-300 text-center mb-8">
          Contact Us
        </h1>
        <div className="text-gray-200 text-lg mb-6 relative">
          <div className="text-lg text-right absolute right-0">
            <p className="text-gray-200 font-semibold">
              Email:{" "}
              <a
                href="mailto:prakashkr.prod@bitsindri.ac.in"
                className="text-blue-600 hover:underline"
              >
                sasm25@bitsindri.ac.in
              </a>
            </p>
            <p className="text-gray-200 font-semibold">
              Call:{" "}
              <a
                href="tel:+910326 235 0495

"
                className="text-blue-500 hover:underline"
              >
                (+91) 0326 235 0495
              </a>
            </p>
          </div>
          <p className="mb-2 text-xl">
            <strong>Prof. Prakash Kumar</strong>
          </p>
          <p className="mb-2">Department of Production Engineering</p>
          <p className="mb-2">BIT Sindri</p>
        </div>
        {/*, Sindri, Jharkhand 828120 */}
        <div className="text-lg mb-6">
          <p className="text-gray-200 font-semibold">Address :</p>
          <p className="text-gray-200">
            Dept. Production & Industrial Engineering, BIT,
          </p>
          <p className="text-gray-200">Sindri, Dhanbad, Jharkhand 828123</p>
        </div>
        {/* Map Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-emerald-300">
              Our Location
            </h2>
            <button
              onClick={refreshMap}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Refresh Map
            </button>
          </div>
          <iframe
            key={mapKey}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5294099583034!2d86.47200717533306!3d23.657018378734207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f696ebe373f4b7%3A0x5e8136c2ae77232e!2sDepartment%20of%20Production%20%26%20Industrial%20Engineering!5e0!3m2!1sen!2sin!4v1726245893277!5m2!1sen!2sin"
            // src="https://maps.google.com/maps?q=BIT%20Sindri&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
    </main>
  );
}

//<iframe src= width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
