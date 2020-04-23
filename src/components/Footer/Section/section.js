import React from 'react';
import classes from './section.module.css';
const secion = (props) => (
    <div className={classes.Section}>
        <h3>{props.title}</h3>
        <p>{props.info1}</p>
        <p>{props.info2}</p>
    </div>
);
export default secion