import React from 'react';
import classes from './footer.module.css';
import Section from './Section/section';
import Logo from '../../components/Logo/logo';
const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.ContactInfo}>
            <Section title='تلفن تماس' info1='09179299474' info2='07734244267' />
            <Section title='آدرس' info1='برازجان خیابان فردوسی دبستان غیرانتفاعی' />
            <div className={classes.Logo}><Logo /></div>
            
        </div>
        <div className={classes.Map}>
           
        </div>
    </div>
);
export default footer