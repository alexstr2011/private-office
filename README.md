# Приложение "Личный кабинет"

### Задача:
https://docs.google.com/document/d/1PFafdSZ2PcQLRtAyotvIupDmpGZ_6DnN9Q1kk0ogJm4/edit

### Технологии:
React, Redux, Redux-Thunk, React router, TypeScript

### Для работы необходим установленный json-server:
https://github.com/typicode/json-server

### Запуск:

####Запускаем моковый сервер для авторизации:
`json-server --watch mock-api/db.json --port 3001 --middlewares mock-api/login-middleware.js`

####Запускаем проект:
`npm run start`

####Авторизуемся:
Логин (латинское): `a`
Пароль: `1`