import classes from './css/ProjectDetails.module.css'
import { Link, useParams } from 'react-router-dom';
import projectProvider from '../UI/projectProvider';

const ProjectDetails = () => {
    const params = useParams();
    const features = projectProvider(params.id, 'features');

    return (
        <div className={classes.projectDetails__Backdrop}>
            <dialog className={classes.projectDetails__Wrapper} open>
                <Link to='..' className={classes.projectDetails__close}>X</Link>
                <ul>
                    {features.map(feature => <li key={features.indexOf(feature)}>{feature}</li>)}
                </ul>
            </dialog>
        </div>
    )
}

export default ProjectDetails;