# AI Resume Analyzer  

VISIT-  http://13.62.76.123:4000/

An AI-powered Resume Analyzer built using React (Vite), Node.js, Express.js, and Cohere AI. The application analyzes uploaded resumes against
job descriptions and generates ATS-style evaluations including skill gap analysis, strengths, weaknesses, and improvement suggestions.

---

# Features

* AI-powered Resume Analysis
* ATS Score Generation
* Resume vs Job Description Matching
* Missing Skills Detection
* Personalized Improvement Suggestions
* PDF Resume Upload
* PDF Text Extraction
* Structured JSON-based AI Responses
* Responsive Frontend UI
* Real-time Analysis Results
* Role-Based Access Control (RBAC)
* Secure API Integration
* REST API Architecture

---

# Tech Stack

## Frontend

* React.js
* Vite
* Axios
* HTML5
* CSS3

## Backend

* Node.js
* Express.js
* REST APIs
* Middleware Architecture

## AI Integration

* Cohere AI API
* Prompt Engineering
* Structured JSON Response Handling

## File Handling

* Multer
* pdf-parse

## Tools

* Git
* GitHub
* Postman / Thunder Client
* VS Code


## Install dependencies

```bash
npm install
```

## Install required packages

```bash
npm install express multer pdf-parse cohere-ai cors dotenv
```

## Create `.env` file

```env
COHERE_API_KEY=your_api_key_here
```

## Start backend server

```bash
node server.js
```

Backend will run on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Navigate to client folder

```bash
cd client
```

## Install dependencies

```bash
npm install
```

## Run frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# Application Workflow

```text
User Uploads Resume PDF
        ↓
React Frontend Sends Request
        ↓
Express Backend Receives File
        ↓
Multer Handles Upload
        ↓
pdf-parse Extracts Resume Text
        ↓
Cohere AI Analyzes Resume
        ↓
JSON Response Generated
        ↓
Frontend Displays ATS Analysis
```

---

# 🧠 AI Analysis Output

The application generates:

* ATS Compatibility Score
* Missing Skills
* Strength Analysis
* Improvement Suggestions
* Resume Evaluation Summary

Example Response:

```json
{
  "score": 85,
  "missing_skills": ["Docker", "AWS"],
  "strengths": ["Strong React knowledge"],
  "suggestions": ["Add cloud deployment projects"]
}
```

---

# Role-Based Access Control

## Admin

* Manage users
* Monitor analysis activity
* Access all reports

## Candidate/User

* Upload resumes
* View personal analysis results
* Receive improvement suggestions

---

# Key Technical Highlights

* Dynamic Prompt Engineering
* Structured AI Response Parsing
* Modular Backend Architecture
* Secure File Upload Handling
* Scalable API Design
* Semantic Resume Analysis using Cohere AI

---

# Challenges Faced

* Extracting clean text from complex PDF resumes
* Handling inconsistent AI-generated JSON responses
* Managing prompt size and API response latency
* Structuring AI outputs for frontend rendering

---

# Future Improvements

* Authentication System (JWT)
* Resume History Dashboard
* Downloadable PDF Reports
* Resume Template Suggestions
* AI Chat Assistant
* Cloud Deployment
* Analytics Dashboard

---

# 👨‍💻 Author

Developed by Sunil 

---

# If you found this project useful

Give this repository a star ⭐ on GitHub.
