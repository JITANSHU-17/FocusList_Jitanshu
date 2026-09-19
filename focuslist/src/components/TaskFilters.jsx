function TaskFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
  priority,
  onPriorityChange,
}) {
  const handleClearFilters = () => {
    onSearchChange("");
    onStatusChange("all");
    onPriorityChange("all");
  };

  return (
    <section className="filter-section">
      <input
        type="search"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        placeholder="Search tasks..."
        aria-label="Search tasks by title"
      />

      <div className="filter-row">
        <div
          className="status-filters"
          aria-label="Filter tasks by status"
        >
          <button
            type="button"
            className={status === "all" ? "active" : ""}
            onClick={() => onStatusChange("all")}
            aria-pressed={status === "all"}
          >
            All
          </button>

          <button
            type="button"
            className={status === "active" ? "active" : ""}
            onClick={() => onStatusChange("active")}
            aria-pressed={status === "active"}
          >
            Active
          </button>

          <button
            type="button"
            className={
              status === "completed" ? "active" : ""
            }
            onClick={() => onStatusChange("completed")}
            aria-pressed={status === "completed"}
          >
            Completed
          </button>
        </div>

        <select
          value={priority}
          onChange={(event) =>
            onPriorityChange(event.target.value)
          }
          aria-label="Filter tasks by priority"
        >
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      {(search ||
        status !== "all" ||
        priority !== "all") && (
        <button
          type="button"
          className="clear-filters-button"
          onClick={handleClearFilters}
        >
          Clear filters
        </button>
      )}
    </section>
  );
}

export default TaskFilters;