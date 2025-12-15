import React from 'react';
import CardWrapper from './CardWrapper';
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
      description: 'Upload photos, videos, and updates to let the world know what\'s happening in your life.',
    },
    { 
      icon: ChartArea,
      title: 'Real-Time Chat', 
      description: 'Whether it\'s a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.',
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
    <section id="features" className='pt-20 px-4'>
        
        <div className='text-center space-y-2 mx-2 sm:mx-5 md:mx-0'>
            <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white'>Features That Keep You Hooked!</h1>
            <p className='text-gray-600 dark:text-gray-300 text-[16px] sm:text-[18px]'>Meet, Chat, Share – Anytime, Anywhere!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl pt-10 pb-10">
            {features.map((feature, index) => (
                <CardWrapper key={feature.title} delay={index} hover className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center justify-center gap-2">
                      <feature.icon className="w-8 h-8 text-primary dark:text-primary" />{feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardWrapper>
            ))}
        </div>

    </section>
  );
}

export default Features;