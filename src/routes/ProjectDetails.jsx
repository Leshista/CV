import { useEffect } from 'react';
import classes from './css/ProjectDetails.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import projectProvider from '../UI/projectProvider';
import textProvider from '../UI/textProvider'
import ghLogo from '../components/images/gh.png'

const ProjectDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const features = projectProvider(params.id, 'features') || [];
    const image = projectProvider(params.id, 'image');
    const github = projectProvider(params.id, 'github');
    const githubPages = projectProvider(params.id, 'githubPages');
    const title = projectProvider(params.id, 'title');

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                navigate('..');
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [navigate]);

    return (
        <>
        <Link className={classes.projectDetails__Backdrop} to=".."></Link>
            <dialog className={classes.projectDetails__Wrapper} open>
                <Link to='..' className={classes.projectDetails__Close}>X</Link>
                {githubPages ? (
                    <a href={githubPages} target='_blank' rel='noreferrer'><img className={classes.projectDetails__Image} src={image} alt={title}></img></a>
                ) : (
                    <img className={classes.projectDetails__Image} src={image} alt={title}></img>
                )}
                <p className={classes.project__Techs}>{ textProvider('techsUsed') + ': ' }{projectProvider(params.id, 'techs')}</p>
                <ol className={features.length > 4 ? classes.projectDetails__List_TwoRows : classes.projectDetails__List}>
                    {features.map((feature, index) => <li className={classes.projectDetails__Item} key={index}>{feature}</li>)}
                </ol>
                <div className={classes.projectDetails__Actions}>
                    {githubPages && (
                        <a href={githubPages} target='_blank' rel='noreferrer' className={classes.projectDetails__Action}>{textProvider('openProject')}</a>
                    )}
                    {github && (
                        <a href={github} target='_blank' rel='noreferrer' className={classes.projectDetails__Action}>{textProvider('sourceCode')}</a>
                    )}
                </div>
                {github && (
                <div className={classes.github__Wrapper}>
                <a href={github} target='_blank' rel='noreferrer'><img src={ghLogo} className={classes.github__Logo} alt=""></img></a>
                <a href={github} target='_blank' rel='noreferrer' className={classes.github__Link}><span>{github}</span></a>
                </div>
                )}
            </dialog>
        </>
    )
}

export default ProjectDetails
