<<<<<<< HEAD
import React from "react";
import FaEpic from "../logo/epic-logo.png";
import Cerner from "../logo/Cerner-logo.png";
import Allscripts from "../logo/allscripts-logo.png";

=======
>>>>>>> 80720f209e55d7b6e099d1ddba7af1acb96442a3
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

<<<<<<< HEAD
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {/* Epic Logo */}
          <div className="flex justify-center">
            <img src={FaEpic} alt="Epic Systems" className="h-16" />
=======
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Epic Logo */}
          <div className="flex justify-center">
            <img
              src="epic-logo.png" // Add the actual path or URL of the Epic logo
              alt="Epic Systems"
              className="h-12"
            />
>>>>>>> 80720f209e55d7b6e099d1ddba7af1acb96442a3
          </div>

          {/* Cerner Logo */}
          <div className="flex justify-center">
<<<<<<< HEAD
            <img src={Cerner} alt="Cerner" className="h-12" />
=======
            <img
              src="Cerner-logo.png"
              alt="Cerner"
              className="h-12"
            />
>>>>>>> 80720f209e55d7b6e099d1ddba7af1acb96442a3
          </div>

          {/* Allscripts Logo */}
          <div className="flex justify-center">
<<<<<<< HEAD
            <img src={Allscripts} alt="Allscripts" className="h-12" />
          </div>
=======
            <img
              src="allscripts-logo.png" // Add the actual path or URL of the Allscripts logo
              alt="Allscripts"
              className="h-12"
            />
          </div>

          {/* Add more logos as needed */}
>>>>>>> 80720f209e55d7b6e099d1ddba7af1acb96442a3
        </div>
      </div>
    </section>
  );
};

export default Integration;
