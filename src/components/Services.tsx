import "../style/styleScreen.css";
import React from 'react';

export const ServicesContainer = (): JSX.Element => {

    const services = [
        { title: 'Исследования рынка', description: 'Отраслевой обзор \nГлубинное исследование \nАнализ нормативныз актов' },
        { title: 'B2B - встречи', description: 'Проведем для вас встречи с \nвашими потенциальными партнерами \nили клиентами.' },
        { title: 'Аутстаффинг', description: 'Подбор персонала \nМиграционная поддержка \nАдминистративная и финансовая поддержка \nРазмещение' },
        { title: 'Визовая \nи административная \nподдержка', description: '' },
        { title: 'Коммерческое \nпредставительство', description: '' },
        { title: 'Все услуги', description: '' },
      ];

    return (<div className="servicesContainer">
        {services.map((service, index) => (
            <div className={index % 2 ? "container-49" : "container-7"}>
                <div className="container-17">
                    <div className={index % 2 ? "b-2-b" : "container-32" }>
                        {service.title}
                    </div>
                    <div className={index % 2 ? "container-99" : "container-39" }>
                        {service.description}
                    </div>
                    <div className="container-1">
                        <div className={index % 2 ? "container-41" : "container-40"}>
                        Подробнее
                        </div>
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4375 39.375L36.5625 39.375C38.1158 39.375 39.375 38.1158 39.375 36.5625L39.375 8.4375C39.375 6.8842 38.1158 5.625 36.5625 5.625L8.4375 5.625C6.8842 5.625 5.625 6.8842 5.625 8.4375L5.625 36.5625C5.625 38.1158 6.88419 39.375 8.4375 39.375Z" stroke={index % 2 ? "#040D67" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.8125 13.125L27.1875 22.5L17.8125 31.875" stroke={index % 2 ? "#040D67" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                { !(index % 2) && <div className="container-36">
                </div>}
            </div>
        ))}
        </div>
    );
};
