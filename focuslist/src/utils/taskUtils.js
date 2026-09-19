export const createTask = (title, priority = "medium") => {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    priority,
    completed: false,
    createdAt: new Date().toISOString(),
  };
};