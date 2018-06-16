import React from 'react';
import InputBox from './InputBox';

/* Input box in the header for adding new item*/ 
export default function Header(props){

    const {title} = props;

    return(
        <header>
            <h1>{title.toUpperCase()}</h1>
            <InputBox />
        </header>
    );
}

