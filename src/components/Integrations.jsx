import React from "react";
import FaEpic from "../logo/epic-logo.png";
import Cerner from "../logo/Cerner-logo.png";
import Allscripts from "../logo/allscripts-logo.png";

const Integration = () => {
  return (
    <section
      id="integration"
      className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Integration with Existing Systems
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Seamlessly connects with your EHR, lab systems, and patient portals.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {/* Epic Logo */}
          <div className="flex justify-center">
            <img src={FaEpic} alt="Epic Systems" className="h-12" />
          </div>

          {/* Cerner Logo */}
          <div className="flex justify-center">
            <img src={Cerner} alt="Cerner" className="h-12" />
          </div>

          {/* Allscripts Logo */}
          <div className="flex justify-center">
            <img src={Allscripts} alt="Allscripts" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
