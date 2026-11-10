import classes from './css/LanguageSwitcher.module.css'
import flagEN from './images/en.png'
import flagRU from './images/ru.png'
import { langActions } from '../store/lang';
import { useDispatch } from 'react-redux';


const LanguageSwitcher = ({isFixed}) => {
    const dispatch = useDispatch()
    const languageToEnHandler = () => {
        dispatch(langActions.toggleLangEn())
        document.documentElement.lang = 'en'
    }
    const languageToRuHandler = () => {
        dispatch(langActions.toggleLangRu())
        document.documentElement.lang = 'ru'
    }

    return (
        <div className={!isFixed ? classes.languageSwitcher__Wrapper : classes.languageSwitcher__Wrapper_Fixed}>
            <button type="button" className={classes.languageSwitcherButton} onClick={languageToRuHandler} aria-label="Русский">
                <img src={flagRU} className={classes.languageSwitcher} alt="" />
            </button>
            <button type="button" className={classes.languageSwitcherButton} onClick={languageToEnHandler} aria-label="English">
                <img src={flagEN} className={classes.languageSwitcher} alt="" />
            </button>
        </div>
    )
}

export default LanguageSwitcher
