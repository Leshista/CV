import classes from './css/EducationItem.module.css'

const EducationItem = ({educTitle, educYears, educProfession}) => {
    return (
        <div className={classes.educationItem}>
            <h3 className={classes.educationItem__title}>{ educTitle }</h3>
            <p className={classes.educationItem__years}>{ educYears }</p>
            <p className={classes.educationItem__profession}>{ educProfession }</p>
        </div>
    )
}

export default EducationItem;