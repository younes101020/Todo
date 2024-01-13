# Todolist App

## Description

This web-based todolist application offers an intuitive interface to easily manage your daily tasks. It allows creating, modifying, and deleting tasks, as well as marking them as completed. Users can assign tags, set priority levels, and select from three status options for each task.

## Key Features

- **Task Addition:** Users can add new tasks with detailed descriptions.
- **Editing:** Ability to edit existing task details.
- **Marking Tasks Completed:** Allows marking tasks as completed.
- **Deletion:** Ability to remove tasks from the list.
- **Tags:** Assign tags to tasks for better organization.
- **Priority Levels:** Set priority levels for tasks.
- **Status Options:** Choose between three status options for each task.
- **Intuitive Interface:** User-friendly interface for easy navigation and usage.

## Technologies Used

- **Frontend:** NextJS, Tailwind and React-Query
- **Backend:** Node.js (NestJS framework)
- **Database:** PostgreSQL with Prisma

## Installation

1. Clone the repository: `git clone git@github.com:younes101020/Todo.git`
2. Navigate to the directory: `cd Todo`
3. Install dependencies: `npm install`
4. Create .env file into root of project and add these variables on it, make sure to update database credentials

```
DATABASE_URL="postgres://<POSTGRES_USER>:<POSTGRES_PASS>@localhost:5432/todo"
REST_API_BASE_URL="http://localhost:3001"
```

5. Create "todo" database
6. Sync database with our prisma migration files `cd apps/backend && npx prisma migrate dev`
7. Sync the prisma client you initially installed with prisma our schema `npx prisma generate`
8. Seed database with sample data `npx prisma db seed`
9. Start the application: `cd ../../ && npm run dev`

## Usage

1. Open the application in a web browser.
2. Add tasks by clicking the "Add Task" button and provide detailed descriptions.
3. Assign tags, specify the current status of your task and set priority levels for better organization.
4. Check completed tasks to mark them as done.
5. Edit or delete tasks using the provided options.

## Contribution

Contributions are welcome! If you'd like to contribute to this application, please follow these steps:

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -am 'Added a new feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.
