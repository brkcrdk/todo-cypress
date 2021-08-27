import styled from 'styled-components';
import useStoreMacro from '@90pixel/zustand.macro';
import { TodoContainer, TodoElement, Message } from 'components';
import { Header } from 'semantic-ui-react';
import AddTodoSection from './AddTodoSection';
import Controllers from './Controllers';
import { useState, useEffect } from 'react';

function Main() {
  const { todos, deleteTodo, toggleTodo } = useStoreMacro();
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [type, setType] = useState('all');

  useEffect(() => {
    if (todos && type === 'all') setFilteredTodos(todos);
    if (todos && type === 'completed') {
      const completedTodos = todos.filter((todo) => todo.isDone);
      return setFilteredTodos(completedTodos);
    }
    if (todos && type === 'todos') {
      const uncompletedTodos = todos.filter((todo) => !todo.isDone);
      return setFilteredTodos(uncompletedTodos);
    }
  }, [todos, type]);

  return (
    <Container>
      <Header data-cy="todo-header" as="h2">
        Yapılacak Listesi
      </Header>
      <AddTodoSection />
      {!!todos.length && <Controllers type={type} setType={setType} />}
      {!todos?.length ? (
        <Message
          data-cy="empty-message"
          warning
          header="Yapacak bir işin yok!"
          content="Bir iş ekleyerek güne başla."
        />
      ) : (
        <TodoContainer data-cy="todo-container">
          {filteredTodos?.map((todo, index) => (
            <TodoElement
              key={`todo-${todo}`}
              label={todo.task}
              isDone={todo.isDone}
              onDelete={() => deleteTodo(index)}
              onToggle={() => toggleTodo(index)}
            />
          ))}
        </TodoContainer>
      )}
    </Container>
  );
}
export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 500px;
  padding-top: 72px;
`;
