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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Epic Logo */}
          <div className="flex justify-center">
            <img
              src="epic-logo.png" // Add the actual path or URL of the Epic logo
              alt="Epic Systems"
              className="h-12"
            />
          </div>

          {/* Cerner Logo */}
          <div className="flex justify-center">
            <img
              src="Cerner-logo.png"
              alt="Cerner"
              className="h-12"
            />
          </div>

          {/* Allscripts Logo */}
          <div className="flex justify-center">
            <img
              src="allscripts-logo.png" // Add the actual path or URL of the Allscripts logo
              alt="Allscripts"
              className="h-12"
            />
          </div>

          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
};

export default Integration;
