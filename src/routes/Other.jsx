import classes from './css/Other.module.css'

const Other = () => {

    return (
        <>
            <div className={classes.other__Wrapper}>
                <div className={classes.letter__Wrapper}>
                    <iframe className={classes.letter} src="https://docs.google.com/document/d/e/2PACX-1vQ71x2qgjncLPy75TVa5xPVhTJJHeVUQOZ5MYo6R1mKAYXO7kK9PYCvezuCCL89nA/pub?embedded=true"></iframe>
                </div>
            </div>
        </>
    )
}

export default Other;