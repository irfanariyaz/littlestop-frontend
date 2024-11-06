import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      message: "Absolutely love the quality of products and the customer service!",
      name: "John Doe",
      rating: 5,
    },
    {
      id: 2,
      message: "Fast delivery and amazing prices. Will shop here again!",
      name: "Jane Smith",
      rating: 4,
    },
    {
      id: 3,
      message: "I’m so impressed with the variety and quality. Highly recommend!",
      name: "Alice Brown",
      rating: 5,
    },
    // Add more testimonials here as needed
  ];

  return (
    <div className="my-10 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        What customers say about LITTLESTOP?
      </h2>

      <div className="bg-white p-4 rounded-lg overflow-x-auto no-scrollbar md:m-auto md:w-[70%]">
        <div className="flex space-x-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-primary p-6 w-[300px] min-w-[300px] md:w-[350px] rounded-lg shadow-lg flex flex-col space-y-4"
            >
              {/* Left - Message and Name */}
              <div className="flex-1">
                <p className="text-gray-700 italic">"{testimonial.message}"</p>
                <p className="mt-4 font-semibold">- {testimonial.name}</p>
              </div>

              {/* Right - Rating */}
              <div className="flex items-center justify-end space-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 font-semibold">{testimonial.rating}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
