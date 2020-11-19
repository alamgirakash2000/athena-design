import React from 'react';
import Achievements from '../Achievements/Achievements';
import Header from '../Header/Header';
import RunProject from '../RunProject/RunProject';
import Store from '../Store/Store';
const Home = () => {
    return (
        <main>
            <Header />
            <Store />
            <RunProject />
            <Achievements />
        </main>
    );
};

export default Home;