import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <div>
            <h1>FocusList</h1>
            <p>Focus on what matters today.</p>
          </div>
        </header>

        <main>
          <section className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">Total Tasks</span>
              <strong>0</strong>
            </div>

            <div className="stat-card">
              <span className="stat-label">Completed</span>
              <strong>0</strong>
            </div>

            <div className="stat-card">
              <span className="stat-label">Pending</span>
              <strong>0</strong>
            </div>
          </section>

          <section className="task-form-card">
            <input
              type="text"
              placeholder="What needs to be done?"
              aria-label="Task title"
            />

            <select aria-label="Task priority" defaultValue="medium">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <button type="button">Add Task</button>
          </section>

          <section className="filter-section">
            <input
              type="search"
              placeholder="Search tasks..."
              aria-label="Search tasks"
            />

            <div className="filter-row">
              <div className="status-filters">
                <button className="active">All</button>
                <button>Active</button>
                <button>Completed</button>
              </div>

              <select defaultValue="all" aria-label="Filter by priority">
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </section>

          <section className="task-list">
            <div className="empty-state">
              <div className="empty-icon">✓</div>
              <h2>No tasks yet</h2>
              <p>Add your first task and start focusing.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;