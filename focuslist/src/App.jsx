import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { createTask } from "./utils/taskUtils";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (title, priority) => {
    const newTask = createTask(title, priority);

    setTasks((currentTasks) => [
      newTask,
      ...currentTasks,
    ]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== taskId
      )
    );
  };

  const handleEditTask = (taskId, updates) => {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            ...updates,
          }
        : task
    )
  );
};

  return (
    <div className="app">
      <div className="app-container">
        <Header />

        <main>
          <TaskStats tasks={tasks} />

          <TaskForm onAddTask={handleAddTask} />

          <section className="filter-section">
            <input
              type="search"
              placeholder="Search tasks..."
              aria-label="Search tasks"
              disabled
            />

            <div className="filter-row">
              <div className="status-filters">
                <button
                  type="button"
                  className="active"
                  disabled
                >
                  All
                </button>

                <button
                  type="button"
                  disabled
                >
                  Active
                </button>

                <button
                  type="button"
                  disabled
                >
                  Completed
                </button>
              </div>

              <select
                defaultValue="all"
                aria-label="Filter by priority"
                disabled
              >
                <option value="all">
                  All Priorities
                </option>

                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </section>

          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}

          />
        </main>
      </div>
    </div>
  );
}

export default App;