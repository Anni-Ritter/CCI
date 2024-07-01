import "../style/styleScreen.css";
import React from 'react';

export const SubscriptionInput = ({title, placeholder}: any): JSX.Element => {

    return (
        <div className="mainSubscriptionInput">
            <div className="calendarInputTitle">{title}</div>
            <input className="calendarInput" placeholder={placeholder}></input>
        </div>
    );
};
