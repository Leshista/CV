import { useSelector } from 'react-redux';

export const textEn = {
    aboutMe: 'About me',
    portfolio: 'Portfolio',
    courses: 'Courses',
};

export const textRu = {
    aboutMe: 'Обо мне',
    portfolio: 'Портфолио',
    courses: 'Курсы',
};

const textProvider = (text) => {
    const CurrentLanguage = useSelector((state) => state.lang.language);
    switch (CurrentLanguage) {
        case 'en':
            return textEn[text];
        case 'ru':
            return textRu[text];
        default:
            break;
    }
};

export default textProvider;
