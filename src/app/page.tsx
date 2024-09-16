'use client'; 
import Header from "@/components/Header";
import MainInfo from "@/components/MainInfo";
import Activity from "@/components/Activity";
import Interlude from "@/components/Interlude";
import Articles from "@/components/Articles";
import Pricing from "@/components/Pricing";
import Opinions from "@/components/Opinions";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <>
      <Header />
      <MainInfo />
      <Activity />
      <Interlude />
      <Articles />
      <Pricing /> 
      <Opinions />
      <Newsletter />
      <Footer />
    </>
  );
}
