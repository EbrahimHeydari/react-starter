import React from 'react';

const Style = {
    fontSize: '80px',
    fontWeight: 300,
    color: 'darkcyan'
}

const Inline = () => {
    return (
        <div>
            <h1 style={Style}>
            inline
            </h1>
        </div>
    )
}

export default Inline;