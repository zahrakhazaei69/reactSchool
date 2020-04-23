import React from 'react';
import classes from './navigationItems.module.css';
import NavigationItem from './NavigationItem/navigationItem';
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active exact>خانه</NavigationItem>
        <NavigationItem link='/news'>اخبار</NavigationItem>
        <NavigationItem link='/staffs'>کادر مدرسه</NavigationItem>
        <NavigationItem link='/aboutUs' >درباره مدرسه</NavigationItem>
        <NavigationItem link='/contactUs' >تماس با ما</NavigationItem>
    </ul>
)
export default navigationItems