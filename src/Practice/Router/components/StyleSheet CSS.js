import React from 'react';
import './MyClass.css';
import './AppStyle.css';

const StyleSheet = () => {
    return (
        <div>
            <h1 className={'error'}>Heading</h1>
            <h1 className={'primary , font-xl'}>Heading</h1>
        </div>
    )
}

export default StyleSheet;