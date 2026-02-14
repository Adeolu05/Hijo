import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Specs from '../components/Specs';

// Wait, the user said:
// Home (/) will have Hero and key highlights.
// Contact (/contact) will be its own dedicated page.
// Collection (/collection) will be a dedicated page for browsing watches.

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Hero onExplore={() => navigate('/collection')} />
            <Features />
            <Specs />
        </>
    );
};

export default Home;
