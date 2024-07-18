import React from "react";
import Card from "./layout/food_card/card";
import Navbar from "./layout/navbar";
import FoodCard from "./layout/food_card/foodCard_stat";
import Counter from "./event_hndlg/counter";
import Header from "./components/header";
import Features from "./components/feature";
import Footer from "./components/footer";

function App(){
    return(
        <>
      <Navbar />
      <Header />
      <Counter />
      <Card />
      <FoodCard />
      <Features />
      <Footer />
        </>
    )
}
export default App;