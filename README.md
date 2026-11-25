# Patient Management (frontend)

React frontend for a patient management dashboard. Users sign up and log in, see dashboard charts
(patients by practitioner, nurse and medication, plus totals), browse and open patient records, and upload patient data as CSV.

It needs the API from **[patient-management-server](https://github.com/nawarajsubedi/patient-management-server)** for login and data.
The UI starts without it, but you can't log in.

## Tech stack

- React 18 + TypeScript (Create React App / `react-scripts` 5)
- Material UI 5
- Redux Toolkit
- Chart.js (`react-chartjs-2`)
- Formik + Yup for forms

## Requirements

| Requirement | Version | Notes |
|---|---|---|
| **OS** | **Linux** (Ubuntu / Debian) | Use Linux to install, build and run. On Windows, use WSL 2 (Ubuntu); see [Other operating systems](#other-operating-systems) |
| Node.js | 18 or newer | Tested on 20 and 26. Install with [nvm](https://github.com/nvm-sh/nvm): `nvm install 20` |
| npm | Comes with Node.js | |
| Backend | patient-management-server | Runs on <http://localhost:3000> by default |

### Tested on

| OS | Node.js | Result |
|---|---|---|
| **Linux** (Debian 12, Docker `node:20`) | 20.20 | Builds ✅ |
| macOS 26 (Apple Silicon) | 26.12 | Builds and starts ✅ |

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/nawarajsubedi/patient-management.git
cd patient-management
npm install
```

> Use `npm install`, not `npm ci`: `package-lock.json` is out of date with `package.json`, so `npm ci` stops with an error.

### 2. Point the app at the API

```bash
cp .env.example .env
```

`.env` contains:

```
REACT_APP_API_URL=http://localhost:3000
```

Change it if your backend runs somewhere else. Restart `npm start` after editing `.env`.

### 3. Start the backend

Follow the README in [patient-management-server](https://github.com/nawarajsubedi/patient-management-server). It listens on port **3000**.

### 4. Run the frontend on port 3001

The backend already uses port 3000, so start the frontend on 3001:

```bash
PORT=3001 npm start
```

Open <http://localhost:3001>.

(If you run plain `npm start` while the backend is running, the dev server asks
"Something is already running on port 3000. Would you like to run the app on another port instead?" Answer **Y**.)

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server with hot reload |
| `npm run build` | Production build into `build/` |
| `npm test` | Jest tests in watch mode |
| `npm run test:coverage` | Tests with a coverage report |

## Other operating systems

The supported OS is **Linux**. The commands above were written and tested for a Linux shell.

- **Windows**: install [WSL 2](https://learn.microsoft.com/windows/wsl/install) with Ubuntu, open the Ubuntu terminal, and follow the Linux steps exactly.
- **macOS**: the same commands work in Terminal (tested on macOS 26).

## Project structure

```
src/
  App.tsx              App root
  route/               Public and private (logged-in) routes
  pages/
    Login/  Signup/    Auth pages
    Dashboard/         Charts and summary cards
    Patients/          Patient list, details and CSV upload
  component/layout/    Side and top navigation
  store/               Redux Toolkit slices and thunks
  services/auth/       Auth helpers
  common/url.ts        API endpoints (built from REACT_APP_API_URL)
```

## Troubleshooting

- **Login fails / network errors in the browser console**: make sure the backend is running and `REACT_APP_API_URL` in `.env` points to it, then restart `npm start`.
- **`npm ci` fails with "package.json and package-lock.json ... are not in sync"**: use `npm install` instead.
