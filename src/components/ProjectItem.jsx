import { Link } from 'react-router-dom';
import classes from './css/ProjectItem.module.css'
import projectProvider from '../UI/projectProvider';

const ProjectItem = ({ projectId }) => {
    const image = projectProvider(projectId, 'image')
    console.log(image)
    return (
        <Link to={`${projectId}`}><div className={classes.project__Wrapper}>
            <h2 className={classes.project__Title}>{projectProvider(projectId, 'title')}</h2>
            <img src={projectProvider(projectId, 'image')} className={classes.project__Img}></img>
            <h3 className={classes.project__SubTitle}>{projectProvider(projectId, 'subtitle')}</h3>
        </div></Link>
    )
}

export default ProjectItem;