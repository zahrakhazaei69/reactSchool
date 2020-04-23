import React from 'react';
import classes from './poster.module.css';
import posterURL from '../../assets/img/poster.jpg';

const poster = () => (
    <div className={classes.Poster}>
        <img src={posterURL} />
    </div>
);
export default poster;