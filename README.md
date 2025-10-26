

# Freshers Portal

This repository contains the Freshers Portal web application used by the student community. It's a two-part project with:

- backend: an Express + MongoDB API and admin panel
- frontend: a React single-page application (Create React App) that consumes the backend APIs

This README explains the project structure, how to run locally (npm and Docker), required environment variables, and a short API reference.

## Quick facts

- Backend: Node.js (ES modules), Express, Mongoose, AdminJS, Multer
- Frontend: React (Create React App), React Router, Tailwind (dev deps)
- DB: MongoDB (connect via `DB_URL` env var)
- Static uploads served from the `uploads/` folder

## Repository layout

- `/backend` - server code, admin panel config, controllers, models, routes, Dockerfile and docker-compose
	- `index.js` - connects to MongoDB and starts the Express server
	- `src/app.js` - main Express app, routes and controllers wired
	- `src/controllers/*` - route handlers for pages (contact, cultural, fest, etc.)
	- `src/models/*` - Mongoose models for the data
	- `uploads/` - uploaded files (images)
- `/frontend` - React app (Create React App) with pages and components
	- `src/App.js` - app router and pages
	- `public/` - static assets

## Environment variables

Required environment variables for the backend (place in a `.env` file in the `backend` folder or provide through your environment):

- `DB_URL` - MongoDB connection string (required)
- `PORT` - port to run the backend server (defaults to 5000)
- `BASE_PATH` - optional base path used by some controllers
- `SESSION_SECRET` - secret for express-session

Admin panel related variables (used by `backend/admin_panel/admin-config.js`):

- `ADMINPANELROOTPATH` - (optional) base path for admin panel (defaults to `/admin`)
- `ADMIN_EMAIL` - admin username/email for AdminJS
- `ADMIN_PASSWORD` - admin password for AdminJS
- `COOKIE_NAME` - cookie name used by AdminJS auth
- `COOKIE_PASSWORD` - cookie password used by AdminJS auth

Frontend environment variables (in `frontend/.env` or passed to build):

- `REACT_APP_BASEURL` - base URL of the backend API (used by client fetches). If not set the frontend assumes relative paths.

Note: Docker-compose files in both `frontend` and `backend` expect a `.env` file at the same level when used.

## Run locally (development)

Backend

1. Open a terminal and change to the `backend` folder.
2. Install dependencies and start (uses nodemon via npm):

```cmd
cd backend
npm install
npm run start
```

The `start` script calls `npx nodemon index` so file changes will restart the server automatically.

Frontend

1. Open another terminal, change to the `frontend` folder.
2. Install and start the React development server:

```cmd
cd frontend
npm install
npm start
```

The frontend is configured with a BrowserRouter basename of `/freshers`. When deploying under a subpath, ensure `homepage` in `frontend/package.json` and the `basename` match the deployed path.

## Run with Docker

Both backend and frontend include Dockerfiles and docker-compose.yml. They appear to expect external Docker networks (see compose files). Basic steps to run each individually:

Backend (build + run):

```cmd
cd backend
docker build -t freshers_portal_backend .
docker run --env-file .env -p 3499:5000 -v %cd%/uploads:/usr/src/app/backend/uploads freshers_portal_backend
```

Frontend (build + serve):

```cmd
cd frontend
docker build -t freshers_portal_frontend .
docker run --env-file .env -p 2369:3000 freshers_portal_frontend
```

Or use the provided `docker-compose.yml` in each folder if you have the required external networks configured.

## API endpoints (summary)

The backend exposes several GET endpoints used by the frontend. These return JSON (200) or appropriate error codes.

- GET / - welcome message
- GET /contact - list contact people (uses `ContactPeople` model)
- POST /contact-form - save a contact form (expects { name, email, phone, message })
- GET /cultural - list cultural clubs
- GET /fest - list fests
- GET /department - list departments
- GET /facilities - list facilities
- GET /swb - welfare page data
- GET /hostel-events - inter-hostel events
- GET /hostel-fac - hostel facilities
- GET /hostel-list - list of hostels
- GET /tech - tech board data
- GET /sports - sports board data

File upload routes (protected by session-based auth):

- GET /upload/ - get the upload page (requires authentication)
- POST /upload/ - upload a file (field name `myFile`) and optional `imageName` to set filename
- GET /upload/delete/:filename - delete an uploaded file

Auth routes for admin login (used by web admin):

- GET /image/login - login page
- POST /image/login - login handler
- GET /image/logout - logout

Admin panel

AdminJS is wired at the path defined by `ADMINPANELROOTPATH` (defaults to `/admin`). It exposes models like HostelFac, HostelList, InterHostel, Sports, Tech, Welfare, Facility, Cultural, Department, Fest. To use it, set the admin credentials environment variables and visit `/admin`.

## Frontend routes

The React app uses client-side routing (basename `/freshers`) and includes pages such as:

- `/` - Homepage
- `/hostel-list` - List hostels
- `/hostel-events` - Inter-hostel events
- `/hostel-fac` - Hostel facilities
- `/facilities` - Facilities
- `/info` - Info page
- `/department` - Departments
- `/branch-change` - Branch change
- `/minor` - Minor page
- `/swb` - Welfare page
- `/cult` - Cultural page
- `/tech` - Tech board
- `/sports` - Sports board
- `/hab` - Hab page
- `/fests` - Fests
- `/sgc` - SGC
- `/faqs` - FAQs
- `/contact` - Contact page

The frontend fetches API data from endpoints like `${process.env.REACT_APP_BACKEND_BASE_URL}/cultural` and similar. If `REACT_APP_BACKEND_BASE_URL` is not set, the frontend uses relative paths.

## Notes, assumptions and next steps

- Some backend model files in `backend/src/models/` looked incomplete or empty (e.g. `Home.model.js`). If you plan to use those models, please verify and complete their definitions.
- The Docker Compose files reference external networks. You may need to adapt or remove `networks.external` in the compose files if you don't have those networks created.
- Admin credentials are read from environment variables and protected by AdminJS.

Suggested small improvements (optional):

- Add a top-level `.env.example` listing required environment variables.
- Add npm scripts in the backend `package.json` for `dev` (nodemon) and `start:prod` (node) to clarify usage.
- Add a small `CONTRIBUTING.md` with guidelines for adding new pages or API routes.

## How I verified

- I inspected `backend/index.js`, `backend/src/app.js`, controllers in `backend/src/controllers/`, several models in `backend/src/models/`, `backend/admin_panel/admin-config.js`, frontend `package.json`, `frontend/src/index.js`, `frontend/src/App.js`, and Dockerfiles/docker-compose for both services to extract startup commands and endpoints.

If you want, I can also:

- create a `.env.example` file in the `backend` folder
- add the suggested npm scripts to `backend/package.json`
- run a quick smoke test script (if you provide a running MongoDB) to verify endpoints

Would you like me to add `.env.example` and the npm script edits now?

