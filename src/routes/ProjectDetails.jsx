import classes from './css/ProjectDetails.module.css'
import { Link, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const params = useParams();

    return (
        <div className={classes.projectDetails__Backdrop}>
            <dialog className={classes.projectDetails__Wrapper} open>
                <Link to='..' className={classes.projectDetails__close}>X</Link>
                <h1>{params.id}</h1>
            </dialog>
        </div>
    )
}

export default ProjectDetails;