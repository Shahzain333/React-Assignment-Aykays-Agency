import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart, 
  Users,
  Star,
  Globe
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import HowItWork from '../components/HowItWork'
import Donation from '../components/Donation'
import Testimonials from '../components/Testimonials';

export default function Home() {

  return (
    <>
      <Helmet>
        <title>Modern SaaS Platform - Build Faster with React</title>
        <meta name="description" content="Transform your business with our modern SaaS platform. Built with React, Tailwind CSS, and Framer Motion." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Modern SaaS Platform",
            "description": "A modern SaaS platform for businesses",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "49.99",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* About */}
      {/* <About/> */}

      {/* How work */}
      <HowItWork/>

      {/* Pricing Section */}
      <Donation/>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}