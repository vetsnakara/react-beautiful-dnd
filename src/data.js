export default {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Content 1"
    },
    "task-2": {
      id: "task-2",
      content: "Content 2"
    },
    "task-3": {
      id: "task-3",
      content: "Content 3"
    },
    "task-4": {
      id: "task-4",
      content: "Content 4"
    }
  },
  columns: {
    "column-1": {
      id: "column-1",
      name: "Column 1",
      taskIds: ["task-1", "task-2"]
    },
    "column-2": {
      id: "column-2",
      name: "Column 2",
      taskIds: ["task-3", "task-4"]
    },
    "column-3": {
      id: "column-3",
      name: "Column 3",
      taskIds: []
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};
