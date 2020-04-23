import React from 'react';
import classes from './button.module.css';
import { NavLink } from "react-router-dom";
const button = (props) => (
    <NavLink className={classes.Button}
            to={props.link}
            exact={props.exact}>{props.children}</NavLink>
);
export default button