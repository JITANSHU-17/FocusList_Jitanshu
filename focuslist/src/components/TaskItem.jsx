function TaskItem({
  task,
  onToggleComplete,
  onDeleteTask,
}) {
  return (
    <article
      className={`task-item ${
        task.completed ? "task-completed" : ""
      }`}
    >
      <div className="task-main">
        <button
          type="button"
          className={`task-checkbox ${
            task.completed ? "checked" : ""
          }`}
          onClick={() => onToggleComplete(task.id)}
          aria-label={
            task.completed
              ? `Mark ${task.title} as active`
              : `Mark ${task.title} as completed`
          }
          aria-pressed={task.completed}
        >
          {task.completed ? "✓" : ""}
        </button>

        <div className="task-content">
          <h3>{task.title}</h3>

          <span
            className={`priority-badge priority-${task.priority}`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <div className="task-actions">
        <button
          type="button"
          className="delete-button"
          onClick={() => onDeleteTask(task.id)}
          aria-label={`Delete ${task.title}`}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskItem;
