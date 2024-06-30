import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SubscriptionMain } from '../components/SubscriptionMain';

const SubscribePage: React.FC = () => {
    return (
        <div>
            <Header />
            <SubscriptionMain />
            <Footer />
        </div>
    );
};

export default SubscribePage;