import React from 'react';
import classes from './aboutUsItem.module.css';
import AboutUsImg1 from '../../../assets/img/aboutUs1.jpg';
import AboutUsImg2 from '../../../assets/img/aboutUs2.jpg';

const aboutUsItem = (props) => (
    
        
        <div className={classes.AboutUsItem}>
            <img src={ props.id === '1' ? AboutUsImg1:AboutUsImg2} />
            <div className={classes.Cover}>
                
            </div>
            <p>{props.title}</p>
        </div>
       
   
);
export default aboutUsItem