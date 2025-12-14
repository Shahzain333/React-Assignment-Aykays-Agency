import React from 'react'
import CardWrapper from './CardWrapper'
import { 
  Flame, 
  Camera,  
  Lock,
  ChartArea,
  BriefcaseBusiness,
  Earth,
} from 'lucide-react';

function Features() {
  const features = [
    { 
      icon: Flame,
      title: 'Seamless Connections', 
      description: 'Stay in touch with friends, family, and like-minded people with just a tap.', 
    },
    { 
      icon: Camera,
      title: 'Share Your Story', 
      description: 'Upload photos, videos, and updates to let the world know what’s happening in your life.',
    },
    { 
      icon: ChartArea,
      title: 'Real-Time Chat', 
      description: `Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.`,
    },
    { 
      icon: Lock,
      title: 'Privacy First', 
      description: 'Your data, your control. We prioritize your privacy with world-class security.', 
    },
    { 
      icon: Earth,
      title: 'Discover & Explore', 
      description: 'Find trending content, join communities, and follow pages that match your interests.', 
    },
    { 
      icon: BriefcaseBusiness,
      title: 'Grow Your Business', 
      description: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.', 
    },
  ];

  return (
    <section className='pt-20'>
        
        <div className='text-center space-y-2 mx-2 sm:mx-5 md:mx-0'>
            <h1 className='text-[#282722] text-4xl lg:text-5xl'>Features That Keep You Hooked!</h1>
            <p className='text-[#222222] text-[12px] sm:text-[16px]'>Meet, Chat, Share – Anytime, Anywhere!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 mx-5 lg:mx-20 pt-10 pb-10">
            {features.map((feature, index) => (
                <CardWrapper key={feature.title} delay={index} hover className={`text-center`}>
                    <h3 className="text-lg font-bold mb-2 flex items-center justify-center text-center gap-2"><feature.icon/>{feature.title}</h3>
                    <p className="text-gray-600 px-5 md:px-10">{feature.description}</p>
                </CardWrapper>
            ))}
        </div>

    </section>
    
  );
}

export default Features
