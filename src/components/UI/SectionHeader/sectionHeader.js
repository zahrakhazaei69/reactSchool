import React from 'react';
import classes from './sectionHeader.module.css';

const sectionHeader = (props) => (
<div className={classes.SectionHeader}>
    <div className={classes.NewsHeader}>{props.children}</div>
    <hr className={classes.Hr}/>
</div>
);
export default sectionHeader