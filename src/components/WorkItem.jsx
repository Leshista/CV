import classes from './css/WorkItem.module.css'
import textProvider from '../UI/textProvider';

const WorkItem = ({ workName, workYears, workReqs }) => {

    return (
        <div className={classes.workItem}>
            <h3 className={classes.workItem__title}>{workName}</h3>
            <p className={classes.workItem__years}>{workYears}</p>
            <p className={classes.workItem__subtitle}>{ textProvider('jobRequirments') }</p>
            <ul className={classes.workItem__list}>
                {workReqs.map(req => <li className={classes.workItem__item} key={workReqs.indexOf(req)}>{req}</li>)}
            </ul>
        </div>
    )
}

export default WorkItem;