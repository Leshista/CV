import classes from './css/Portfolio.module.css'
import Divider from '../components/Divider'
import ProjectItem from '../components/ProjectItem';
import textProvider from '../UI/textProvider';
import { Outlet } from 'react-router-dom';

const Portfolio = () => {
    return (
        <>
            <article className={classes.portfolioWrapper}>
                <Divider dividerType='upsideDown' dividerNumber={2} />
                <h1 className={classes.portfolioTitle}>{ textProvider('myProjects') }</h1>
                <section className={classes.projectList}>
                    <ProjectItem projectId={1} />
                </section>
                <Divider dividerType='bottom' dividerNumber={3}/>
            </article>
            <Outlet/>
        </>
    )
}

export default Portfolio;