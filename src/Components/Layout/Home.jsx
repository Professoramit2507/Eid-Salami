import React from 'react';
import HeroSlider from '../HomeComponent/HeroSlider';
import { CardSlider } from '../HomeComponent/CardSlider';
import SixCard from '../HomeComponent/SixCard';


const Home = () => {
    return (
        <div className=''>
            <HeroSlider></HeroSlider>
            <CardSlider></CardSlider>
            <SixCard></SixCard>
        </div>
    );
};

export default Home;