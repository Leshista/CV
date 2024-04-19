import classes from './css/Other.module.css'
import Divider from '../components/Divider';
import textProvider from '../UI/textProvider'

const Other = () => {

    return (
        <>
            <article className={classes.other__Wrapper}>
                <Divider dividerType='upsideDown' dividerNumber={4} />
                <h1 className={classes.other__Title}>{textProvider('recommendationLetter')}</h1>
                <div className={classes.letter__Wrapper}>
                    <iframe className={classes.letter} src="https://docs.google.com/document/d/e/2PACX-1vQ71x2qgjncLPy75TVa5xPVhTJJHeVUQOZ5MYo6R1mKAYXO7kK9PYCvezuCCL89nA/pub?embedded=true"></iframe>
                </div>
                <Divider dividerType='bottomUpsideDown' dividerNumber={5} />
            </article>
        </>
    )
}

export default Other;