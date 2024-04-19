import { Link } from 'react-router-dom';
import classes from './css/ProjectItem.module.css'
import projectProvider from '../UI/projectProvider';

const ProjectItem = ({ projectId }) => {
    const scrollToTopHandler = () => screen.height < 1000 && window.scrollTo(0, 0);
    
    return (
        <Link to={`${projectId}`} onClick={scrollToTopHandler} className={classes.project__Link}>
            <div className={classes.project__Wrapper}>
            <h2 className={classes.project__Title}>{projectProvider(projectId, 'title')}</h2>
            <img src={projectProvider(projectId, 'image')} className={classes.project__Img}></img>
            <h3 className={classes.project__SubTitle}>{projectProvider(projectId, 'subtitle')}</h3>
        </div>
        </Link>
    )
}

export default ProjectItem;