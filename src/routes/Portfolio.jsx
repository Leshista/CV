import classes from './css/Portfolio.module.css'
import Divider from '../components/Divider'
import ProjectItem from '../components/ProjectItem';
import textProvider from '../UI/textProvider';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { hiddenProjectActions } from '../store/hiddenProject';

const Portfolio = () => {
    const hiddenProjectIsVisible = useSelector(state => state.hiddenProject.isVisible)
    const dispatch = useDispatch();
    const toggleHiddenProject = () => {
        dispatch(hiddenProjectActions.toggleHiddenProject())
    }

    return (
        <>
            <article className={classes.portfolio__Wrapper}>
                <Divider dividerType='upsideDown' dividerNumber={2} />
                <h1 className={classes.portfolio__Title}>{ textProvider('myProjects') }</h1>
                <section className={classes.project__List}>
                    <ProjectItem projectId={'AtWork'} />
                    <ProjectItem projectId={'CV'} />
                    <ProjectItem projectId={'ComfyJournal'} />
                    <ProjectItem projectId={'ToDoList'} />
                    <ProjectItem projectId={'LoremIpsum.net'} />
                    <ProjectItem projectId={'CNN'} />
                    <ProjectItem projectId={'IndexPage'} />
                    {hiddenProjectIsVisible && <ProjectItem projectId={'Quest'} />}
                </section>
                <Divider dividerType='bottom' dividerNumber={3} />
            </article>
                <div className={classes.project__ToggleHiddenProject} onClick={toggleHiddenProject}></div>
            <Outlet/>
        </>
    )
}

export default Portfolio;