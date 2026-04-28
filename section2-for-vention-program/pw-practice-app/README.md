### Ngx-Admin Angular 14 application from akveo.com

This is modified and more lightweight version of original application to practice UI Automation with Playwright.

The original repo is here: https://github.com/akveo/ngx-admin

---

## How to Run

### Install dependencies

```bash
npm install
```

### Start the web app

```bash
npm start
```

This runs `ng serve` and starts the Angular app locally. By default it is available at `http://localhost:4200`.

### Run tests

The web app must be running before executing tests. Open a second terminal and run:

```bash
npm test
```

This runs `playwright test` against the locally running app.
