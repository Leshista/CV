import { useSelector } from 'react-redux';

import AtWorkImage from './images/AT-WORK.jpg';
import CVImage from './images/CV.jpg';
import ComfyJournalImage from './images/ComfyJournal.jpg';
import ToDoListImage from './images/ToDoList.jpg';
import LoremIpsumImage from './images/LoremIpsum.jpg';
import CNNImage from './images/CNN.jpg';
import IndexPageImage from './images/IndexPage.jpg';
import QuestImage from './images/Quest.jpg';

const projectsEn = {
    AtWork: {
        title: 'AT-WORK SPA',
        image: AtWorkImage,
        subtitle: 'A test single-page app for applying for React Developer Job',
        techs: 'HTML, CSS, JS, React, React-Router, Redux, Redux-ToolKit',
        features: [
            'There are two routes made using React Router: Index and dynamic Details page',
            'All info in cards is fetched from server, stored in Redux store, then dynamically renders them',
            "Cards' state can be changed by user to three categories: active, archived, hidden",
        ],
        github: 'https://github.com/Leshista/AT-WORK__SPA',
        githubPages: 'https://leshista.github.io/AT-WORK__SPA/',
    },
    CV: {
        title: 'Curriculum Vitae SPA',
        image: CVImage,
        subtitle: 'Includes resume, portfolio, recommendation letter etc.',
        techs: 'HTML, CSS, JS, React, React-Router, Redux, Redux-ToolKit',
        features: [
            'Client-side routing provides multi-page UX without page reloading',
            'Redux provides convenient use of app-level states',
            'CSS animation provides a nice little typing animation',
            'There are smooth SVG curves in the design',
            'Google Drive Iframe is used to provide .doc view',
            'A little easter egg is hidden out there somewhere (:',
        ],
        github: 'https://github.com/Leshista/CV',
        githubPages: 'https://leshista.github.io/CV/',
    },
    ComfyJournal: {
        title: 'Comfy Journal',
        image: ComfyJournalImage,
        subtitle:
            'A simple ToDo app, where user can add, delete, edit and filter tasks',
        techs: 'HTML, CSS, SCSS, JS, TS, React',
        features: [
            'User can execute basic CRUD operations on tasks ',
            'All changes are stored in LocalStorage and are here to stay after reload',
            'After creating multiple tasks user can find the one needed by using implemented task filter',
            'Tasks can have multiple states, such as: yet to be done, in progress and done',
        ],
        github: 'https://github.com/Leshista/infotecs-test',
        githubPages: 'https://leshista.github.io/infotecs-test/',
    },
    ToDoList: {
        title: 'To Do List',
        image: ToDoListImage,
        subtitle:
            'A simpler ToDo app, where user can add, delete and filter tasks',
        techs: 'HTML, CSS, SCSS, JS, TS, React',
        features: [
            'User can create and delete tasks ',
            'All changes are stored in LocalStorage and are here to stay after reload',
            'After creating multiple tasks user can find the one needed by using implemented task filter',
            'Tasks can have two states: yet to be done and done',
        ],
        github: 'https://github.com/Leshista/ReactToDoList',
        githubPages: 'https://leshista.github.io/ReactToDoList/',
    },
    'LoremIpsum.net': {
        title: 'LoremIpsum.net',
        image: LoremIpsumImage,
        subtitle: 'A test land for applying for Layout Developer job',
        techs: 'HTML, CSS, JS, Figma',
        features: [
            'Full layout created from Figma design provided by an employer ',
            'Custom inputs in the form: <select/>, <range/> <input type="file"/>',
            'Working anchor links leading to the form',
        ],
        github: 'https://github.com/Leshista/loremIpsum.net',
        githubPages: 'https://leshista.github.io/loremIpsum.net/',
    },
    CNN: {
        title: 'Static CNN Main Page Snapshot',
        image: CNNImage,
        subtitle:
            'A rather complex page made with help of HTML/CSS/JS tutorial',
        techs: 'HTML, CSS, JS, SCSS, BootStrap, PhotoShop',
        features: [
            'A static snapshot of CNN main page as it was in 2017  ',
            'Extensive use of BootStrap for layout',
            'Functioning (but emply) language selectors and searchbar',
            'Works as intended only on desktop resolutions',
        ],
        github: 'https://github.com/Leshista/CNNStaticCopy/',
        githubPages: 'https://leshista.github.io/CNNStaticCopy/',
    },
    IndexPage: {
        title: 'Index Page of a Blog',
        image: IndexPageImage,
        subtitle: 'A simple yet pretty index page',
        techs: 'HTML, CSS, PhotoShop',
        features: [
            'The page is responsive and looks decent on any resolution',
            'A mocup calendar made as a table is nice',
            'Hover effects on links bring a little bit of life to site',
        ],
        github: 'https://github.com/Leshista/FlexBoxSite/',
        githubPages: 'https://leshista.github.io/FlexBoxSite/',
    },
    Quest: {
        title: 'A Quest for Glory',
        image: QuestImage,
        subtitle: 'Unfinished yet charming little game',
        techs: 'HTML, CSS, JS, SCSS, PhotoPea',
        features: [
            'WORKS ONLY IF LOADED IN RESOLUTION <440px',
            'Background Music',
            'Changing windows',
            'Tilemap that generates differently for different devices (Only mobile version implemented)',
            'Enemy spawn is random for each run',
            'Hero can walk by clicking on a tile or by wasd/arrow keys',
            'You can defeat enemies by clicking on them & earn gold for it',
        ],
        github: 'https://github.com/Leshista/JSGame/',
        githubPages: 'https://leshista.github.io/JSGame/',
    },
};

const projectsRu = {
    AtWork: {
        title: 'AT-WORK SPA',
        image: AtWorkImage,
        subtitle:
            'Тестовое приложение для прохождения задания на позицию React Developer',
        techs: 'HTML, CSS, JS, React, React-Router, Redux, Redux-ToolKit',
        features: [
            'При помощи React Router реализованы два раута: Index и динамичная Details страница',
            'Все данные в карточках загружаются с сервера, хранятся в Redux Store, а затем рендерятся оттуда динамически',
            'Состояние карточки может быть изменено пользователем и может быть одним из трёх: active, archived, hidden',
        ],
        github: 'https://github.com/Leshista/AT-WORK__SPA',
        githubPages: 'https://leshista.github.io/AT-WORK__SPA/',
    },
    CV: {
        title: 'Curriculum Vitae SPA',
        image: CVImage,
        subtitle:
            'Включает в себя резюме, портфолио, рекомендательное письмо и прочее',
        techs: 'HTML, CSS, JS, React, React-Router, Redux, Redux-ToolKit',
        features: [
            'Роутинг на стороне клиента предоставляет многостраничный UX без перезагрузки страницы',
            'Redux предоставляет удобный доступ к нескольким app-level states',
            'Реализована CSS анимация с эффектом печатания',
            'В дизайне использованы SVG элементы',
            'Google Drive Iframe использован для веб-просмотра .doc',
            'Где-то здесь прячется пасхалка (:',
        ],
        github: 'https://github.com/Leshista/CV',
        githubPages: 'https://leshista.github.io/CV/',
    },
    ComfyJournal: {
        title: 'Comfy Journal',
        image: ComfyJournalImage,
        subtitle:
            'Небольшое ToDo приложение, в котором пользователь может добавлять, удалять, изменять и фильтровать задачи',
        techs: 'HTML, CSS, SCSS, JS, TS, React',
        features: [
            'Пользователь может выполнять базовые CRUD операции с задачами',
            'Все изменения сохраняются в LocalStorage и остаются неизменными после перезагрузки станицы',
            'После создания нескольких задач пользователь может найти необходимую при помощи встроенного фильтра задач',
            'Задачи могут находиться в нескольких состояниях, таких, как: нужно сделать, в процессе, готово',
        ],
        github: 'https://github.com/Leshista/infotecs-test',
        githubPages: 'https://leshista.github.io/infotecs-test/',
    },
    ToDoList: {
        title: 'To Do List',
        image: ToDoListImage,
        subtitle:
            'Более простое ToDo приложения, в котором пользователь может добавлять, удалять, а также фильтровать задачи',
        techs: 'HTML, CSS, SCSS, JS, TS, React',
        features: [
            'Пользователь может добавлять и удалять задачи ',
            'Все изменения сохраняются в LocalStorage и остаются неизменными после перезагрузки станицы',
            'После создания нескольких задач пользователь может найти необходимую при помощи встроенного фильтра задач',
            'Задачи могут находиться в двух состояниях: нужно сделать и готово',
        ],
        github: 'https://github.com/Leshista/ReactToDoList',
        githubPages: 'https://leshista.github.io/ReactToDoList/',
    },
    'LoremIpsum.net': {
        title: 'LoremIpsum.net',
        image: LoremIpsumImage,
        subtitle:
            'Тестовый ленд для прохождения задания на позицию верстальщика',
        techs: 'HTML, CSS, JS, Figma',
        features: [
            'Вся вёрстка была создана на основе Figma макета, предоставленного работодателем',
            'Реализованы кастомные инпуты в форме: <select/>, <range/> <input type="file"/>',
            'Работающие ссылки-якори, ведущие к форме',
        ],
        github: 'https://github.com/Leshista/loremIpsum.net',
        githubPages: 'https://leshista.github.io/loremIpsum.net/',
    },
    CNN: {
        title: 'Статический снепшот главной страницы CNN',
        image: CNNImage,
        subtitle:
            'Довольно комплексная страница сделанная в процессе прохождения курса по HTML/CSS/JS',
        techs: 'HTML, CSS, JS, SCSS, BootStrap, PhotoShop',
        features: [
            'Статический снепшот главной страницы CNN в её состоянии на момент 2017 года',
            'Для расположения блоков на странице использован BootStrap',
            'Функциональные (Но пустые) селекторы языка и поиск',
            'Работает как должно только на десктопном разрешении',
        ],
        github: 'https://github.com/Leshista/CNNStaticCopy/',
        githubPages: 'https://leshista.github.io/CNNStaticCopy/',
    },
    IndexPage: {
        title: 'Главная страница блога',
        image: IndexPageImage,
        subtitle: 'Простенькая но симпатичная главная страница',
        techs: 'HTML, CSS, PhotoShop',
        features: [
            'Страница выглядит хорошо на любом разрешении, responsive',
            'Мокап-календарь, сделанный при помощи таблицы, выглядит неплохо',
            'Эффекты при наведении на ссылки немного оживляют сайт',
        ],
        github: 'https://github.com/Leshista/FlexBoxSite/',
        githubPages: 'https://leshista.github.io/FlexBoxSite/',
    },
    Quest: {
        title: 'A Quest for Glory',
        image: QuestImage,
        subtitle: 'Незавершённая но милая игрушка',
        techs: 'HTML, CSS, JS, SCSS, PhotoPea',
        features: [
            'РАБОТАЕТ ТОЛЬКО ЕСЛИ ЗАГРУЖЕНО ПРИ РАЗРЕШЕНИИ <440px',
            'Фоновая музыка',
            'Сменяющиеся окна',
            'Тайлмап генерируется по разному для разных девайсов (На данный момент работает только мобильная версия)',
            'Спавн врагов происходит рандомно для каждого забега',
            'Героем можно управлять, кликая на тайлы или при помощи кнопок wasd/стрелок',
            'Вы можете побеждать врагов кликая по ним & получать за это золото',
        ],
        github: 'https://github.com/Leshista/JSGame/',
        githubPages: 'https://leshista.github.io/JSGame/',
    },
};

const projectProvider = (projectId, projectElement) => {
    const CurrentLanguage = useSelector((state) => state.lang.language);
    switch (CurrentLanguage) {
        case 'en':
            return projectsEn[projectId][projectElement];
        case 'ru':
            return projectsRu[projectId][projectElement];
        default:
            break;
    }
};

export default projectProvider;
