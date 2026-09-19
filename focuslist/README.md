# FocusList

A clean and responsive React-based To-Do application for managing daily tasks with priorities, search, filtering, task statistics, and local persistence.

## Live Demo

Add your deployed application URL here after deployment.

**Live Demo:** `YOUR_DEPLOYED_URL`

## GitHub Repository

Add your GitHub repository URL here after pushing the project.

**Repository:** `https://github.com/JITANSHU-17/FocusList_Jitanshu`

---

## Features

* Create tasks with a title and priority
* Set task priority to High, Medium, or Low
* Mark tasks as completed or active
* Edit existing tasks
* Delete tasks with confirmation
* Search tasks by title
* Filter tasks by status:

  * All
  * Active
  * Completed
* Filter tasks by priority
* Combine search and multiple filters
* Dynamic task statistics:

  * Total
  * Completed
  * Pending
* Persist tasks using browser LocalStorage
* Responsive design for desktop, tablet, and mobile
* Keyboard-accessible controls and visible focus states
* Frontend-only architecture with no backend or database

---

## Tech Stack

* React
* JavaScript
* Vite
* CSS
* Browser LocalStorage
* Git
* GitHub

---

## Project Structure

```text
focuslist/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskStats.jsx
│   │   ├── TaskFilters.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   └── taskUtils.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

Check your versions:

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd focuslist
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally for testing.

---

## How It Works

FocusList stores tasks in the browser using LocalStorage.

Each task contains information such as:

```text
id
title
priority
completed
createdAt
```

Task operations update the React state, while the reusable `useLocalStorage` hook automatically saves the updated task list to LocalStorage.

Because there is no backend or database, task data is stored locally in the user's browser.

---

## Filtering

The application supports multiple filtering conditions.

Users can:

1. Search tasks by title.
2. Filter by completion status.
3. Filter by priority.
4. Combine these filters.

Filtering is performed against the underlying task data without modifying the original task collection.

---

## Responsive Design

The interface is designed for:

* Desktop
* Laptop
* Tablet
* Mobile devices

The layout adapts to smaller screen sizes while keeping task controls usable.

---

## Accessibility

FocusList includes several accessibility considerations:

* Semantic HTML elements
* Accessible labels for interactive controls
* Keyboard navigation
* Visible keyboard focus states
* `aria-label` and `aria-pressed` where appropriate
* Clear distinction between completed and active tasks
* Sufficiently clear visual hierarchy

---

## Performance

FocusList is a lightweight frontend application.

Performance considerations include:

* No backend requests
* No unnecessary external APIs
* Minimal dependencies
* Local data storage
* Derived filtering using React memoization
* Vite production build optimization

---

## Development Workflow

The project was developed incrementally using feature-based Git commits.

Example commit history:

```text
chore: initialize React Vite project
feat: add FocusList application layout
feat: implement task creation and management
feat: add task editing
feat: add search and task filtering
feat: persist tasks with local storage
style: improve responsive UI and accessibility
docs: add project documentation
```

This approach keeps the development history organized and makes individual changes easier to understand.

---

## Future Improvements

Possible future improvements include:

* Drag-and-drop task ordering
* Due dates
* Task categories
* Dark mode
* Task sorting
* Import/export tasks
* Additional productivity statistics
* Optional cloud synchronization

---

## License

This project is created as a frontend development practice project.
