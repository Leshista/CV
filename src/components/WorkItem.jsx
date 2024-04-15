import classes from './css/WorkItem.module.css'
import textProvider from '../UI/textProvider';

const WorkItem = ({workName, workYears, workReq1, workReq2, workReq3, workReq4 = null}) => {
    return (
        <div className={classes.workItem}>
            <h3 className={classes.workItem__title}>{workName}</h3>
            <p className={classes.workItem__years}>{workYears}</p>
            <p className={classes.workItem__subtitle}>{ textProvider('jobRequirments') }</p>
            <ul className={classes.workItem__list}>
                <li className={classes.workItem__item}>{workReq1}</li>
                <li className={classes.workItem__item}>{workReq2}</li>
                <li className={classes.workItem__item}>{workReq3}</li>
                <li className={classes.workItem__item}>{workReq4}</li>
            </ul>
        </div>
    )
}

export default WorkItem;