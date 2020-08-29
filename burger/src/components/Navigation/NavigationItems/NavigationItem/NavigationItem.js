import React from 'react';
import classes from './navigationItem.css';

const navigationItem = () => (
    <li className={classes.NavigationItem}><a href=''>{props.children}</a></li>
)

export default navigationItem;