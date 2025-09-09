# Django + React Task App

A simple **full-stack Task Management app** built with **Django + Django REST Framework** for the backend and **React** for the frontend.  
Features include creating tasks, listing tasks, and toggling tasks as done/undone.

---

## **Tech Stack**

- **Backend:** Python, Django, Django REST Framework
- **Frontend:** React, Axios
- **Database:** SQLite (default Django database)
- **Other:** CORS handled for frontend-backend communication

---

## **Project Structure**

/backend # Django project
manage.py
/tasks # Django app with models, serializers, views
/frontend # React project
package.json
src/
.gitignore
README.md


---

## **Setup Instructions**

### **1. Backend (Django + DRF)**

1. Create virtual environment:

```bash
python -m venv venv

Activate virtual environment:

Windows: venv\Scripts\activate

Mac/Linux: source venv/bin/activate

Install dependencies:

pip install django djangorestframework django-cors-headers

Migrate database:
python manage.py makemigrations
python manage.py migrate

Run backend server:
python manage.py runserver

API will be available at: http://127.0.0.1:8000/api/tasks/

2. Frontend (React)

Navigate to frontend folder:
cd frontend

Install dependencies:
npm install

Start React app:

npm start


Frontend will run at: http://localhost:3000/

API Endpoints
| Method | URL                       | Description                                          |
| ------ | ------------------------- | ---------------------------------------------------- |
| GET    | `/api/tasks/`             | List all tasks                                       |
| POST   | `/api/tasks/`             | Create a new task (JSON: `{ "title": "Task Name" }`) |
| PATCH  | `/api/tasks/<id>/toggle/` | Toggle task as done/undone                           |

Features

View list of tasks

Add new tasks

Toggle tasks as done/undone

Notes

Ignore venv/, node_modules/, build/, .env, and db.sqlite3 (included in .gitignore)

Ensure backend is running before using frontend

Customize API base URL in App.jsx if needed.
