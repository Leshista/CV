import classes from './css/ProjectDetails.module.css'
import { Link, useParams } from 'react-router-dom';
import projectProvider from '../UI/projectProvider';
import textProvider from '../UI/textProvider'
import ghLogo from '../components/images/gh.png'

const ProjectDetails = () => {
    const params = useParams();
    const features = projectProvider(params.id, 'features');
    const image = projectProvider(params.id, 'image');
    const github = projectProvider(params.id, 'github');
    const githubPages = projectProvider(params.id, 'githubPages');

    return (
        <>
        <Link className={classes.projectDetails__Backdrop} to=".."></Link>
            <dialog className={classes.projectDetails__Wrapper} open>
                <Link to='..' className={classes.projectDetails__Close}>X</Link>
                <a href={githubPages} target='_blank'><img className={classes.projectDetails__Image} src={image}></img></a>
                <p className={classes.project__Techs}>{ textProvider('techsUsed') + ': ' }{projectProvider(params.id, 'techs')}</p>
                <ol className={!features.length > 4 ? classes.projectDetails__List : classes.projectDetails__List_TwoRows}>
                    {features.map(feature => <li className={classes.projectDetails__Item} key={features.indexOf(feature)}>{feature}</li>)}
                </ol>
                <div className={classes.github__Wrapper}>
                <Link to={github}><img src={ghLogo} className={classes.github__Logo}></img></Link>
                <Link to={github} className={classes.github__Link}><span>{github}</span></Link>
                </div>
            </dialog>
        </>
    )
}

export default ProjectDetails;