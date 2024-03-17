// import React from "react";

import Hero from "../components/hero/Hero";
import BtnNav from "../components/main/btnnav/BtnNav";
import GroupCard from "../components/main/card/GroupCard";
// import Owl from "../components/main/owl/Owl";
import RangeSection from "../components/main/range/RangeSection";
import "./Home.scss";
const Home = () => {
  return (
    <main>
      <Hero />
      <RangeSection />
      <GroupCard />
      {/* <Owl /> */}
      <BtnNav />
    </main>
  );
};

export default Home;
