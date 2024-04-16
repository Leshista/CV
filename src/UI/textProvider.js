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

    job1Name: 'Lucky Group Layout Developer',
    job1Requirment1: "To read, fix and improve other people's code",
    job1Requirment2: 'To solve unusual problems from scratch',
    job1Requirment3: 'To use in Jira and Confluence systems',
    job1Requirment4:
        'To work in a team with QA-engineers, content managers and other layout developers',

    job2Name: 'Delivery Club Foot Courier',
    job2Requirment1: 'To walk a lot',
    job2Requirment2: 'To accept and deliver food',
    job2Requirment3: 'To learn the pathways of the city of Rostov-on-Don',

    job3Name: 'Hobby Games Shop Seller',
    job3Requirment1: 'To help customers pick what boardgame to buy',
    job3Requirment2: 'To sell and deliver boardgames',
    job3Requirment3: 'To use business automation software 1C:Enterprise',
    job3Requirment4: 'To accept, sort and keep track of incoming boardgames',

    job4Name: 'OZON Call-Center Worker',
    job4Requirment1: 'To help customers with troubles',
    job4Requirment2:
        'To learn and keep track of ever-increasing amount of info',
    job4Requirment3: 'To use Jira and Confluence',
    job4Requirment4: 'To mentor new members of the team',

    job5Name: 'English Tutor',
    job5Requirment1: 'To help kids to improve their English vocabulary',
    job5Requirment2: 'To teach children English grammar',
    job5Requirment3: 'To prepare pupils for school exams',
    job5Requirment4: 'To help kids with doing their homework',

    education: 'Education',

    education1Name: 'Kostroma State University',
    education1Profession: 'Tourism Specialist',

    education2Name: 'Rostov Institute of National Economy',
    education2Profession: 'Japanese Orientalist, did not finish',

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

    job1Name: 'Lucky Group Верстальщик',
    job1Requirment1: 'Читал, правил и улучшал чужой код',
    job1Requirment2: 'Решал нестандартные задачи с нуля',
    job1Requirment3: 'Использовал Jira и Confluence',
    job1Requirment4:
        'Работал в команде с верстальщиками, тестировщиками и контент-менеджерами',

    job2Name: 'Delivery Club Пеший Курьер',
    job2Requirment1: 'Много ходил',
    job2Requirment2: 'Принимал и доставлял еду',
    job2Requirment3: 'Изучал улицы города Ростова-на-Дону',

    job3Name: 'Hobby Games Продавец Настольных Игр',
    job3Requirment1: 'Помогал покупателям в выборе игр',
    job3Requirment2: 'Продавал и доставлял настольных игр ',
    job3Requirment3: 'Работал в программе 1С:Предприятие',
    job3Requirment4: 'Принимал, сортировал и вёл учёт поступающих товаров',

    job4Name: 'OZON Работник Call-Центра',
    job4Requirment1: 'Помогал клиентам с возникающими трудностями',
    job4Requirment2:
        'Учил и пользовался постоянно увеличивающейся рабочей информацией',
    job4Requirment3: 'Использовал Jira и Confluence',
    job4Requirment4: 'Помогал с адаптацией новых членов команды',

    job5Name: 'Репетитор Английского Языка',
    job5Requirment1: 'Помогал детям увеличивать словарный запас',
    job5Requirment2: 'Объяснял грамматику английского языка',
    job5Requirment3: 'Готовил учеников к школьным экзаменам',
    job5Requirment4: 'Помогал детям с решением домашнего задания',

    education: 'Образование',

    education1Name: 'Костромской Государственный Университет',
    education1Profession: 'СПО по программе "Специалист по Туризму"',

    education2Name: 'Ростовский Институт Народного Хозяйства',
    education2Profession:
        'Высшее по программе "Востоковед. Япония". Не окончено',

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
