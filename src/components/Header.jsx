import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { langActions } from '../store/lang';
import textProvider from '../UI/textProvider';
import classes from './css/Header.module.css'

const Header = () => {
    const dispatch = useDispatch()
    const languageToEnHandler = () => dispatch(langActions.toggleLangEn())
    const languageToRuHandler = () => dispatch(langActions.toggleLangRu())

    return (
        <header className={classes.header}>
            <div className={classes.nameTyping}></div>
            <nav className={classes.nav}>
                <NavLink to='/CV/' className={({ isActive })=> isActive ? classes.nav__item_active : classes.nav__item} end>{ textProvider('aboutMe') }</NavLink>
                <NavLink to='portfolio' className={({ isActive })=> isActive ? classes.nav__item_active : classes.nav__item}>{ textProvider('portfolio') }</NavLink>
                <NavLink to='courses' className={({ isActive })=> isActive ? classes.nav__item_active : classes.nav__item}>{ textProvider('courses') }</NavLink>
            </nav>
            <button onClick={languageToRuHandler}>Ru</button>
            <button onClick={languageToEnHandler}>En</button>
            <div className={classes.burger}>
                <div className={classes.burger__stripe}></div>
                <div className={classes.burger__stripe}></div>
                <div className={classes.burger__stripe}></div>
            </div>
        </header>
    )
}

export default Header;