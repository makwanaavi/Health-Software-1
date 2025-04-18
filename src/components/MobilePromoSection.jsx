import { FaApple, FaAndroid } from 'react-icons/fa';

const MobilePromoSection = () => {
  return (
    <section id="mobile-promo" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Monitor Patients on-the-Go</h2>
        <p className="text-lg text-gray-600 mb-12">
          Access patient data, monitor health metrics, and provide care anytime, anywhere with our mobile app.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* iOS App Screenshot */}
          <div className="w-full md:w-1/2">
           
            <div className="mt-4 flex justify-center gap-4">
              <a href="#" className="flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-300">
                <FaApple className="mr-2 text-xl" />
                <span>Download on the App Store</span>
              </a>
            </div>
          </div>

          {/* Android App Screenshot */}
          <div className="w-full md:w-1/2">
           
            <div className="mt-4 flex justify-center gap-4">
              <a href="#" className="flex items-center justify-center bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                <FaAndroid className="mr-2 text-xl" />
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features:</h3>
          <ul className="text-lg text-gray-600">
            <li className="mb-4"> Real-time patient monitoring.</li>
            <li className="mb-4">Instant health metrics updates.</li>
            <li className="mb-4"> Quick access to patient history and reports.</li>
            <li className="mb-4"> Alerts for critical health conditions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobilePromoSection;
