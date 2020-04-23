import React from 'react';
import classes from './staff.module.css';
import ImageProfile1 from '../../../assets/img/staff1.jpg';
import ImageProfile2 from '../../../assets/img/staff2.jpg';
import ImageProfile3 from '../../../assets/img/staff3.jpg';

const staff = (props) => (
    <div className={classes.Staff}>
        <img src={ props.id === '1' ? ImageProfile1: props.id === '2' ? ImageProfile2:ImageProfile3} alt='Profile' />
        <div className={classes.profile}>
            <h2>{props.fullName}</h2>
            <p>{props.post}</p>
        </div>

    </div>
);
export default staff