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
    toggleTodo: (todoIndex) => {
      const updatedTodo = get().todos.map((todo, index) => {
        if (index === todoIndex) return { ...todo, isDone: !todo.isDone };
        return todo;
      });
      set({ todos: updatedTodo });
    },
  };
};

export default todoStore;
