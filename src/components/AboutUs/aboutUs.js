import React from 'react';
import classes from './aboutUs.module.css';
import AboutUsItem from './AboutUsItem/aboutUsItem';
import SectionHeader from '../UI/SectionHeader/sectionHeader';
const aboutUs = () => (
    <div>
        <SectionHeader>درباره مدرسه</SectionHeader>
        <div className={classes.AboutUs}>
            <AboutUsItem id='1' title='محیطی شاد و آرام' />
            <AboutUsItem id='2' title='دبیرانی دلسوز و با سابقه' />
        </div>
    </div>
);
export default aboutUs