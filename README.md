## React Frontend

### audioManager Frontend

Welcome to the audioManager React frontend! This project is designed to manage audio recordings.

#### Getting Started

To get started with the frontend, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `frontend` directory:

   ```
   cd frontend
   ```

3. Install project dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Access the frontend in your web browser at <http://localhost:3000>

#### Features

- Record and manage audio recordings.
- Integration with wavesurfer.js for audio visualization.
- Upload and interact with audio files.
- Uses Material-UI for a modern UI design.

#### Dependencies

- Node.js 18.13
- React 18.2
- Material-UI 5.14.7
- axios 1.5.0
- react-router-dom 6.15.0

## Django Backend

### audioManager Backend

Welcome to the audioManager Django backend! This project is designed to manage audio recordings.

#### Getting Started

To get started with the backend, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `audioManager` directory:

   ```
   cd audioManager
   ```

3. Create a virtual environment and activate it (optional but recommended):

   ```
   python -m venv venv
   source venv/bin/activate
   ```

4. Install project dependencies:

   ```
   pip install -r requirements.txt
   ```

5. Install PostgreSQL: Make sure you have PostgreSQL installed on your system. You can download it from the official website: <https://www.postgresql.org/download/>

6. Configure Database Settings: Open the `settings.py` file located in the `backend` directory of your project. Find the `DATABASES` section and update the following settings:

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': '',  # Replace with your desired database name
           'USER': '',      # Replace with your PostgreSQL username
           'PASSWORD': '',       # Replace with your PostgreSQL password
           'HOST': 'localhost',     # Replace with your database host
           'PORT': '5432',          # Replace with your database port
       }
   }

7. Apply database migrations:

   ```
   python manage.py migrate
   ```

8. Start the development server:

   ```
   python manage.py runserver
   ```

9. Access the backend API in your web browser at <http://localhost:8000>

#### Features

- Manage audio recordings and titles using Django admin.
- RESTful API for audio recordings and endpoints.
- ASGI support for asynchronous processing.
- Cross-origin resource sharing (CORS) with django-cors-headers.

#### Dependencies

- Python 3.9
- Django 4.2.4
- djangorestframework 3.14.0
- django-cors-headers 4.2.0
- psycopg2 2.9.7

