import { useSelector } from 'react-redux';

const textEn = {
    aboutMe: 'About me',
    portfolio: 'Portfolio',
    other: 'Other',
    menu: 'Menu',

    // Experience section

    // Right side
    name: 'Stanislav Aleshin',
    profession: 'Frontend Developer / Web Developer',

    myExperience:
        "I'm a frontend and web developer based in Saint Petersburg, with more than four years of commercial experience (since 2022). I build, adapt and maintain landing pages and websites. Day to day I work with HTML, CSS, JavaScript and TypeScript. I have commercial experience with React and React Router: maintaining existing sites and working with AI-generated projects on that stack. I also have commercial experience maintaining a corporate Astro site. Redux Toolkit is something I used in my own projects. I use AI tools to speed up routine tasks — after that I still read, fix and ship the code myself.",

    wasWorkingAs: 'Work experience',
    jobRequirments: 'Main responsibilities:',

    job1: {
        name: 'Gipsyland — Senior Layout Developer / Web Dev Automation',
        years: 'May 2024 — Present',
        requirements: [
            'Build, adapt and maintain affiliate landing pages from scratch (HTML, CSS, JavaScript, TypeScript, basic PHP)',
            'Update existing React sites and AI-generated React / React Router projects: components, UI and bugfixes',
            'Corporate Astro site: language versions, content and UI changes together with a designer',
            'Git and GitHub, deploys, domains, Namecheap hosting and SSL',
            'Automate landing-page production with AI tools and low-code platforms',
            'Mentor developers, mostly during onboarding',
            'Cut landing production from 3–3.5 hours to 25–40 minutes (about 4.5–8×) while keeping the design, functionality and ad-project requirements intact',
        ],
    },

    job2: {
        name: 'Lucky Group — Layout Developer',
        years: 'Sep 2022 — Mar 2024',
        requirements: [
            'Adaptive layout of landing pages and UI pieces from specs (HTML, CSS, JavaScript)',
            'Support and improve existing projects, including other people’s code',
            'Update styles and content; build popups and other interactive elements in JavaScript',
            'Pull, commit and push with Git; pick up tasks from the team board',
            'Work with other layout developers, QA engineers and content managers; fix issues from bug reports',
        ],
    },

    job3: {
        name: 'English Tutor',
        years: 'Nov 2016 — May 2022',
        requirements: [
            'One-to-one English lessons tailored to each student’s level and needs',
            'Grammar, vocabulary, pronunciation, schoolwork and exam preparation',
        ],
    },

    education: 'Education',

    education1: {
        name: 'Kostroma State University',
        profession: 'Tourism Specialist',
    },

    education2: {
        name: 'Rostov Institute of National Economy',
        profession: 'Japanese Orientalist, did not finish',
    },

    // Left Side
    hardSkills: 'Hard Skills',

    html: 'HTML5',
    css: 'CSS3',
    scss: 'Sass/SCSS',
    bootstrap: 'Bootstrap 5',
    bem: 'BEM',
    jquery: 'jQuery',
    js: 'JavaScript',
    ts: 'TypeScript',
    react: 'React',
    reactRouter: 'React Router',
    reduxToolkit: 'Redux Toolkit',
    astro: 'Astro (basic)',
    git: 'Git',
    gitHub: 'GitHub',
    figma: 'Figma',
    php: 'PHP (basic)',
    aiTools: 'AI tools (Cursor, ChatGPT, Claude Code)',
    english: 'English C1',

    softSkills: 'Soft Skills',

    fastLearner: 'Fast learner',
    problemSolver: 'Self-directed problem solving',
    teamWorker: 'Works well in a team',
    mentoring: 'Mentoring',

    // Portfolio Section
    commercialProjects: 'Commercial Projects',
    commercialProjectsIntro:
        'Throughout my professional career, I have contributed to numerous web projects. These are selected examples showcasing different tasks and development approaches. Most commercial work is not publicly shared due to confidentiality restrictions.',
    myProjects: 'My Projects',
    studyProjects: 'Learning projects',
    techsUsed: 'Tech used',
    myContribution: 'My role',
    openProject: 'Open project',
    sourceCode: 'Source code',

    // Other Section
    recommendationLetter: 'Recommendation letter',
    recommendationLetterSource:
        'From the head of the layout department at Lucky Group (previous employer).',
    openLetter: 'Open in Google Docs',
};

const textRu = {
    aboutMe: 'Обо мне',
    portfolio: 'Портфолио',
    other: 'Прочее',
    menu: 'Меню',

    // Секция "Обо мне"

    // Правая сторона
    name: 'Станислав Алёшин',
    profession: 'Frontend Developer / Web Developer',

    myExperience:
        'Я фронтенд- и веб-разработчик из Санкт-Петербурга, коммерческий опыт с 2022 года — больше четырёх лет. Занимаюсь разработкой, адаптацией и сопровождением лендингов и сайтов. В работе опираюсь на HTML, CSS, JavaScript и TypeScript. Есть коммерческий опыт с React и React Router: сопровождение существующих сайтов и работа с ИИ-сгенерированными проектами на этом стеке. На Astro — сопровождение корпоративного сайта. Redux Toolkit использовал в собственных проектах. ИИ-инструменты применяю, чтобы ускорить рутину, — после этого всё равно сам читаю, правлю и сдаю код.',

    wasWorkingAs: 'Опыт работы',
    jobRequirments: 'Основные обязанности:',

    job1: {
        name: 'ООО «Джипсиленд» — старший верстальщик / автоматизация веб-разработки',
        years: '05.2024 — н.в.',
        requirements: [
            'Разработка, адаптация и поддержка лендингов в affiliate marketing: вёрстка с нуля, HTML, CSS, JavaScript, TypeScript и базовый PHP',
            'Доработка существующих сайтов на React и ИИ-сгенерированных проектов на React / React Router: компоненты, интерфейсы, исправление ошибок',
            'Сопровождение корпоративного сайта на Astro: языковые версии, контент и элементы интерфейса совместно с дизайнером',
            'Git и GitHub, деплой, домены, хостинг Namecheap и SSL',
            'Автоматизация создания лендингов с ИИ-инструментами и AI/low-code платформами',
            'Наставничество разработчиков, в основном на этапе адаптации',
            'Сократил создание лендинга с 3–3,5 часов до 25–40 минут (примерно в 4,5–8 раз) при сохранении дизайна, работоспособности и требований рекламных проектов',
        ],
    },

    job2: {
        name: 'Lucky Group — верстальщик',
        years: '09.2022 — 03.2024',
        requirements: [
            'Адаптивная вёрстка лендингов и элементов интерфейса по ТЗ (HTML, CSS, JavaScript)',
            'Поддержка и доработка существующих проектов, в том числе чужого кода',
            'Правки стилей и контента, попапы и другая интерактивность на JavaScript',
            'Git: получение исходников, коммиты и отправка в репозиторий; задачи с командной доски',
            'Работа с верстальщиками, QA и контент-менеджерами; правки по баг-репортам',
        ],
    },

    job3: {
        name: 'Репетитор английского языка',
        years: '11.2016 — 05.2022',
        requirements: [
            'Проведение индивидуальных занятий по английскому языку с учётом уровня подготовки и потребностей учеников.',
            'Объяснение грамматики, расширение словарного запаса, работа над произношением, помощь с учебными заданиями и подготовкой к экзаменам.',
        ],
    },

    education: 'Образование',

    education1: {
        name: 'Костромской Государственный Университет',
        profession: 'СПО по программе "Специалист по Туризму"',
    },

    education2: {
        name: 'Ростовский Институт Народного Хозяйства',
        profession: 'Высшее по программе "Востоковед. Япония". Не окончено',
    },

    // Left Side
    hardSkills: 'Hard Skills',

    html: 'HTML5',
    css: 'CSS3',
    scss: 'Sass/SCSS',
    bootstrap: 'Bootstrap 5',
    bem: 'BEM',
    jquery: 'jQuery',
    js: 'JavaScript',
    ts: 'TypeScript',
    react: 'React',
    reactRouter: 'React Router',
    reduxToolkit: 'Redux Toolkit',
    astro: 'Astro (базовый)',
    git: 'Git',
    gitHub: 'GitHub',
    figma: 'Figma',
    php: 'PHP (базовый)',
    aiTools: 'AI-инструменты (Cursor, ChatGPT, Claude Code)',
    english: 'English C1',

    softSkills: 'Soft Skills',

    fastLearner: 'Быстро учусь',
    problemSolver: 'Самостоятельно разбираюсь в задачах',
    teamWorker: 'Командная работа',
    mentoring: 'Наставничество',

    // Секция "Портфолио"
    commercialProjects: 'Коммерческие проекты',
    commercialProjectsIntro:
        'За годы коммерческой работы я участвовал в создании большого количества веб-проектов. Здесь представлены отдельные примеры, демонстрирующие разные задачи и подходы к разработке. Большинство работ не публикуется из-за ограничений конфиденциальности.',
    myProjects: 'Мои проекты',
    studyProjects: 'Учебные проекты',
    techsUsed: 'Технологии',
    myContribution: 'Мой вклад',
    openProject: 'Открыть проект',
    sourceCode: 'Исходный код',

    // Секция "Прочее"
    recommendationLetter: 'Рекомендательное письмо',
    recommendationLetterSource:
        'Письмо руководителя отдела вёрстки Lucky Group (предыдущее место работы).',
    openLetter: 'Открыть в Google Docs',
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
