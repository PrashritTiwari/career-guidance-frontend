Career Guidance Frontend

Career Guidance Frontend is a modern web application built with React.js and Vanilla CSS. It serves as the user-facing interface for an AI-powered career guidance system, allowing students to explore career options, interact with the AI in real-time, receive personalized recommendations, and manage their sessions seamlessly. The frontend communicates with the backend API to provide a smooth, responsive, and intuitive user experience.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Live Demo

Experience the application here:
https://career-guidance-frontend-flame.vercel.app/

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Features

Interactive Chat: Communicate with the AI career guidance system in real-time.

Session Management: Conversations are tracked via the backend for continuity.

Responsive UI: Clean and user-friendly design with Vanilla CSS and React components.

Career Recommendations: Users receive AI-powered personalized career guidance.

Error Handling: Graceful handling of API errors and connection issues.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Project Structure : 

src/
Components/
  Body/
   Body Picture/
    Bodypic.css
    Bodypic.jsx
   Body Text/
    Bodytext.css
    Bodytext.jsx
   Footer/
    Footer.css
    Footer.jsx
   Body.css
   Body.jsx
  Navbar/
   Home Button/
    Homeb.css
    Homeb.jsx
    Homeb1.css
    Homeb1.jsx
   Logo/
    Logo.css
    Logo.jsx
   Nav.css
   Nav.jsx
 Hooks/
  useSession.js
 Pages/
  Home/
   Home.css
   Home.jsx
  Questionaries/
   Question.css
   Question.jsx
 assets/
  assets/
   Ai.png
   career-logo.png
   react.svg
  Ai.png
  career-logo.png
  react.svg
 utils/
  helper.js
  questions.json
 index.css
 main.jsx

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Related Backend Repo

This frontend connects to the backend located at:
👉 Career Guidance Backend : https://github.com/PrabeshPathak2002/career-guidance-backend

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Setup Instructions

Clone the Repository

git clone https://github.com/PrashritTiwari/career-guidance-frontend.git
cd career-guidance-frontend


Install Dependencies

npm install

Run the App

npm start

Open http://localhost:3000
 to see the app in your browser.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Usage

Send a Message: Type a question in the chat input and press Enter or click Send.

Receive AI Response: Responses appear in the chat window in real-time.

Session Persistence: Each chat session is tracked by the backend to maintain context.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Credits

Frontend: React.js + Vanilla CSS

Backend: Django/FastAPI-based Career Guidance API

AI: OpenAI / OpenRouter API

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

License

See LICENSE file.
