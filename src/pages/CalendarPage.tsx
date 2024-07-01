import React from 'react';
import Header from '../components/Header';
import { AlignTextLeft } from '../components/AlignTextLeft';
import { LeftSquare } from '../components/LeftSquare';
import { Search } from '../components/Search';
import Footer from '../components/Footer';
import NetworkingEvent from '../components/NetworkingEvent';
import UpcomingEvents from '../components/UpcomingEvents';
import LatestNews from '../components/LatestNews';
import CalendarContainer from '../components/CalendarContainer';

const CalendarPage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <NetworkingEvent />
                <div className="home-sections">
                    <CalendarContainer />
                    <LatestNews />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CalendarPage;