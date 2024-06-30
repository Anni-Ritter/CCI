import "../style/styleScreen.css";
import React from 'react';

export const SubscriptionRadio = ({title}: any): JSX.Element => {

    return (
        <div className="mainSubscriptionInput">
            <label className="calendarInputTitle">
            <input type="radio" value="option1" checked={true} />
                {title}
            </label>
        </div>
    );
};
