import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onToggleComplete,
  onDeleteTask,
  onEditTask,
}) {
  if (tasks.length === 0) {
    return (
      <section className="task-list">
        <div className="empty-state">
          <div className="empty-icon">✓</div>

          <h2>No tasks yet</h2>

          <p>
            Add your first task and start focusing.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="task-list" aria-label="Task list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </section>
  );
}

export default TaskList;