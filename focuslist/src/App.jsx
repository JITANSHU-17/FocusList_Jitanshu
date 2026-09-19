import { useMemo, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";

import { createTask } from "./utils/taskUtils";

function App() {
  const [tasks, setTasks] = useLocalStorage("focuslist-tasks", []);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("all");

  const handleAddTask = (title, taskPriority) => {
    const newTask = createTask(title, taskPriority);

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

  const filteredTasks = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus =
        status === "all" ||
        (status === "active" && !task.completed) ||
        (status === "completed" && task.completed);

      const matchesPriority =
        priority === "all" ||
        task.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [tasks, search, status, priority]);

  return (
    <div className="app">
      <div className="app-container">
        <Header />

        <main>
          <TaskStats tasks={tasks} />

          <TaskForm onAddTask={handleAddTask} />

          <TaskFilters
            search={search}
            onSearchChange={setSearch}
            status={status}
            onStatusChange={setStatus}
            priority={priority}
            onPriorityChange={setPriority}
          />

          <TaskList
            tasks={filteredTasks}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
            hasActiveFilters={
              search.trim() !== "" ||
              status !== "all" ||
              priority !== "all"
            }
          />
        </main>
      </div>
    </div>
  );
}

export default App;