const todoStore = (set, get) => {
  return {
    todos: [],
    addTodo: (todo) => set({ todos: get().todos.concat(todo) }),
    clearAll: () => set({ todos: [] }),
    deleteTodo: (todoIndex) => {
      const filteredTodo = get().todos.filter(
        (todo, index) => index !== todoIndex
      );
      set({ todos: filteredTodo });
    },
  };
};

export default todoStore;
