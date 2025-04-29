import { FaClinicMedical, FaUserMd, FaStethoscope, FaBrain, FaFlask } from 'react-icons/fa';

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Targeted Use Cases & Industries</h2>
        <p className="text-lg text-gray-600 mb-12">Our solution is designed to benefit a wide range of healthcare verticals.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Clinics & Hospitals */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
            <FaClinicMedical className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Clinics & Hospitals</h3>
            <p className="text-gray-600">
              Streamline patient management, improve care coordination, and boost operational efficiency.
            </p>
          </div>

          {/* Independent Practitioners */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
            <FaUserMd className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Independent Practitioners</h3>
            <p className="text-gray-600">
              Enhance practice management, optimize patient scheduling, and provide better care with less effort.
            </p>
          </div>

          {/* Senior Care */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
            <FaStethoscope className="text-4xl text-yellow-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Senior Care</h3>
            <p className="text-gray-600">
              Improve the quality of life for elderly patients through proactive health monitoring and AI support.
            </p>
          </div>

          {/* Lab Diagnostics */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
            <FaFlask className="text-4xl text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Lab Diagnostics</h3>
            <p className="text-gray-600">
              Automate test results analysis, enhance reporting accuracy, and provide quick insights for diagnosis.
            </p>
          </div>

          {/* Mental Health (AI Therapy Bots) */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
            <FaBrain className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mental Health</h3>
            <p className="text-gray-600">
              Provide personalized therapy and support through AI-driven chatbots and mental health tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
