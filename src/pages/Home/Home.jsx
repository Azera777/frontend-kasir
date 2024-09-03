import React, { useState } from 'react'; // Add useState import
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Description from '../../components/Description/Description';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/> 
      <FoodDisplay category={category}/>
      <Description />
      <AppDownload />
    </div>
  );
}

export default Home;
