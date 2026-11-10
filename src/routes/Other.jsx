import classes from './css/Other.module.css'
import Divider from '../components/Divider';
import textProvider from '../UI/textProvider'

const LETTER_EMBED_SRC = 'https://docs.google.com/document/d/e/2PACX-1vQ71x2qgjncLPy75TVa5xPVhTJJHeVUQOZ5MYo6R1mKAYXO7kK9PYCvezuCCL89nA/pub?embedded=true'
const LETTER_OPEN_HREF = 'https://docs.google.com/document/d/e/2PACX-1vQ71x2qgjncLPy75TVa5xPVhTJJHeVUQOZ5MYo6R1mKAYXO7kK9PYCvezuCCL89nA/pub'

const Other = () => {

    return (
        <>
            <article className={classes.other__Wrapper}>
                <Divider dividerType='upsideDown' dividerNumber={4} />
                <h1 className={classes.other__Title}>{textProvider('recommendationLetter')}</h1>
                <p className={classes.letter__Source}>{textProvider('recommendationLetterSource')}</p>
                <a className={classes.letter__Open} href={LETTER_OPEN_HREF} target='_blank' rel='noreferrer'>{textProvider('openLetter')}</a>
                <div className={classes.letter__Wrapper}>
                    <iframe className={classes.letter} title={textProvider('recommendationLetter')} src={LETTER_EMBED_SRC}></iframe>
                </div>
                <Divider dividerType='bottomUpsideDown' dividerNumber={5} />
            </article>
        </>
    )
}

export default Other
