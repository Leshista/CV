import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { burgerActions } from '../store/burger'
import textProvider from '../UI/textProvider';
import classes from './css/Header.module.css'
import LanguageSwitcher from './languageSwitcher';

const Header = () => {
    const dispatch = useDispatch();
    const burgerToggleHandler = () => {
        dispatch(burgerActions.toggleBurgerVisibility())
    }

    return (
        <header className={classes.header}>
            <div className={classes.nameTyping}></div>
            <nav className={classes.nav}>
                <NavLink to='/CV/' className={({ isActive })=> isActive ? classes.nav__item_active : classes.nav__item} end>{ textProvider('aboutMe') }</NavLink>
                <NavLink to='portfolio' className={({ isActive })=> isActive ? classes.nav__item_active : classes.nav__item}>{ textProvider('portfolio') }</NavLink>
                <NavLink to='other' className={({ isActive })=> isActive ? classes.nav__item_active : classes.nav__item}>{ textProvider('other') }</NavLink>
            </nav>
            <LanguageSwitcher isFixed={false}/>
            <div className={classes.burger} onClick={burgerToggleHandler}>
                <div className={classes.burger__Stripe}></div>
                <div className={classes.burger__Stripe}></div>
                <div className={classes.burger__Stripe}></div>
            </div>
        </header>
    )
}

export default Header;