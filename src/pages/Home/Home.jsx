import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import Exploremenu from "../../components/Exploremenu/exploremenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Section />
      
      <Exploremenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />   
    </div>
  );
}

export default Home;
