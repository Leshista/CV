import classes from './css/Experience.module.css'
import mainPhoto from './images/stanislav.jpg'
import textProvider from '../UI/textProvider';
import WorkItem from '../components/WorkItem';
import EducationItem from '../components/EducationItem';

const Experience = () => {
    return (
        <article className={classes.experienceWrapper}>
            <aside className={classes.leftSide}>
                <img src={mainPhoto} alt="main photo" className={classes.mainPhoto} />
                <div className={classes.skills__wrapper}>
                    <h3 className={classes.skills__title}>{textProvider('hardSkills')}</h3>
                    <ul className={classes.hardSkills__list}>
                        <li className={classes.skills__item}>{ textProvider('html') }</li>
                        <li className={classes.skills__item}>{ textProvider('css') }</li>
                        <li className={classes.skills__item}>{ textProvider('scss') }</li>
                        <li className={classes.skills__item}>{ textProvider('bootstrap') }</li>
                        <li className={classes.skills__item}>{ textProvider('bem') }</li>
                        <li className={classes.skills__item}>{ textProvider('jquery') }</li>
                        <li className={classes.skills__item}>{ textProvider('js') }</li>
                        <li className={classes.skills__item}>{ textProvider('ts') }</li>
                        <li className={classes.skills__item}>{ textProvider('react') }</li>
                        <li className={classes.skills__item}>{ textProvider('reactRouter') }</li>
                        <li className={classes.skills__item}>{ textProvider('redux') }</li>
                        <li className={classes.skills__item}>{ textProvider('reduxToolkit') }</li>
                        <li className={classes.skills__item}>{ textProvider('git') }</li>
                        <li className={classes.skills__item}>{ textProvider('gitHub') }</li>
                        <li className={classes.skills__item}>{ textProvider('english') }</li>
                    </ul>
                    <h3 className={classes.skills__title}>{ textProvider('softSkills') }</h3>
                    <ul className={classes.softSkills__list}>
                        <li className={classes.skills__item}>{ textProvider('fastLearner') }</li>
                        <li className={classes.skills__item}>{ textProvider('canGoogle') }</li>
                        <li className={classes.skills__item}>{ textProvider('highlyMotivated') }</li>
                        <li className={classes.skills__item}>{ textProvider('teamWorker') }</li>
                        <li className={classes.skills__item}>{ textProvider('sociable') }</li>
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
                    <WorkItem workName={textProvider('job1Name')} workYears='2022-2024' workReq1={textProvider('job1Requirment1')} workReq2={textProvider('job1Requirment2')} workReq3={textProvider('job1Requirment3')} workReq4={textProvider('job1Requirment4')}/>
                    <WorkItem workName={textProvider('job2Name')} workYears='2020-2022' workReq1={textProvider('job2Requirment1')} workReq2={textProvider('job2Requirment2')} workReq3={textProvider('job2Requirment3')}/>
                    <WorkItem workName={textProvider('job4Name')} workYears='2021' workReq1={textProvider('job4Requirment1')} workReq2={textProvider('job4Requirment2')} workReq3={textProvider('job4Requirment3')} workReq4={textProvider('job4Requirment4')}/>
                    <WorkItem workName={textProvider('job3Name')} workYears='2020' workReq1={textProvider('job3Requirment1')} workReq2={textProvider('job3Requirment2')} workReq3={textProvider('job3Requirment3')} workReq4={textProvider('job3Requirment4')}/>
                    <WorkItem workName={textProvider('job5Name')} workYears='2017-2022' workReq1={textProvider('job5Requirment1')} workReq2={textProvider('job5Requirment2')} workReq3={textProvider('job5Requirment3')} workReq4={textProvider('job5Requirment4')}/>
                </section>
                <section className={classes.education}>
                    <h2 className={classes.rightSide__title}>{ textProvider('education') + ':' }</h2>
                    <EducationItem educTitle={textProvider('education1Name')} educYears='2016-2019' educProfession={textProvider('education1Profession')}/>
                    <EducationItem educTitle={textProvider('education2Name')} educYears='2019-2020' educProfession={textProvider('education2Profession')}/>
                </section>
            </main>
        </article>
    )
}

export default Experience;