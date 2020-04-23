import React from 'react';
import classes from './logo.module.css';
import Logo from '../../assets/img/logo.png';

const logo = () => (
    <div className={classes.Logo}>
        <img src={Logo} />
    </div>
);
export default logo