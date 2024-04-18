import classes from './css/BurgerMenu.module.css'
import { useDispatch } from 'react-redux'
import textProvider from '../UI/textProvider'
import { burgerActions } from '../store/burger'
import { useNavigate } from 'react-router-dom'
import LanguageSwitcher from './languageSwitcher'

const BurgerMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const linkClickHandler = (event) => {
        const whereTo = event.target.getAttribute('destination')
        dispatch(burgerActions.toggleBurgerVisibility())
        navigate(whereTo)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <LanguageSwitcher isFixed={true}/>
            <div className={classes.burgerMenu__Backdrop}></div>
            <div className={classes.burgerMenu__Wrapper}>
                <ol className={classes.burgerMenu__List}>
                    <li className={classes.burgerMenu__Item} destination='/CV/' onClick={linkClickHandler}>{ textProvider('aboutMe') }</li>
                    <li className={classes.burgerMenu__Item} destination='portfolio' onClick={linkClickHandler}>{ textProvider('portfolio') }</li>
                    <li className={classes.burgerMenu__Item} destination='other' onClick={linkClickHandler}>{ textProvider('other') }</li>
                </ol>
            </div>
        </>
    )
}

export default BurgerMenu