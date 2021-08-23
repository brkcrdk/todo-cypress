const todoStore = (set, get) => {
  return {
    todos: [1, 2, 3],
    addTodo: (todo) => set({ todos: get().todos.concat(todo) }),
  };
};

export default todoStore;
