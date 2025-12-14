import React from 'react';
import CardWrapper from './CardWrapper';

export default function AppInstallSection() {
  const steps = [
    {
      number: '01',
      title: 'Download',
      description: 'Open Play Store or App Store',
    },
    {
      number: '02',
      title: 'Install App',
      description: 'The app will install automatically',
    },
    {
      number: '03',
      title: 'Ready to Use',
      description: 'Sign up or log in to start exploring!',
    },
  ];

  return (
    <section className="px-4 md:px-8 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How to Install Our App
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Getting started is quick and easy. Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">

              {/* Connector line between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-3/4 md:w-[80%] h-0.5 
                bg-gray-300 -z-10"></div>
              )}

              {/* Step Number */}
              <div className="text-center text-4xl font-bold mb-6 mt-3 md:relative md:left-2 lg:left-10">
                {step.number}
              </div>
              
              <CardWrapper hover className="text-center lg:w-[80%] lg:relative lg:left-18">
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardWrapper>

            </div>

          ))}

        </div>

      </div>
    
    </section>
  );
}