import { useState } from "react";

function TaskItem({
  task,
  onToggleComplete,
  onDeleteTask,
  onEditTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState(task.priority);

  const handleStartEditing = () => {
    setEditTitle(task.title);
    setEditPriority(task.priority);
    setIsEditing(true);
  };

  const handleCancelEditing = () => {
    setEditTitle(task.title);
    setEditPriority(task.priority);
    setIsEditing(false);
  };

  const handleSaveEditing = () => {
    const trimmedTitle = editTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    onEditTask(task.id, {
      title: trimmedTitle,
      priority: editPriority,
    });

    setIsEditing(false);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    handleSaveEditing();
  };

  if (isEditing) {
    return (
      <article className="task-item task-item-editing">
        <form
          className="edit-task-form"
          onSubmit={handleEditSubmit}
        >
          <input
            type="text"
            value={editTitle}
            onChange={(event) =>
              setEditTitle(event.target.value)
            }
            maxLength={120}
            aria-label="Edit task title"
            autoFocus
          />

          <select
            value={editPriority}
            onChange={(event) =>
              setEditPriority(event.target.value)
            }
            aria-label="Edit task priority"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <div className="edit-actions">
            <button
              type="submit"
              className="save-button"
            >
              Save
            </button>

            <button
              type="button"
              className="cancel-button"
              onClick={handleCancelEditing}
            >
              Cancel
            </button>
          </div>
        </form>
      </article>
    );
  }

  return (
    <article
      className={`task-item ${
        task.completed ? "task-completed" : ""
      }`}
    >
      <div className="task-main">
        <input
            type="checkbox"
            className="task-checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            aria-label={
                task.completed
                ? `Mark ${task.title} as active`
                : `Mark ${task.title} as completed`
            }
        />

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
            className="edit-button"
            onClick={handleStartEditing}
            aria-label={`Edit ${task.title}`}
            >
            Edit
        </button>

        <button
            type="button"
            className="delete-button"
            onClick={() => {
                const confirmed = window.confirm(`Delete "${task.title}"?`);

                if (confirmed) {
                onDeleteTask(task.id);
                }
            }}
            aria-label={`Delete ${task.title}`}
            >
            Delete
        </button>
      </div>
    </article>
  );
}

export default TaskItem;