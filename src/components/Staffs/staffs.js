import React from 'react';
import classes from './staffs.module.css';
import Staff from './Staff/staff';
import SectionHeader from '../UI/SectionHeader/sectionHeader';

const staffs = () => (
    <div>
        <SectionHeader>کادر مدرسه</SectionHeader>
        <div className={classes.Staffs}>
            <Staff id='1' fullName='عبدالحمید خزاعی' post='مدیر مدرسه' />
            <Staff id='2' fullName='محبوبه گرگین پور' post='معاون مدرسه' />
            <Staff id='3' fullName='عاطفه شجاعی' post='دبیر هنر' />
        </div>
    </div>
);
export default staffs