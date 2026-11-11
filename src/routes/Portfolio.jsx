import classes from './css/Portfolio.module.css'
import Divider from '../components/Divider'
import ProjectItem from '../components/ProjectItem';
import textProvider from '../UI/textProvider';
import { Outlet } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <article className={classes.portfolio__Wrapper}>
                <Divider dividerType='upsideDown' dividerNumber={2} />
                <h1 className={classes.portfolio__Title}>{ textProvider('commercialProjects') }</h1>
                <p className={classes.portfolio__Intro}>{ textProvider('commercialProjectsIntro') }</p>
                <section className={classes.project__List_Commercial}>
                    <ProjectItem projectId={'GamePlatform'} />
                    <ProjectItem projectId={'AdLandings'} />
                </section>
                <h2 className={classes.portfolio__Title}>{ textProvider('myProjects') }</h2>
                <section className={classes.project__List}>
                    <ProjectItem projectId={'AtWork'} />
                    <ProjectItem projectId={'CV'} />
                    <ProjectItem projectId={'ComfyJournal'} />
                    <ProjectItem projectId={'LoremIpsum.net'} />
                </section>
                <h2 className={classes.portfolio__StudyTitle}>{ textProvider('studyProjects') }</h2>
                <section className={classes.project__List_Study}>
                    <ProjectItem projectId={'ToDoList'} compact />
                    <ProjectItem projectId={'CNN'} compact />
                    <ProjectItem projectId={'IndexPage'} compact />
                    <ProjectItem projectId={'Quest'} compact />
                </section>
                <Divider dividerType='bottom' dividerNumber={3} />
            </article>
            <Outlet/>
        </>
    )
}

export default Portfolio
