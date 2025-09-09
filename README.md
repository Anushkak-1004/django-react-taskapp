

```markdown
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

```

/backend         # Django project
manage.py
/tasks       # Django app with models, serializers, views
/frontend        # React project
package.json
src/
.gitignore
README.md

````

---

## **Setup Instructions**

### **1. Backend (Django + DRF)**

1. Create virtual environment:

```bash
python -m venv venv
````

2. Activate virtual environment:

* **Windows:** `venv\Scripts\activate`
* **Mac/Linux:** `source venv/bin/activate`

3. Install dependencies:

```bash
pip install django djangorestframework django-cors-headers
```

4. Migrate database:

```bash
python manage.py makemigrations
python manage.py migrate
```

5. Run backend server:

```bash
python manage.py runserver
```

* API will be available at: `http://127.0.0.1:8000/api/tasks/`

---

### **2. Frontend (React)**

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start React app:

```bash
npm start
```

* Frontend will run at: `http://localhost:3000/`

---

## **API Endpoints**

| Method | URL                       | Description                                          |
| ------ | ------------------------- | ---------------------------------------------------- |
| GET    | `/api/tasks/`             | List all tasks                                       |
| POST   | `/api/tasks/`             | Create a new task (JSON: `{ "title": "Task Name" }`) |
| PATCH  | `/api/tasks/<id>/toggle/` | Toggle task as done/undone                           |

---

## **Features**

* View list of tasks
* Add new tasks
* Toggle tasks as done/undone

---

## **Notes**

* **Ignore `venv/`, `node_modules/`, `build/`, `.env`, and `db.sqlite3`** (included in `.gitignore`)
* Ensure backend is running before using frontend
* Customize API base URL in `App.jsx` if needed


