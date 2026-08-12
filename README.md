# Prep.AI - AI Mock Interview Platform

Prep.AI is a full-stack interview-preparation platform that creates tailored mock interviews, evaluates candidate responses, and delivers actionable performance reports. Candidates can practice with role-specific questions, optionally ground sessions in an uploaded resume, review interview history, and download feedback as a PDF.

## Features

- **AI-generated interviews** - creates five tailored questions from a target role, experience level, interview mode, skills, projects, and resume context.
- **Resume-aware preparation** - extracts text from uploaded PDF resumes to make question generation more relevant.
- **Answer evaluation** - scores submitted answers and returns practical, interviewer-style feedback.
- **Interview reports** - calculates an overall score, shows question-level performance, and supports PDF report downloads.
- **Progress tracking** - stores completed interviews so users can revisit their history and reports.
- **Google sign-in** - authenticates users with Firebase Google Authentication and secure HTTP-only session cookies.


## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, Vite, React Router, Redux Toolkit, Tailwind CSS, Motion |
| Backend | Node.js, Express 5, Mongoose, JWT, Multer |
| Database | MongoDB |
| AI | OpenRouter API (`openai/gpt-4o-mini`) |
| Authentication | Firebase Authentication (Google) |
| Reports | jsPDF, jsPDF AutoTable |

## Project Structure

```text
AI-Mock-Interview/
|-- client/                 # React + Vite application
|   `-- src/
|       |-- components/     # Interview flow and shared UI
|       |-- pages/          # App routes
|       |-- redux/          # User state
|       `-- utils/          # Firebase configuration
|-- server/                 # Express API
|   |-- controllers/        # Auth, interview, payment, and user logic
|   |-- models/             # MongoDB schemas
|   |-- routes/             # API endpoints
|   `-- services/           # OpenRouter 
`-- README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- MongoDB (local instance or MongoDB Atlas)
- A Firebase project with Google Authentication enabled
- An OpenRouter API key

### 1. Clone the repository

```bash
git clone https://github.com/AshishBaghel01/AI-Mock-Interview.git
cd AI-Mock-Interview
```

### 2. Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 3. Configure environment variables

Create `server/.env`:

```env
PORT=6000
MONGODB_URL=mongodb://127.0.0.1:27017/aimockinterview
JWT_SECRET=replace-with-a-long-random-secret
OPENROUTER_API_KEY=your-openrouter-api-key
CLIENT_URLS=http://localhost:5173
```

Create `client/.env`:

```env
VITE_SERVER_URL=http://localhost:6000
VITE_FIREBASE_APIKEY=your-firebase-web-api-key
```


### 4. Run the application

Start the API in one terminal:

```bash
cd server
npm run dev
```

Start the client in another terminal:

```bash
cd client
npm run dev
```

## Available Scripts

| Directory | Command | Description |
| --- | --- | --- |
| `client` | `npm run dev` | Starts the Vite development server. |
| `client` | `npm run build` | Creates a production client build. |
| `client` | `npm run lint` | Lints the client source. |
| `client` | `npm run preview` | Previews the production build. |
| `server` | `npm run dev` | Starts the API with Nodemon. |
| `server` | `npm start` | Starts the API with Node.js. |

## API Overview

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/auth/google` | Creates or signs in a Google-authenticated user. |
| `GET` | `/api/auth/logout` | Ends the authenticated session. |
| `GET` | `/api/user/current-user` | Returns the current user. |
| `POST` | `/api/interview/resume` | Extracts text and structured details from a PDF resume. |
| `POST` | `/api/interview/generate-questions` | Creates a personalized interview. |
| `POST` | `/api/interview/submit-answer` | Evaluates an answer. |
| `POST` | `/api/interview/finish` | Finalizes an interview report. |
| `GET` | `/api/interview/get-interview` | Lists a user's interviews. |
| `GET` | `/api/interview/report/:id` | Returns a completed interview report. |


## Deployment Notes

- Set `VITE_SERVER_URL` to the deployed API URL before building the client.
- Set `CLIENT_URLS` on the API to a comma-separated list of permitted frontend origins.
- Add the deployed frontend hostname to Firebase Authentication's **Authorized domains** list for Google sign-in.
- Use HTTPS in production so cross-site authentication cookies can be sent securely.


