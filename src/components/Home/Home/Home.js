import React from 'react';
import Achievements from '../Achievements/Achievements';
import Header from '../Header/Header';
import RunProject from '../RunProject/RunProject';
import Store from '../Store/Store';
const Home = () => {
  return (
    <>
      <Header />
      <div className="shaireBg">
        <Store />
        <RunProject />
        <Achievements />
      </div>
      <DedecatedTeam />
      <Search />
      <Footer />
    </>
  );
};

export default Home;
