import classes from './css/Footer.module.css'
import ghLogo from './images/gh.png'
import tgLogo from './images/tg.png'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <a href='mailto:a.leshista@gmail.com' className={classes.email}>a.leshista@gmail.com</a>
            <section className={classes.links}>
                <a href="https://github.com/Leshista"><img src={ghLogo} alt="Github link"></img></a>
                <a href="https://t.me/Leshista"><img src={tgLogo} alt="Telegram link"></img></a>
            </section>
        </footer>
    )
}

export default Footer;