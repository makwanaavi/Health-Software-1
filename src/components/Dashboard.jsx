import { FiActivity, FiHeart, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';

const Dashboard = () => {
  const stats = [
    { value: '98%', label: 'Diagnostic Accuracy', icon: <FiActivity className="text-3xl" /> },
    { value: '45%', label: 'Error Reduction', icon: <FiAlertCircle className="text-3xl" /> },
    { value: '30%', label: 'Readmission Decrease', icon: <FiHeart className="text-3xl" /> },
    { value: '15h', label: 'Weekly Time Saved', icon: <FiTrendingUp className="text-3xl" /> }
  ];

  return (
    <section id="dashboard" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Health Intelligence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive dashboard provides actionable insights at a glance
          </p>
        </div>
        
        <div 
          className="bg-gray-50 rounded-xl p-1 shadow-2xl"
        >
          <div className="bg-white rounded-lg overflow-hidden">
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center shadow-sm"
                  >
                    <div className="text-blue-600 mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <FiHeart className="text-blue-600 mr-2" /> Patient Vitals
                  </h3>
                  <div className="bg-white rounded-lg h-48 flex items-center justify-center shadow-inner">
                    <div className=" text-blue-600 text-center">
                      <FiActivity className="text-4xl mx-auto mb-2" />
                      <p className="text-sm">Real-time monitoring</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <FiTrendingUp className="text-blue-600 mr-2" /> Risk Prediction
                  </h3>
                  <div className="bg-white rounded-lg h-48 flex items-center justify-center shadow-inner">
                    <div className=" text-blue-600 text-center">
                      <FiActivity className="text-4xl mx-auto mb-2" />
                      <p className="text-sm">Analytics dashboard</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <FiAlertCircle className="text-blue-600 mr-2" /> AI Recommendations
                  </h3>
                  <div className="bg-white rounded-lg h-48 flex items-center justify-center shadow-inner">
                    <div className="text-blue-600 text-center">
                      <FiActivity className="text-4xl mx-auto mb-2" />
                      <p className="text-sm">Actionable insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;