import React from "react";
import { NavLink } from "react-router-dom";
import classes from './header.module.css';


const Header = ()=>{
    return <div className={classes.header}>
    <NavLink to={'./../news'}>news</NavLink>
    
    </div>
}
export default Header;