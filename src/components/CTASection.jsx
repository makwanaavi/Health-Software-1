import { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';

const CTASection = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotToggle = () => setShowChatbot(!showChatbot);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email or store data)
  };

  return (
    <section id="cta" className="py-16 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Started in Minutes</h2>
        <p className="text-lg text-gray-600 mb-8">Talk to an AI Healthcare Expert or schedule a consultation.</p>
        
        <div className="flex justify-center space-x-8 mb-12">
          {/* Contact Form */}
          <div className="w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  aria-label="Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  aria-label="Your Email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  aria-label="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Scheduling Widget */}
          <div className="w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Schedule an Appointment</h3>
            <div className="flex justify-center">
              <iframe
                src="https://calendly.com/your-calendar-link"
                width="100%"
                height="600"
                frameBorder="0"
                title="Scheduling Widget"
                className="rounded-lg border border-gray-300 shadow-md"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Chatbot Button */}
        <button
          onClick={handleChatbotToggle}
          className="py-2 px-4 bg-green-600 text-white rounded-full flex items-center justify-center space-x-2 mt-4"
        >
          <FaRegCommentDots className="text-xl" />
          <span>Talk to a Healthcare AI</span>
        </button>

        {/* Chatbot Popup */}
        {showChatbot && (
          <div className="fixed bottom-6 right-6 bg-white p-6 rounded-lg shadow-lg w-80 sm:w-96">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Healthcare AI Chatbot</h3>
              <button
                onClick={handleChatbotToggle}
                className="text-gray-500 hover:text-gray-700"
              >
                X
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">How can I assist you today?</p>
              <textarea
                placeholder="Ask me anything..."
                rows="3"
                className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-lg"
                aria-label="Chatbot input"
              ></textarea>
              <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
