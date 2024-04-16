import { Link } from 'react-router-dom';
import classes from './css/ProjectItem.module.css'
import projectProvider from '../UI/projectProvider';

const ProjectItem = ({projectId}) => {
    return (
        <div className={classes.project__Wrapper}>
            <Link to={`${projectId}`}><h2 className={classes.project__Title}>{projectProvider(projectId, 'title')}</h2></Link>
            <Link to={`${projectId}`}><img src={projectProvider(projectId, 'image')} className={classes.projectImg}></img></Link>
            <h3 className={classes.project__SubTitle}>{projectProvider(projectId, 'subtitle')}</h3>
        </div>
    )
}

export default ProjectItem;