function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <section className="stats-grid" aria-label="Task statistics">
      <div className="stat-card">
        <span className="stat-label">Total Tasks</span>
        <strong>{totalTasks}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label">Completed</span>
        <strong>{completedTasks}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label">Pending</span>
        <strong>{pendingTasks}</strong>
      </div>
    </section>
  );
}

export default TaskStats;