import React, { useState } from 'react';

const Hello = () => {

    var fa = 'سلام';
    var en = 'Hello';
    var [isFa, Change] = useState([
        true,
    ]);

    var language = isFa ? fa : en;

    const changeLang = () => {
        Change(isFa = !isFa)
    }

    return (
        <div>
            <h1>
                {language}
            </h1>
            <button onClick={changeLang}>فارسی</button>
        </div>
    );
}

export default Hello;