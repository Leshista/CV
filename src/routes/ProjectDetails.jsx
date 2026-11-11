import { useEffect, useState } from 'react';
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
    const gallery = projectProvider(params.id, 'images');
    const github = projectProvider(params.id, 'github');
    const githubPages = projectProvider(params.id, 'githubPages');
    const title = projectProvider(params.id, 'title');
    const contribution = projectProvider(params.id, 'contribution');
    const slides = gallery && gallery.length
        ? gallery
        : (image ? [{ src: image, caption: '' }] : []);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, [params.id]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                navigate('..');
                return;
            }
            if (slides.length < 2) {
                return;
            }
            if (event.key === 'ArrowRight') {
                setIndex((current) => (current + 1) % slides.length);
            }
            if (event.key === 'ArrowLeft') {
                setIndex((current) => (current - 1 + slides.length) % slides.length);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [navigate, slides.length]);

    const current = slides[index] || {};
    const showGalleryNav = slides.length > 1;

    const goPrev = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
    };

    const goNext = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIndex((currentIndex) => (currentIndex + 1) % slides.length);
    };

    const picture = (
        <img className={classes.projectDetails__Image} src={current.src} alt={current.caption || title}></img>
    );

    return (
        <>
        <Link className={classes.projectDetails__Backdrop} to=".."></Link>
            <dialog className={classes.projectDetails__Wrapper} open>
                <Link to='..' className={classes.projectDetails__Close}>X</Link>
                <div className={classes.projectDetails__Body}>
                <div className={classes.projectDetails__Gallery}>
                    {showGalleryNav && (
                        <button type="button" className={`${classes.projectDetails__Arrow} ${classes.projectDetails__Arrow_Prev}`} onClick={goPrev} aria-label="Previous screenshot">‹</button>
                    )}
                    {githubPages && !showGalleryNav ? (
                        <a href={githubPages} target='_blank' rel='noreferrer'>{picture}</a>
                    ) : picture}
                    {showGalleryNav && (
                        <button type="button" className={`${classes.projectDetails__Arrow} ${classes.projectDetails__Arrow_Next}`} onClick={goNext} aria-label="Next screenshot">›</button>
                    )}
                </div>
                {current.caption ? (
                    <p className={classes.projectDetails__Caption}>{current.caption}</p>
                ) : null}
                {showGalleryNav && (
                    <div className={classes.projectDetails__Thumbs}>
                        {slides.map((slide, slideIndex) => (
                            <button
                                type="button"
                                key={`${slide.caption}-${slideIndex}`}
                                className={slideIndex === index ? `${classes.projectDetails__Thumb} ${classes.projectDetails__Thumb_Active}` : classes.projectDetails__Thumb}
                                onClick={() => setIndex(slideIndex)}
                                aria-label={slide.caption || `${slideIndex + 1}`}
                            >
                                <img src={slide.src} alt="" className={classes.projectDetails__ThumbImg}></img>
                            </button>
                        ))}
                    </div>
                )}
                <p className={classes.project__Techs}>{ textProvider('techsUsed') + ': ' }{projectProvider(params.id, 'techs')}</p>
                {contribution && (
                    <p className={classes.projectDetails__Contribution}><span>{textProvider('myContribution')}:</span> {contribution}</p>
                )}
                <ol className={features.length > 4 ? classes.projectDetails__List_TwoRows : classes.projectDetails__List}>
                    {features.map((feature, featureIndex) => <li className={classes.projectDetails__Item} key={featureIndex}>{feature}</li>)}
                </ol>
                {(githubPages || github) && (
                <div className={classes.projectDetails__Actions}>
                    {githubPages && (
                        <a href={githubPages} target='_blank' rel='noreferrer' className={classes.projectDetails__Action}>{textProvider('openProject')}</a>
                    )}
                    {github && (
                        <a href={github} target='_blank' rel='noreferrer' className={classes.projectDetails__Action}>{textProvider('sourceCode')}</a>
                    )}
                </div>
                )}
                {github && (
                <div className={classes.github__Wrapper}>
                <a href={github} target='_blank' rel='noreferrer'><img src={ghLogo} className={classes.github__Logo} alt=""></img></a>
                <a href={github} target='_blank' rel='noreferrer' className={classes.github__Link}><span>{github}</span></a>
                </div>
                )}
                </div>
            </dialog>
        </>
    )
}

export default ProjectDetails
