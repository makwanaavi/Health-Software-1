import { FiActivity, FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight mb-4">
            Transforming Healthcare with AI Intelligence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empower your practice with smarter diagnostics, predictive analytics, and personalized patient care.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg hover:shadow-xl flex items-center justify-center">
              Book a Demo <FiChevronRight className="ml-2" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium flex items-center justify-center">
              See It in Action
            </button>
          </div>
        </div>
        
        <div 
          className="relative"
        >   
          <div className="bg-white p-4 rounded-xl shadow-2xl transform hover:scale-[1.01] transition duration-300">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg overflow-hidden h-64 md:h-80 flex items-center justify-center">
              <div className="text-center p-6">
                <FiActivity className="mx-auto text-5xl text-blue-600 mb-4" />
                <p className="text-gray-600 font-medium">AI analyzing healthcare data in real-time</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-indigo-100 rounded-xl w-24 h-24 -z-10"></div>
          <div className="absolute -top-6 -right-6 bg-blue-100 rounded-xl w-24 h-24 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;