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
        subtitle:
            'A take-home SPA for a React Developer assignment: a user directory with routing and client-side state.',
        techs: 'HTML, CSS, JavaScript, React, React Router, Redux Toolkit',
        features: [
            'Two routes with React Router: a list on the index page and a dynamic details page',
            'User cards are fetched from JSONPlaceholder, stored in Redux, then rendered from the store',
            'Each card can be moved between three states: active, archived and hidden',
        ],
        github: 'https://github.com/Leshista/AT-WORK__SPA',
        githubPages: 'https://leshista.github.io/AT-WORK__SPA/',
    },
    CV: {
        title: 'Curriculum Vitae SPA',
        image: CVImage,
        subtitle:
            'This site: resume, portfolio and a recommendation letter, with Russian and English versions.',
        techs: 'HTML, CSS, JavaScript, React, React Router, Redux Toolkit',
        features: [
            'Client-side routing for a multi-page feel without full reloads',
            'Redux holds app-level state: language and burger menu',
            'CSS typing animation in the header',
            'SVG curves used as section dividers',
            'A Google Docs iframe shows the recommendation letter',
        ],
        github: 'https://github.com/Leshista/CV',
        githubPages: 'https://leshista.github.io/CV/',
    },
    ComfyJournal: {
        title: 'Comfy Journal',
        image: ComfyJournalImage,
        subtitle:
            'A test ToDo app (Infotecs assignment): add, edit, delete and filter tasks.',
        techs: 'HTML, CSS, SCSS, JavaScript, React',
        features: [
            'Basic CRUD on tasks',
            'Changes are stored in localStorage and survive a reload',
            'A filter helps find a task after several have been created',
            'Tasks can be waiting, in progress or done',
        ],
        github: 'https://github.com/Leshista/infotecs-test',
        githubPages: 'https://leshista.github.io/infotecs-test/',
    },
    ToDoList: {
        title: 'To Do List',
        image: ToDoListImage,
        subtitle:
            'An earlier, simpler ToDo app in React and TypeScript: add, delete and filter tasks.',
        techs: 'HTML, CSS, SCSS, TypeScript, React',
        features: [
            'Create and delete tasks',
            'Changes are stored in localStorage and survive a reload',
            'A filter helps find a task after several have been created',
            'Tasks have two states: to do and done',
        ],
        github: 'https://github.com/Leshista/ReactToDoList',
        githubPages: 'https://leshista.github.io/ReactToDoList/',
    },
    'LoremIpsum.net': {
        title: 'LoremIpsum.net',
        image: LoremIpsumImage,
        subtitle:
            'A test landing page for a Layout Developer assignment, built from a Figma mockup.',
        techs: 'HTML, CSS, JavaScript, Figma',
        features: [
            'Full layout from a Figma design provided by the employer',
            'Custom form controls: select, range and file input',
            'Working anchor links that scroll to the form',
        ],
        github: 'https://github.com/Leshista/loremIpsum.net',
        githubPages: 'https://leshista.github.io/loremIpsum.net/',
    },
    CNN: {
        title: 'Static CNN Homepage Snapshot',
        image: CNNImage,
        subtitle:
            'A study layout: a static snapshot of the CNN homepage as it looked in 2017.',
        techs: 'HTML, CSS, JavaScript, SCSS, Bootstrap, Photoshop',
        features: [
            'A static snapshot of the CNN homepage from 2017',
            'Bootstrap used for the page grid',
            'Language selectors and search bar are present but empty',
            'Intended for desktop widths only',
        ],
        github: 'https://github.com/Leshista/CNNStaticCopy/',
        githubPages: 'https://leshista.github.io/CNNStaticCopy/',
    },
    IndexPage: {
        title: 'Blog Index Page',
        image: IndexPageImage,
        subtitle: 'A small responsive blog index, built as a layout exercise.',
        techs: 'HTML, CSS, Photoshop',
        features: [
            'Responsive layout that holds up across common screen sizes',
            'A mock calendar built as a table',
            'Hover effects on links',
        ],
        github: 'https://github.com/Leshista/FlexBoxSite/',
        githubPages: 'https://leshista.github.io/FlexBoxSite/',
    },
    Quest: {
        title: 'A Quest for Glory',
        image: QuestImage,
        subtitle:
            'An unfinished mobile-oriented game. Learning project, not a complete playthrough.',
        techs: 'HTML, CSS, JavaScript, SCSS, Photopea',
        features: [
            'Works only if loaded at a width under 440px',
            'Background music',
            'Switching between game screens',
            'Tilemap generation differs by device; only the mobile version is implemented',
            'Enemy spawn is random each run',
            'The hero moves by clicking a tile or with WASD / arrow keys',
            'Click enemies to defeat them and earn gold',
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
            'Тестовое SPA на позицию React Developer: справочник пользователей с маршрутами и клиентским состоянием.',
        techs: 'HTML, CSS, JavaScript, React, React Router, Redux Toolkit',
        features: [
            'Два маршрута на React Router: список на главной и динамическая страница деталей',
            'Карточки пользователей загружаются с JSONPlaceholder, кладутся в Redux и рендерятся из store',
            'Карточку можно перевести в одно из трёх состояний: active, archived, hidden',
        ],
        github: 'https://github.com/Leshista/AT-WORK__SPA',
        githubPages: 'https://leshista.github.io/AT-WORK__SPA/',
    },
    CV: {
        title: 'Curriculum Vitae SPA',
        image: CVImage,
        subtitle:
            'Этот сайт: резюме, портфолио и рекомендательное письмо, с русской и английской версиями.',
        techs: 'HTML, CSS, JavaScript, React, React Router, Redux Toolkit',
        features: [
            'Клиентский роутинг даёт многостраничный UX без перезагрузки',
            'Redux хранит состояние приложения: язык и бургер-меню',
            'CSS-анимация печати в шапке',
            'SVG-кривые как разделители секций',
            'Рекомендательное письмо показывается через iframe Google Docs',
        ],
        github: 'https://github.com/Leshista/CV',
        githubPages: 'https://leshista.github.io/CV/',
    },
    ComfyJournal: {
        title: 'Comfy Journal',
        image: ComfyJournalImage,
        subtitle:
            'Тестовое ToDo-приложение (задание Infotecs): добавление, правка, удаление и фильтр задач.',
        techs: 'HTML, CSS, SCSS, JavaScript, React',
        features: [
            'Базовые CRUD-операции с задачами',
            'Изменения пишутся в localStorage и переживают перезагрузку',
            'После нескольких задач нужную можно найти фильтром',
            'Состояния задачи: ожидает, в процессе, готово',
        ],
        github: 'https://github.com/Leshista/infotecs-test',
        githubPages: 'https://leshista.github.io/infotecs-test/',
    },
    ToDoList: {
        title: 'To Do List',
        image: ToDoListImage,
        subtitle:
            'Более раннее и простое ToDo на React и TypeScript: добавление, удаление и фильтр задач.',
        techs: 'HTML, CSS, SCSS, TypeScript, React',
        features: [
            'Создание и удаление задач',
            'Изменения пишутся в localStorage и переживают перезагрузку',
            'После нескольких задач нужную можно найти фильтром',
            'Два состояния: нужно сделать и готово',
        ],
        github: 'https://github.com/Leshista/ReactToDoList',
        githubPages: 'https://leshista.github.io/ReactToDoList/',
    },
    'LoremIpsum.net': {
        title: 'LoremIpsum.net',
        image: LoremIpsumImage,
        subtitle:
            'Тестовый лендинг на позицию верстальщика, свёрстанный по макету Figma.',
        techs: 'HTML, CSS, JavaScript, Figma',
        features: [
            'Вёрстка по Figma-макету, который дал работодатель',
            'Кастомные контролы в форме: select, range и file input',
            'Якорные ссылки, которые ведут к форме',
        ],
        github: 'https://github.com/Leshista/loremIpsum.net',
        githubPages: 'https://leshista.github.io/loremIpsum.net/',
    },
    CNN: {
        title: 'Статический снимок главной CNN',
        image: CNNImage,
        subtitle:
            'Учебная вёрстка: статический снимок главной страницы CNN в том виде, в каком она была в 2017 году.',
        techs: 'HTML, CSS, JavaScript, SCSS, Bootstrap, Photoshop',
        features: [
            'Статический снимок главной CNN на 2017 год',
            'Сетка страницы собрана на Bootstrap',
            'Селекторы языка и поиск есть, но без данных',
            'Рассчитано только на десктопную ширину',
        ],
        github: 'https://github.com/Leshista/CNNStaticCopy/',
        githubPages: 'https://leshista.github.io/CNNStaticCopy/',
    },
    IndexPage: {
        title: 'Главная страница блога',
        image: IndexPageImage,
        subtitle: 'Небольшая адаптивная главная блога, учебное упражнение по вёрстке.',
        techs: 'HTML, CSS, Photoshop',
        features: [
            'Адаптивная вёрстка, нормально выглядит на обычных разрешениях',
            'Макет календаря, собранный таблицей',
            'Hover-эффекты на ссылках',
        ],
        github: 'https://github.com/Leshista/FlexBoxSite/',
        githubPages: 'https://leshista.github.io/FlexBoxSite/',
    },
    Quest: {
        title: 'A Quest for Glory',
        image: QuestImage,
        subtitle:
            'Незавершённая игра с упором на мобильную ширину. Учебный проект, не полноценный геймплей.',
        techs: 'HTML, CSS, JavaScript, SCSS, Photopea',
        features: [
            'Работает только при загрузке на ширине меньше 440px',
            'Фоновая музыка',
            'Переключение игровых экранов',
            'Тайлмап генерируется по-разному для разных устройств; реализована только мобильная версия',
            'Спавн врагов случайный в каждом забеге',
            'Герой ходит по клику на тайл или клавишами WASD / стрелками',
            'Врагов можно побеждать кликом и получать за это золото',
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
