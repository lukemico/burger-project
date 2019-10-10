import React from 'react';

import Logo from '../../Logo/Logo';
import NavigtionItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    // ...
    return(
        <div className={classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigtionItems />s
            </nav>
        </div>
    );
};

export default sideDrawer