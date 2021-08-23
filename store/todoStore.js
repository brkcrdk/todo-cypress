const todoStore = (set, get) => {
  return {
    todos: [],
    addTodo: (todo) => set({ todos: get().todos.concat(todo) }),
    clearAll: () => set({ todos: [] }),
  };
};

export default todoStore;
