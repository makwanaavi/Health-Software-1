import { useState } from 'react';
import { FiAlertCircle, FiDatabase, FiCalendar, FiHeart } from 'react-icons/fi';

const features = [
  {
    id: 'diagnostics',
    title: 'AI-Powered Diagnostics',
    icon: <FiAlertCircle className="text-5xl text-blue-600 mb-6 bg-white"/>,
    description: 'Our advanced algorithms provide accurate and fast assessments, reducing diagnostic errors by up to 45% compared to traditional methods.',
    bullets: [
      'Real-time analysis of medical images',
      'Pattern recognition in patient history',
      'Differential diagnosis suggestions'
    ]
  },
  {
    id: 'predictive',
    title: 'Predictive Analytics',
    icon: <FiDatabase className="text-5xl text-blue-600 mb-6" />,
    description: 'Anticipate patient risks and reduce readmissions with our predictive models trained on millions of patient records.',
    bullets: [
      '30-day readmission risk scoring',
      'Complication probability estimates',
      'Personalized intervention suggestions'
    ]
  },
  {
    id: 'workflows',
    title: 'Automated Workflows',
    icon: <FiCalendar className="text-5xl text-blue-600 mb-6" />,
    description: 'Streamline your clinical operations with intelligent automation that saves time and reduces administrative burden.',
    bullets: [
      'Automated appointment scheduling',
      'Intelligent follow-up reminders',
      'Documentation assistance'
    ]
  },
  {
    id: 'treatment',
    title: 'Personalized Treatment',
    icon: <FiHeart className="text-5xl text-blue-600 mb-6" />,
    description: 'Generate optimal treatment plans based on patient history, current condition, and latest medical research.',
    bullets: [
      'Evidence-based recommendations',
      'Personalized medication plans',
      'Progress tracking and adjustment'
    ]
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState('diagnostics');
  const activeFeature = features.find(f => f.id === activeTab);

  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Healthcare Solutions</h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Cutting-edge artificial intelligence designed specifically for medical professionals
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap justify-start sm:justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`flex-shrink-0 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-t-lg transition-all whitespace-nowrap ${
                activeTab === feature.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-b-lg rounded-tr-lg p-6 sm:p-8 md:p-12 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              {activeFeature.icon}
              <h3 className="text-2xl font-bold mb-4">{activeFeature.title}</h3>
              <p className="text-gray-600 mb-6">{activeFeature.description}</p>
              <ul className="space-y-3">
                {activeFeature.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="text-green-500 mt-1 mr-2 flex-shrink-0"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-[1.01] transition duration-300">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg h-64 sm:h-72 md:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl text-blue-600 mb-4">{activeFeature.icon}</div>
                  <p className="text-gray-600 font-medium">{activeFeature.title} Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
