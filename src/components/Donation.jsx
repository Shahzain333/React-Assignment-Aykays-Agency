import React from 'react';
import { Apple } from 'lucide-react';
import ImageWrapper from './ImageWrapper';
import DonateImage1 from '/images/Iphone14ProD1.webp';
import DonateImage2 from '/images/Iphone14ProD2.webp';

export default function Donation() {
  return (

    <section className="bg-primary text-white rounded-4xl h-[558px] md:h-[555px] lg:h-[645px] mx-auto 
    relative pt-8 md:pt-12">
      
      <div className='flex flex-col lg:flex-row items-center justify-between px-6 md:px-8 lg:px-18'>
        
        {/* Text and Button Section */}
        <div className='w-full space-y-2 md:space-y-6 text-center lg:text-left'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
            Be the Reason <br className="hidden sm:block"/>
            Someone Smiles Today!
          </h1>
          <p className='text-base sm:text-lg md:text-xl max-w-full lg:max-w-[65%] px-4 sm:px-0'>
            Your generosity can change lives every donation brings hope, support, and a brighter future. Give today and make a difference!
          </p>

          <button className='bg-white text-[#ff5349] rounded-lg px-4 py-3 hover:scale-105 
            transition-transform cursor-pointer text-sm sm:text-base mt-4 sm:mt-0'
            aria-label="Make a donation" >
                Donate Now
          </button>
            
        </div>
        
        {/* Images Section - Fixed at bottom */}
        <div className=''>
          
          {/* First Image - Positioned at bottom left */}
          <div className='absolute bottom-0 right-40 sm:right-65 lg:right-110 z-10'>
            <ImageWrapper 
              src={DonateImage1} 
              alt="Donate decoration 1"
              className='w-[140px] md:w-[240px] lg:w-[400px]'
            />
          </div>

          {/* Second Image - Positioned at bottom right */}
          <div className='absolute bottom-0 right-6 sm:right-7 lg:right-15'>
            <ImageWrapper 
              src={DonateImage2} 
              alt="Donate decoration 2"
              className='w-[130px] md:w-[200px] lg:w-[360px]'
            />
          </div>
        
        </div>
    
      </div>
    
    </section>
  );
}