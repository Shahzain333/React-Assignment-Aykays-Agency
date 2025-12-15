import React from 'react'
import AboutImage from '../../public/images/About Image.webp'
import ImageWrapper from './ImageWrapper'
import CardWrapper from './CardWrapper'
import {  
  Video,
  Bell,  
} from 'lucide-react';

function About() {
    const about_features = [
    { 
      icon: Video,
      title: 'Short Videos & Reels', 
      description: 'Share engaging, bite-sized content that keeps everyone entertained.', 
    },
    { 
      icon: Bell,
      title: 'Smart Notifications', 
      description: 'Stay updated on what matters without the noise.',
    },
    { 
      icon: Bell,
      title: 'Interest-Based Communitie', 
      description: `Join groups and discussions that match your passion.`,
    },
  ];
  return (
    
    <section className='flex flex-col lg:flex-row items-center justify-center px-2 pb-6 dark:text-white text-gray-900'>

        <div className='md:max-w-[600px] lg:w-1/2'>
            <ImageWrapper src={AboutImage} alt='About Image' />
        </div>
        
        <div className='lg:w-1/2 p-2 sm:p-10 lg:p-0'>
            <h1 className='text-[#282722] dark:text-white text-4xl lg:text-6xl font-semibold'>Where Every Click Sparks a Connection!</h1>
            <p className='text-[#222222] dark:text-white  text-[12px] sm:text-[16px] pt-4 max-w-[80%]'>A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!</p>
        
            <div className="grid grid-cols-1 gap-6 pt-4 lg:w-[80%]">
                {about_features.map((feature, index) => (
                    <CardWrapper key={feature.title} delay={index} hover className={`text-start`}>
                        <h3 className="text-lg font-bold mb-2 flex items-center justify-start text-center 
                        gap-1"><feature.icon/>{feature.title}</h3>
                        <p className="text-gray-600 dark:text-white px-5 md:px-10">{feature.description}</p>
                    </CardWrapper>
                ))}
            </div>
        
        </div>
    
    </section>

   )
}

export default About
