import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSectionOne from "./components/ProductSectionOne";
import HowItWorks from "./components/HowItWorks";
import PopularItems from "./components/PopularItem";
import FeaturedRestaurants from "./components/FeaturedRestaurant";
import InstallAppSection from "./components/InstallAppSection";
import Footer from "./components/Footer";
import OrderCTASection from "./components/OrderSection";
import FoodDeals from "./components/Fooditems";

export default function FoodWagonLanding() {
  return (
   <>
      <Header />
      <Hero />
      <ProductSectionOne />
      <HowItWorks />
      <PopularItems />
      <FeaturedRestaurants />
      <InstallAppSection />
      <FoodDeals />
      <OrderCTASection />
      <Footer />
   </>
    

    
  );
}

