# Payoo – Mobile Banking UI

A mobile banking web app built with HTML, Tailwind CSS, DaisyUI and vanilla
JavaScript (ES modules). There is no backend: all data is hardcoded in `js/data.js`.

## Demo login

| Mobile      | PIN  |
| ----------- | ---- |
| 01521319370 | 1234 |

## Features

- Login with session guard and logout
- Add Money, Cash Out, Transfer Money, Pay Bill
- Get Bonus (coupons `PAYOO100`, `WELCOME50`, each usable once)
- Latest payments and full transaction history

## Run locally

Open the folder in VS Code and start **Live Server**. ES modules need an HTTP
server, so double-clicking the HTML files will not work.

## Project structure

| File                        | Responsibility                         |
| --------------------------- | -------------------------------------- |
| `js/data.js`                | Hardcoded data and constants           |
| `js/config.js`              | Services and form definitions          |
| `js/store.js`               | In-memory balance and transactions     |
| `js/auth.js`                | Login, logout, route guard             |
| `js/services.js`            | Banking rules (validation and updates) |
| `js/components.js`          | HTML builders                          |
| `js/render.js`              | Updates the screen from the store      |
| `js/navigation.js`          | Menu and section switching             |
| `js/login.js`, `js/home.js` | Page entry points                      |
