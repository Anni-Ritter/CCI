import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NetworkingEvent from '../components/NetworkingEvent';
import UpcomingEvents from '../components/UpcomingEvents';
import LatestNews from '../components/LatestNews';
import { Screen } from '../components/Screen';

const MainPage: React.FC = () => {
    return (
        <div>
            <Header />
            {/* <div className="home">
                <NetworkingEvent />
                <div className="home-sections">
                    <UpcomingEvents />
                    <LatestNews />
                </div>
            </div> */}
            <Screen />
            <Footer />
        </div>
    );
};

export default MainPage;