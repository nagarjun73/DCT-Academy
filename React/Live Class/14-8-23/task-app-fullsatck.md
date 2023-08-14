*Full Stack Single-Page Task Manager App (Without User Authentication)*

Build a full-stack Single-Page Application (SPA) Task Manager that enables users to create, update, and delete tasks. This app will include both frontend and backend components, utilizing a RESTful API for managing task data.

*Frontend Requirements:*

1. *Task Management Interface:*
   Create a single-page interface that allows users to manage tasks.
   
   - Display a list of tasks with task names and status.
   - Provide options to add new tasks, edit existing tasks, and delete tasks.

2. *Add/Edit Task Form:*
   Implement a form for adding new tasks or editing existing tasks.
   
   - Include input fields for task title, description, due date, and status.
   - Allow users to submit the form to add or update tasks.

*Backend Requirements:*

1. *Task API:*
   Create a RESTful API to manage task data.
   
   - Set up routes for CRUD operations on tasks.
   - Use appropriate HTTP methods (POST, PUT, DELETE, GET) for each operation.
   - Use a database (e.g., MongoDB) to store task data.

*Implementation Steps:*

1. *Frontend:*
   - Create a single-page interface using a frontend framework like React or Vue.js.
   - Develop components for task list, add/edit task forms, and other UI elements.
   - Use AJAX or Axios to make API requests to the backend.

2. *Backend:*
   - Set up a Node.js server using Express.js.
   - Create routes for CRUD operations on tasks.
   - Utilize a database (e.g., MongoDB) to store and retrieve task data.

3. *Connect Frontend and Backend:*
   - Make API requests from the frontend to interact with the backend.

*User Flow:*

1. Users open the app and view the task list on the single-page interface.
2. Users can add, edit, or delete tasks using the provided forms.

*Guidelines:*

- Organize your project structure in a modular and maintainable manner.
- Implement error handling and validation for smooth user experience.
- Apply responsive design to ensure the app works well on different devices.

*Bonus:*

- Allow users to prioritize tasks.
- Implement task filtering and sorting options.
- Add due date reminders or notifications.
- Incorporate real-time updates using WebSockets.

*Note:*

## API Documentation 

### baseurl - http://localhost:3033

| Method | Endpoint             | Description                           | Request Body                           | Response Body              |
|--------|----------------------|---------------------------------------|-----------------------------------------|----------------------------|
| GET    | `/api/tasks`         | Retrieve all tasks                    | N/A                                     | Array of task objects     |
| GET    | `/api/tasks/:taskId` | Retrieve a specific task by ID         | N/A                                     | Single task object        |
| POST   | `/api/tasks`         | Create a new task                     | JSON: `{ title, description, isCompleted, dueDate }` | Created task object       |
| PUT    | `/api/tasks/:taskId` | Update a task by ID                   | JSON: `{ title, description, isCompleted,dueDate }` | Updated task object       |
| DELETE | `/api/tasks/:taskId` | Delete a task by ID                   | N/A                                     | Deleted task object       |

- *Method:* The HTTP method used for the operation (GET, POST, PUT, DELETE).
- *Endpoint:* The URL endpoint for the API operation.
- *Description:* A brief description of the operation's purpose.
- *Request Body:* The expected JSON data format in the request body (for POST and PUT requests).
- *Response Body:* The JSON data format returned in the response body.