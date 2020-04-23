import React from 'react';
import classes from './newsItem.module.css';
import { NavLink } from 'react-router-dom';
import News1 from '../../../assets/img/news1.jpg';
import News2 from '../../../assets/img/news2.jpg';
const newsItem = (props) => (
    <article className={classes.NewsItem}>
        <img src={props.id === '1' ? News1:News2} />
        <div className={classes.NewsBox}>
            <h2>{props.title}</h2>
            <p>{props.abstract}</p>
            <h6>{props.publishDate}</h6>
            <NavLink to={props.link}>ادامه مطلب</NavLink>
        </div>

    </article>
);
export default newsItem;