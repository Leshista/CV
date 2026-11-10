import classes from './css/Experience.module.css'
import mainPhoto from './images/stanislav.jpg'
import ghLogo from '../components/images/gh.png'
import tgLogo from '../components/images/tg.png'
import textProvider from '../UI/textProvider';
import WorkItem from '../components/WorkItem';
import EducationItem from '../components/EducationItem';

const Experience = () => {

    return (
        <article className={classes.experienceWrapper}>
            <aside className={classes.leftSide}>
                <div className={classes.photoBlock}>
                    <img src={mainPhoto} alt="Stanislav Aleshin" className={classes.mainPhoto} />
                    <div className={classes.contacts}>
                        <a href='mailto:a.leshista@gmail.com' className={classes.contacts__email}>a.leshista@gmail.com</a>
                        <div className={classes.contacts__links}>
                            <a href="https://github.com/Leshista" target='_blank' rel='noreferrer'><img src={ghLogo} alt="GitHub" /></a>
                            <a href="https://t.me/Leshista" target='_blank' rel='noreferrer'><img src={tgLogo} alt="Telegram" /></a>
                        </div>
                    </div>
                </div>
                <div className={classes.skills__wrapper}>
                    <h3 className={classes.skills__title}>{textProvider('hardSkills')}</h3>
                    <ul className={classes.hardSkills__list}>
                        <li className={classes.skills__item}>{ textProvider('html') }</li>
                        <li className={classes.skills__item}>{ textProvider('css') }</li>
                        <li className={classes.skills__item}>{ textProvider('scss') }</li>
                        <li className={classes.skills__item}>{ textProvider('bem') }</li>
                        <li className={classes.skills__item}>{ textProvider('bootstrap') }</li>
                        <li className={classes.skills__item}>{ textProvider('jquery') }</li>
                        <li className={classes.skills__item}>{ textProvider('js') }</li>
                        <li className={classes.skills__item}>{ textProvider('ts') }</li>
                        <li className={classes.skills__item}>{ textProvider('react') }</li>
                        <li className={classes.skills__item}>{ textProvider('reactRouter') }</li>
                        <li className={classes.skills__item}>{ textProvider('reduxToolkit') }</li>
                        <li className={classes.skills__item}>{ textProvider('astro') }</li>
                        <li className={classes.skills__item}>{ textProvider('git') }</li>
                        <li className={classes.skills__item}>{ textProvider('gitHub') }</li>
                        <li className={classes.skills__item}>{ textProvider('figma') }</li>
                        <li className={classes.skills__item}>{ textProvider('php') }</li>
                        <li className={classes.skills__item}>{ textProvider('aiTools') }</li>
                        <li className={classes.skills__item}>{ textProvider('english') }</li>
                    </ul>
                    <h3 className={classes.skills__title}>{ textProvider('softSkills') }</h3>
                    <ul className={classes.softSkills__list}>
                        <li className={classes.skills__item}>{ textProvider('fastLearner') }</li>
                        <li className={classes.skills__item}>{ textProvider('problemSolver') }</li>
                        <li className={classes.skills__item}>{ textProvider('teamWorker') }</li>
                        <li className={classes.skills__item}>{ textProvider('mentoring') }</li>
                    </ul>
                </div>
            </aside>
            <main className={classes.rightSide}>
                <section className={classes.aboutMe}>
                    <h1 className={classes.aboutMe__title}>{ textProvider('name') }</h1>
                    <h2 className={classes.aboutMe__subTitle}>{ textProvider('profession') }</h2>
                </section>
                <section className={classes.summary}>
                    <h2 className={classes.rightSide__title}>{ textProvider('aboutMe') + ':' }</h2>
                    <p className={classes.summary__text}>{ textProvider('myExperience') }</p>
                </section>
                <section className={classes.workExperience}>
                    <h2 className={classes.rightSide__title}>{ textProvider('wasWorkingAs') + ':' }</h2>
                    <WorkItem workName={textProvider('job1')['name']} workYears={textProvider('job1')['years']} workReqs={textProvider('job1')['requirements']} />
                    <WorkItem workName={textProvider('job2')['name']} workYears={textProvider('job2')['years']} workReqs={textProvider('job2')['requirements']}/>
                    <WorkItem workName={textProvider('job3')['name']} workYears={textProvider('job3')['years']} workReqs={textProvider('job3')['requirements']}/>
                </section>
                <section className={classes.education}>
                    <h2 className={classes.rightSide__title}>{ textProvider('education') + ':' }</h2>
                    <EducationItem educTitle={textProvider('education1')['name']} educYears='2016-2019' educProfession={textProvider('education1')['profession']}/>
                    <EducationItem educTitle={textProvider('education2')['name']} educYears='2019-2020' educProfession={textProvider('education2')['profession']}/>
                </section>
            </main>
        </article>
    )
}

export default Experience;
