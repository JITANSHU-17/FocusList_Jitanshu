import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onToggleComplete,
  onDeleteTask,
  onEditTask,
  hasActiveFilters,
}) {
  if (tasks.length === 0) {
    return (
      <section className="task-list">
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">
            {hasActiveFilters ? "⌕" : "✓"}
          </div>

          <h2>
            {hasActiveFilters ? "No matching tasks" : "No tasks yet"}
          </h2>

          <p>
            {hasActiveFilters
              ? "Try changing your search or filters."
              : "Add your first task and start focusing."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="task-list" aria-label="Task list">
      <div className="task-list-header">
        <h2>Your Tasks</h2>

        <span className="task-count">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </span>
      </div>

      <div className="task-items">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskList;