import { useSelector } from 'react-redux';

const projectsEn = {
    1: {
        title: 'Curriculum Vitae SPA',
        image: null,
        subtitle: 'Includes resume, portfolio, recommendation letter etc.',
        techs: 'HTML, CSS, JS, React, React-router, Redux, Redux-ToolKit',
        features: [
            'Client-side routing provides multi-page UX without page reloading',
            'Redux provides real-time language change',
            'CSS animation provides a nice little typing animation',
            'There are smooth SVG curves in the design',
        ],
    },
    2: {
        title: 'Comfy Journal',
        image: null,
        subtitle:
            'A simple ToDo app, where user can add, delete, edit and filter tasks',
        techs: 'HTML, CSS, SCSS, JS, TS, React',
        features: [
            'User can execute basic CRUD operations on tasks ',
            'All changes are stored in LocalStorage and are here to stay after reload',
            'After creating multiple tasks user can find the one needed by using implemented task filter',
            'Tasks can have multiple states, such as: yet to be done, in progress and done',
        ],
    },
    3: {
        title: 'To Do List',
        image: null,
        subtitle:
            'A simpler ToDo app, where user can add, delete and filter tasks',
        techs: 'HTML, CSS, SCSS, JS, TS, React',
        features: [
            'User can create and delete tasks ',
            'All changes are stored in LocalStorage and are here to stay after reload',
            'After creating multiple tasks user can find the one needed by using implemented task filter',
            'Tasks can have two states: yet to be done and done',
        ],
    },
    4: {
        title: 'LoremIpsum.net',
        image: null,
        subtitle: 'A test land for applying for Layout Developer job',
        techs: 'HTML, CSS, JS, Figma',
        features: [
            'Full layout created from Figma design provided by an employer ',
            'Custom inputs in the form: <select/>, <range/> <input type="file"/>',
            'Working anchor links leading to the form',
        ],
    },
    5: {
        title: 'Static CNN Main Page Snapshot',
        image: null,
        subtitle:
            'A rather complex page made with help of HTML/CSS/JS tutorial',
        techs: 'HTML, CSS, JS, SCSS, BootStrap, PhotoShop',
        features: [
            'A static snapshot of CNN main page as it was in 2017  ',
            'Extensive use of BootStrap for layout',
            'Functioning (but emply) language selectors and searchbar',
            'Works as intended only on desktop resolutions',
        ],
    },
    6: {
        title: 'Index Page of a Blog',
        image: null,
        subtitle: 'A simple yet pretty index page',
        techs: 'HTML, CSS, PhotoShop',
        features: [
            'The page is responsive and looks decent on any resolution',
            'A mocup calendar made as a table is nice',
            'Hover effects on links bring a little bit of life to site',
        ],
    },
    7: {
        title: 'A Quest for Glory',
        image: null,
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
    },
};

const projectsRu = {
    1: {
        title: 'Curriculum Vitae SPA',
        image: null,
        subtitle:
            'Включает в себя резюме, портфолио, рекомендательное письмо и прочее',
        techs: 'HTML, CSS, JS, React, React-router, Redux, Redux-ToolKit',
        features: [
            'Роутинг на стороне клиента предоставляет многостраничный UX без перезагрузки страницы',
            'При помощи Redux осуществлена смена языка в реальном времени',
            'Реализована CSS анимация с эффектом печатания',
            'В дизайне использованы SVG элементы',
        ],
    },
    2: {
        title: 'Comfy Journal',
        image: null,
        subtitle:
            'Небольшое ToDo приложение, в котором пользователь может добавлять, удалять, изменять и фильтровать задачи',
        techs: 'HTML, CSS, SCSS, JS, TS, React',
        features: [
            'Пользователь может выполнять базовые CRUD операции с задачами',
            'Все изменения сохраняются в LocalStorage и остаются неизменными после перезагрузки станицы',
            'После создания нескольких задач пользователь может найти необходимую при помощи встроенного фильтра задач',
            'Задачи могут находиться в нескольких состояниях, таких, как: нужно сделать, в процессе, готово',
        ],
    },
    3: {
        title: 'To Do List',
        image: null,
        subtitle:
            'Более простое ToDo приложения, в котором пользователь может добавлять, удалять, а также фильтровать задачи',
        techs: 'HTML, CSS, SCSS, JS, TS, React',
        features: [
            'Пользователь может добавлять и удалять задачи ',
            'Все изменения сохраняются в LocalStorage и остаются неизменными после перезагрузки станицы',
            'После создания нескольких задач пользователь может найти необходимую при помощи встроенного фильтра задач',
            'Задачи могут находиться в двух состояниях: нужно сделать и готово',
        ],
    },
    4: {
        title: 'LoremIpsum.net',
        image: null,
        subtitle:
            'Тестовый ленд для прохождения задания на должность верстальщика',
        techs: 'HTML, CSS, JS, Figma',
        features: [
            'Вся вёрстка была создана на основе Figma макета, предоставленного работодателем',
            'Реализованы кастомные инпуты в форме: <select/>, <range/> <input type="file"/>',
            'Работающие ссылки-якори, ведущие к форме',
        ],
    },
    5: {
        title: 'Статический снепшот главной страницы CNN',
        image: null,
        subtitle:
            'Довольно комплексная страница сделанная в процессе прохождения курса по HTML/CSS/JS',
        techs: 'HTML, CSS, JS, SCSS, BootStrap, PhotoShop',
        features: [
            'Статический снепшот главной страницы CNN в её состоянии на момент 2017 года',
            'Для расположения блоков на странице использован BootStrap',
            'Функциональные (Но пустые) селекторы языка и поиск',
            'Работает как должно только на десктопном разрешении',
        ],
    },
    6: {
        title: 'Главная страница блога',
        image: null,
        subtitle: 'Простенькая но симпатичная главная страница',
        techs: 'HTML, CSS, PhotoShop',
        features: [
            'Страница выглядит хорошо на любом разрешении, responsive',
            'Мокап-календарь, сделанный при помощи таблицы, выглядит неплохо',
            'Эффекты при наведении на ссылки немного оживляют сайт',
        ],
    },
    7: {
        title: 'A Quest for Glory',
        image: null,
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
