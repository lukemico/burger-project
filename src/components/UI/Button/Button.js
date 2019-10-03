import React from 'react'
import classes from './Button.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join('')} // className accepts a String. By using .join, this combines the 2 arrays together into 1 string. 
        onClick={props.clicked}>{props.children}</button>
);

export default button;