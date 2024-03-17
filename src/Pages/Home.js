import React from "react";
import Banner from "../components/Banner";

import ServicesSection from "../components/HomePage/ServicesSection";
import AboutSection from "../components/HomePage/AboutSection";
import CounterSection from "../components/HomePage/CounterSection";
import RecentProjects from "../components/HomePage/RecentProjects";
import BookingSection from "../components/HomePage/BookingSection";
import CallToAction from "../components/HomePage/CallToAction";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import FAQSection from "../components/HomePage/FAQSection";
import ContactUs from "./ContactUs";
import TeamMembers from "../components/HomePage/TeamMembers";
import PricingSection from "../components/HomePage/PricingSection";
import WorkSection from "../components/HomePage/WorkSection";







const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <PricingSection></PricingSection>
     
      <WorkSection></WorkSection>
      <TestimonialSection></TestimonialSection>
      
      <ContactUs></ContactUs>
    
      






      




    </div>
  );
};

export default Home;
