import React from 'react';
import { Star, User } from 'lucide-react';
import CardWrapper from './CardWrapper';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moment!",
    name: "Emily R",
    location: "USA",
  },
  {
    id: 2,
    rating: 5,
    text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand!",
    name: "Javier L",
    location: "Spain",
  },
  {
    id: 3,
    rating: 5,
    text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online!",
    name: "Amit K",
    location: "India",
  },
  {
    id: 4,
    rating: 5,
    text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    name: "Lucas T",
    location: "Brazil",
  },
  {
    id: 5,
    rating: 5,
    text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
    name: "Sophie M",
    location: "UK",
  },
  {
    id: 6,
    rating: 5,
    text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense!",
    name: "Nora S",
    location: "Canada",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          What Our Users Say
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial) => (
          <CardWrapper key={testimonial.id} hover className="p-6 md:p-8 h-full flex flex-col">
            
            {/* Rating */}
            <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400 mr-1" 
                />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 md:mb-8 flex-grow">
              "{testimonial.text}"
            </p>
            
            {/* User Info */}
            <div className="flex items-center mt-auto">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </CardWrapper>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-12">
        <button 
          className='bg-primary dark:bg-primary text-white rounded-lg px-10 py-3 hover:scale-105 
          transition-transform duration-300 cursor-pointer text-lg font-semibold shadow-lg hover:shadow-xl'
          aria-label="See more testimonials"
        >
          See More
        </button>
      </div>

    </section>
  );
}