import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SubscribePage: React.FC = () => {
    return (
        <div>
            <Header />
            {/* <div className='subscribe'>
                <div className='subscribe-text'>
                    <h1>
                        Подпишитесь / S'abonner
                    </h1>
                    <span>
                        Подпишитесь на рассылки Франко-российской ТПП <br />
                        S'abonner aux emailings de la CCI France Russie
                    </span>
                </div>
            </div> */}
            <Footer />
        </div>
    );
};

export default SubscribePage;