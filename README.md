# Curriculum Vitae SPA

Персональный сайт-резюме и портфолио. Клиентское React-приложение с тремя разделами: обо мне, портфолио и рекомендательное письмо.

**Живая версия:** [https://leshista.github.io/CV/](https://leshista.github.io/CV/)

## Стек

- React 18
- React Router 6
- Redux Toolkit
- Vite 5
- CSS Modules
- публикация через `gh-pages`

## Что умеет приложение

- Три раздела: «Обо мне», «Портфолио», «Прочее»
- Клиентский роутинг без перезагрузки страницы
- В портфолио карточка открывается на динамическом маршруте `/#/portfolio/:id`
- Redux хранит язык, состояние бургер-меню и показ скрытого проекта
- Переключатель RU / EN меняет весь текстовый контент
- Рекомендательное письмо смотрится через iframe Google Docs
- CSS-анимация печати в шапке
- SVG-разделители между секциями

## Запуск и сборка

```bash
npm install
npm run dev
npm run build
npm run preview
```

Разработка и превью идут с базовым путём `/CV/` — так же, как на GitHub Pages.

## Публикация

Сайт выкладывается в ветку `gh-pages`:

```bash
npm run deploy
```

`predeploy` сначала собирает `vite build`. В `vite.config.js` задано `base: '/CV/'`, потому что репозиторий публикуется как project site: `https://leshista.github.io/CV/`.

Маршруты — hash: `/CV/#/`, `/CV/#/portfolio`, `/CV/#/other`. GitHub Pages всегда отдаёт корень `/CV/`, поэтому прямое открытие, обновление и «назад/вперёд» не упираются в 404.

`dist/404.html` остаётся копией `index.html` для старых адресов без hash (`/CV/portfolio`, `/CV/other`): страница загружается и сразу переписывается на `/CV/#/portfolio` и `/CV/#/other`.
