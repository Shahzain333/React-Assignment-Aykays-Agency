import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import HowItWork from '../components/HowItWork';
import Donation from '../components/Donation';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "MyBindle - Social Network",
    "description": "A modern social networking platform for connecting with friends and communities",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  };

  return (
    <>
      <Helmet>
        <title>MyBindle - Modern Social Networking Platform</title>
        <meta name="description" content="Connect, share, and grow with MyBindle - Your modern social networking platform for meaningful connections." />
        <meta name="keywords" content="social network, connect, share, community, messaging" />
        <meta property="og:title" content="MyBindle - Modern Social Networking" />
        <meta property="og:description" content="Join our community and stay connected with friends and family." />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="MyBindle - Modern Social Networking" />
        <meta property="twitter:description" content="Connect, share, and grow with our community" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <HeroSection />
      <Features />
      <HowItWork />
      <Donation />
      <Testimonials />
    </>
  );
}