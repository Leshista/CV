import classes from './css/LanguageSwitcher.module.css'
import flagEN from './images/en.png'
import flagRU from './images/ru.png'
import { langActions } from '../store/lang';
import { useDispatch } from 'react-redux';


const LanguageSwitcher = ({isFixed}) => {
    const dispatch = useDispatch()
    const languageToEnHandler = () => dispatch(langActions.toggleLangEn())
    const languageToRuHandler = () => dispatch(langActions.toggleLangRu())

    return (
        <div className={!isFixed ? classes.languageSwitcher__Wrapper : classes.languageSwitcher__Wrapper_Fixed}>
            <img src={flagRU} className={classes.languageSwitcher} onClick={languageToRuHandler}></img>
            <img src={flagEN} className={classes.languageSwitcher} onClick={languageToEnHandler}></img>
        </div>
    )
}

export default LanguageSwitcher;