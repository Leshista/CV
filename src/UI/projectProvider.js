import { useSelector } from 'react-redux';

import mainPhoto from '../routes/images/stanislav.jpg';

const projectsEn = {
    1: {
        title: 'CV SPA',
        image: mainPhoto,
        subtitle: 'Includes Resume, Portfolio, Reccomendation letter etc.',
        techs: 'HTML, CSS, JS, React, React-router, Redux, Redux-ToolKit',
        features: [
            'Client-side routing provides multi-page UX without page reloading',
            'Redux provides real-time language change',
            'CSS animation provides a nice little typing animation',
            'SVG provides smooth curves',
        ],
    },
};

const projectsRu = {
    1: {
        title: '1',
        image: '1',
        subtitle: '1',
        techs: '1',
        features: [],
    },
};

const projectProvider = (projectId, projectElement) => {
    const CurrentLanguage = useSelector((state) => state.lang.language);
    switch (CurrentLanguage) {
        case 'en':
            console.log(projectsEn[projectId]);
            return projectsEn[projectId][projectElement];
        case 'ru':
            return projectsRu[projectId][projectElement];
        default:
            break;
    }
};

export default projectProvider;
