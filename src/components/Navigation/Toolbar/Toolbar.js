import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/navigationItems';
import Button from '../../UI/button/button';


const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
        <div className={classes.ButtonWrapper}>
            <Button link='/signIn'>ورود</Button>
            <Button link='/signUp'>ثبت نام</Button>
        </div>
        <div className={classes.Logo}>
            <Logo />
        </div>
    </header>
);

export default toolbar;