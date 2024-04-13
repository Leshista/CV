import { NavLink } from 'react-router-dom';

import classes from './css/Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.nameTyping}></div>
            <nav className={classes.nav}>
                <NavLink to='/CV/' className={classes.nav__item}>Обо мне</NavLink>
                <NavLink to='portfolio' className={classes.nav__item}>Портфолио</NavLink>
                <NavLink to='courses' className={classes.nav__item}>Курсы</NavLink>
            </nav>
            <div className={classes.burger}>
                <div className={classes.burger__stripe}></div>
                <div className={classes.burger__stripe}></div>
                <div className={classes.burger__stripe}></div>
            </div>
        </header>
    )
}

export default Header;