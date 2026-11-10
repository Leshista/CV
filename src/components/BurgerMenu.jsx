import { useEffect } from 'react'
import classes from './css/BurgerMenu.module.css'
import { useDispatch } from 'react-redux'
import textProvider from '../UI/textProvider'
import { burgerActions } from '../store/burger'
import { useNavigate } from 'react-router-dom'
import LanguageSwitcher from './languageSwitcher'

const BurgerMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeMenu = () => {
        dispatch(burgerActions.toggleBurgerVisibility())
    }

    const linkClickHandler = (event) => {
        const whereTo = event.currentTarget.getAttribute('data-destination')
        closeMenu()
        navigate(whereTo)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                dispatch(burgerActions.toggleBurgerVisibility())
            }
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [dispatch])

    return (
        <>
            <LanguageSwitcher isFixed={true}/>
            <div className={classes.burgerMenu__Backdrop}></div>
            <div className={classes.burgerMenu__Wrapper}>
                <ol className={classes.burgerMenu__List}>
                    <li className={classes.burgerMenu__Item} data-destination='/' onClick={linkClickHandler}>{ textProvider('aboutMe') }</li>
                    <li className={classes.burgerMenu__Item} data-destination='/portfolio' onClick={linkClickHandler}>{ textProvider('portfolio') }</li>
                    <li className={classes.burgerMenu__Item} data-destination='/other' onClick={linkClickHandler}>{ textProvider('other') }</li>
                </ol>
            </div>
        </>
    )
}

export default BurgerMenu
