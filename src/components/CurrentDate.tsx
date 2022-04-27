import React from 'react';

const CurrentDate = () => {
    let today = new Date().toString()
    return (
        <div>
            {today}
        </div>
    );
};

export default CurrentDate;