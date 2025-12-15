import React from 'react';
import { Apple, Play } from 'lucide-react';
import ImageWrapper from './ImageWrapper';
// import FooterImage1 from '../../public/images/Footer_Img1.webp';
// import FooterImage2 from '../../public/images/Footer_Img2.webp';

export default function Footer() {
  return (
    <footer className="bg-primary text-white rounded-t-4xl w-full max-w-[96%] mx-auto relative pt-8 md:pt-12">
      
      <section className='flex flex-col lg:flex-row items-center justify-between gap-50 md:gap-90 px-6 md:px-8 lg:px-18'>
        
        {/* Text and Button Section */}
        <div className='w-full space-y-6 text-center lg:text-left'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
            Join the Fun - Download<br />
            MyBindle Now!
          </h1>
          <p className='text-lg md:text-xl max-w-full lg:max-w-[45%]'>
            Your Social Network, Your Way Download MyBindle Now and Be a Part of a Community That’s Always Evolving!
          </p>
        
          {/* Footer Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 pb-2 sm:items-center sm:justify-center lg:items-start lg:justify-start'>
            <button
            aria-label='Apple Store' className='bg-white text-black rounded-[60px] flex items-center justify-start gap-4 px-6 py-3 hover:scale-105 
            transition-transform cursor-pointer'>
              <Apple size={24} />
              <div className='flex flex-col items-start'>
                <p className='text-xs text-gray-500'>DOWNLOAD ON THE</p>
                <h1 className='text-lg font-semibold'>App Store</h1>
              </div>
            </button>
        
            <button
             aria-label='Apple Store' className='bg-white text-black rounded-[60px] flex items-center justify-start gap-4 px-6 py-3 cursor-pointer hover:scale-105 transition-transform'>
              <Play size={24} />
              <div className='flex flex-col items-start'>
                <p className='text-xs text-gray-500'>GET IT ON</p>
                <h1 className='text-lg font-semibold'>Play Store</h1>
              </div>
            </button>
          </div>    
        </div>
        
        {/* Images Section - Fixed at bottom */}
        <div className=''>
          
          {/* First Image - Positioned at bottom left */}
          <div className='absolute bottom-0 right-40 sm:right-75 lg:right-75 z-10'>
            <ImageWrapper 
              src="/images/Footer_Img1.webp"
              alt="Footer decoration 1"
              className='w-[160px] md:w-[280px] lg:w-[300px]'
            />
          </div>

          {/* Second Image - Positioned at bottom right */}
          <div className='absolute bottom-0 -right-1.5 sm:-right-3 lg:-right-6'>
            <ImageWrapper 
              src="/images/Footer_Img2.webp"
              alt="Footer decoration 2"
              className='w-[160px] md:w-[280px]'
            />
          </div>
        
        </div>
    
      </section>
    
    </footer>
  );
}