import React from 'react';
// import HeroImage from '../../public/images/HeroSectionImage.webp';
// import HeroSectionCard1 from '../../public/images/card-1.webp'
// import HeroSectionCard2 from '../../public/images/card.webp'
import ImageWrapper from './ImageWrapper';

export default function HeroSection() {
  return (
    <main className="max-h-[885px] md:max-h-[600px] bg-primary dark:bg-gray-900 pt-1">
      
      <section className="container mx-auto py-4">
      
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-16">
            
          <div className="space-y-2 md:w-1/2 p-2">

            <h1 className="text-4xl sm:text-4xl lg:text-6xl xl:text-6xl font-bold leading-tight dark:text-white text-gray-900">
              <span className="block">
                Stay Connected
              </span>
              <span className="block">
                Stay Social
              </span>
              <span className="block">
                Stay You!
              </span>
            </h1>
            
            <p className="lg:text-[20.5px] sm:text-xl max-w-2xl dark:text-white text-gray-900">
              A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
            </p>

            <button
            aria-label="Get started with MyBindle" 
            className="px-4 py-2 md:px-8 md:py-4 bg-white text-red-400 font-semibold rounded-lg text-lg hover:bg-red-400 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            
          </div>
  
          {/* Main Image Container */}
          <div className='relative md:w-1/2 flex justify-center items-center min-h-auto mx-4 sm:mx-0'>
            
            {/* Card 1 - Positioned top left */}
            <div className='absolute top-7 -left-5 md:top-8 md:-left-12 lg:left-18 z-30'>
              <ImageWrapper
                src="/images/card-1.webp" 
                alt="Hero Image Card 1"
                className='w-[200px] md:w-[250px]'
              />
            </div>

            {/* Card 2 - Positioned bottom left */}
            <div className='absolute top-95 left-30 md:top-109 md:left-30 lg:left-65 z-30'>
              <ImageWrapper 
                src="/images/card.webp" 
                alt="Hero Image Card 2"
                className='w-[200px] md:w-[250px]'
              />
            </div>
            
            {/* Main Hero Image */}
            <div className='relative left-3 md:left-0 md:top-auto z-20'>
              <ImageWrapper 
                src="/images/HeroSectionImage.webp" 
                alt="Hero Image" 
                className='w-[300px] sm:w-[320px] md:w-[350px]'
              />
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}