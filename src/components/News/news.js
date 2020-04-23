import React from 'react';
import classes from './news.module.css';
import NewsItem from './NewsItem/newsItem';
import SectionHeader from '../UI/SectionHeader/sectionHeader';

const news = (props) => (
    <div>
        <SectionHeader>آخرین اخبار</SectionHeader>
        <div className={classes.News}> 
            <NewsItem 
            id='1'
            title='تولید کننده لورم ایپسوم' abstract='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' 
            publishDate='1399/01/31' link='/news1'/>
            <NewsItem 
            title='تولید کننده لورم ایپسوم' abstract='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' 
            publishDate='1399/01/31' link='/news1'/>
        </div>
    </div>
);
export default news