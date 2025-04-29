import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      video: 'https://youtu.be/EsTyD87R3lE',
      name: 'Dr. John Smith',
      title: 'Cardiologist at XYZ Clinic',
      quote: 'This tool has significantly reduced my workload and allowed me to focus more on patient care.',
      beforeAfter: {
        before: '50% time spent on administrative tasks',
        after: '15% time spent on administrative tasks',
      }
    },
    {
      video: 'https://youtu.be/f6ozwnhCpvE',
      name: 'Dr. Emily Johnson',
      title: 'Neurologist at ABC Hospital',
      quote: 'The real-time insights help me make quicker decisions, improving overall patient outcomes.',
      beforeAfter: {
        before: '3+ hours of decision-making per patient',
        after: '1 hour of decision-making per patient',
      }
    }
  ];

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url) => {
    return url
      .replace('watch?v=', 'embed/')
      .replace('youtu.be/', 'www.youtube.com/embed/');
  };

  return (
    <section id="testimonials" className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Doctors Are Saying</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <iframe
                  className="w-full h-64 rounded-lg"
                  src={getEmbedUrl(testimonial.video)}
                  title={testimonial.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.title}</p>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>

              <div className="bg-gray-100 p-4 rounded-xl">
                <h4 className="font-bold text-gray-800">Before/After Statistics</h4>
                <p className="text-gray-600 mt-2">Before: <span className="text-gray-800">{testimonial.beforeAfter.before}</span></p>
                <p className="text-gray-600 mt-2">After: <span className="text-gray-800">{testimonial.beforeAfter.after}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
