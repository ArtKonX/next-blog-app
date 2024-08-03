# Веб-блог MatrixBlog на Next.js с MongoDB и NextAuth

Данный проект представляет собой веб блог, который разработан с использованием фреймворка Next.js версии 14 и базы данных MongoDB с помощью MongoDB Compass.

## Выполненные задачи

Создайте приложения для блога: &#x2705;\
➔	Необходимо создать web-страницу. &#x2705;\
➔	Создать функцию регистрации/входа пользователя &#x2705;\
➔	Создать функцию написания своего поста &#x2705;\
➔	Создать функцию подписки на пользователей &#x2705;\
➔	Создать генерацию списка на основе подписок на пользователей &#x2705;\
➔	Создать функцию просмотра публичных постов &#x2705;\
➔	Создать функцию скрытого поста “только по запросу” &#x2705;\
➔	Создать функцию редактирования/удаления поста &#x2705;\
➔	Предоставить возможность пользователю добавлять и сортировать посты по тегам &#x2705;\
➔	Добавить возможность комментировать посты &#x2705;

## Установка

Следуйте этим шагам, чтобы запустить проект локально:

1. **Склонируйте репозиторий на свой компьютер**

2. **Настройте переменные окружения:**

Создайте файл .env на основе .env.example и запишите в него адрес для подключения к базе данных и токен для NextAuth. Пример:

```bash
MONGODB_URI=mongodb://127.0.0.1/blog
NEXTAUTH_SECRET=my_secret_token
```

3. **Установите зависимости:**

```bash
npm install
```

4. **Запустите проект:**

```bash
npm run dev
```

5. **Откройте браузер и перейдите по адресу:**

 http://localhost:3000.
