import { useSelector } from 'react-redux';

const textEn = {
    aboutMe: 'About me',
    portfolio: 'Portfolio',
    courses: 'Courses',

    // Experience section

    // Right side
    name: 'Stanislav Aleshin',
    profession: 'Front-End Developer',

    myExperience:
        "Hi, I'm 23 years old frontend developer with year and a half work experience as HTML/CSS/JS Developer under my belt. I like to do my tasks accurately and on time, work well in teams and am ready to reach new heights.",

    wasWorkingAs: 'I was working as',
    jobRequirments: 'This job required me to do the following:',

    job1: {
        name: 'Lucky Group Layout Developer',
        requirements: [
            "To read, fix and improve other people's code",
            'To solve unusual problems from scratch',
            'To use in Jira and Confluence systems',
            'To work in a team with QA-engineers, content managers and other layout developers',
        ],
    },

    job2: {
        name: 'Delivery Club Foot Courier',
        requirements: [
            'To walk a lot',
            'To accept and deliver food',
            'To learn the pathways of the city of Rostov-on-Don',
        ],
    },

    job3: {
        name: 'Hobby Games Shop Seller',
        requirements: [
            'To help customers pick what boardgame to buy',
            'To sell and deliver boardgames',
            'To use business automation software 1C:Enterprise',
            'To accept, sort and keep track of incoming boardgames',
        ],
    },

    job4: {
        name: 'OZON Call-Center Worker',
        requirements: [
            'To help customers with troubles',
            'To learn and keep track of ever-increasing amount of info',
            'To use Jira and Confluence',
            'To mentor new members of the team',
        ],
    },

    job5: {
        name: 'English Tutor',
        requirements: [
            'To help kids to improve their English vocabulary',
            'To teach children English grammar',
            'To prepare pupils for school exams',
            'To help kids with doing their homework',
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

    html: 'Html 5',
    css: 'CSS 3',
    scss: 'SASS(SCSS)',
    bootstrap: 'Bootstrap 5',
    bem: 'BEM',
    jquery: 'JQuery',
    js: 'JavaScript ES 6',
    ts: 'TypeScript',
    react: 'React',
    reactRouter: 'React-Router',
    redux: 'Redux',
    reduxToolkit: 'Redux-Toolkit',
    git: 'Git',
    gitHub: 'GitHub',
    english: 'English B2',

    softSkills: 'Soft Skills',

    fastLearner: 'Fast learner',
    canGoogle: 'Can google Stuff',
    highlyMotivated: 'Highly motivated',
    teamWorker: 'Team worker',
    sociable: 'Sociable',

    // Portfolio Section
    myProjects: 'My Projects',
};

const textRu = {
    aboutMe: 'Обо мне',
    portfolio: 'Портфолио',
    courses: 'Курсы',

    // Секция "Обо мне"

    // Правая сторона
    name: 'Станислав Алёшин',
    profession: 'Front-End Developer',

    myExperience:
        'Привет, я фронтенд разработчик, мне 23 года, и за моими плечами полтора года работы в качестве HTML/CSS/JS разработчика в компании LuckyOnline. Я люблю выполнять работу точно и в срок, хорошо работаю в команде и готов к достижению новых вершин!',

    wasWorkingAs: 'Прошлые места работы',
    jobRequirments: 'На этом месте я делал следующее:',

    job1: {
        name: 'Lucky Group Верстальщик',
        requirements: [
            'Читал, правил и улучшал чужой код',
            'Решал нестандартные задачи с нуля',
            'Использовал Jira и Confluence',
            'Работал в команде с верстальщиками, тестировщиками и контент-менеджерами',
        ],
    },

    job2: {
        name: 'Delivery Club Пеший Курьер',
        requirements: [
            'Много ходил',
            'Принимал и доставлял еду',
            'Изучал улицы города Ростова-на-Дону',
        ],
    },

    job3: {
        name: 'Hobby Games Продавец Настольных Игр',
        requirements: [
            'Помогал покупателям в выборе игр',
            'Продавал и доставлял настольных игр',
            'Работал в программе 1С:Предприятие',
            'Принимал, сортировал и вёл учёт поступающих товаров',
        ],
    },

    job4: {
        name: 'OZON Работник Call-Центра',
        requirements: [
            'Помогал клиентам с возникающими трудностями',
            'Учил и пользовался постоянно увеличивающейся рабочей информацией',
            'Использовал Jira и Confluence',
            'Помогал с адаптацией новых членов команды',
        ],
    },

    job5: {
        name: 'Репетитор Английского Языка',
        requirements: [
            'Помогал детям увеличивать словарный запас',
            'Объяснял грамматику английского языка',
            'Готовил учеников к школьным экзаменам',
            'Помогал детям с решением домашнего задания',
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

    html: 'Html 5',
    css: 'CSS 3',
    scss: 'SASS(SCSS)',
    bootstrap: 'Bootstrap 5',
    bem: 'BEM',
    jquery: 'JQuery',
    js: 'JavaScript ES 6',
    ts: 'TypeScript',
    react: 'React',
    reactRouter: 'React-Router',
    redux: 'Redux',
    reduxToolkit: 'Redux-Toolkit',
    git: 'Git',
    gitHub: 'GitHub',
    english: 'English B2',

    softSkills: 'Soft Skills',

    fastLearner: 'Быстро учусь',
    canGoogle: 'Умею гуглить',
    highlyMotivated: 'Высоко замотивирован',
    teamWorker: 'Командный игрок',
    sociable: 'Общительный',

    // Секция "Портфолио"
    myProjects: 'Мои проекты',
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
