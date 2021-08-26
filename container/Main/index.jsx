import styled from 'styled-components';
import useStoreMacro from '@90pixel/zustand.macro';
import { TodoContainer, TodoElement, Message } from 'components';
import { Header } from 'semantic-ui-react';
import AddTodoSection from './AddTodoSection';
import Controllers from './Controllers';

function Main() {
  const { todos, deleteTodo } = useStoreMacro();

  return (
    <Container>
      <Header data-cy="todo-header" as="h2">
        Yapılacak Listesi
      </Header>
      <AddTodoSection />
      {!!todos.length && <Controllers />}
      {!todos?.length ? (
        <Message
          data-cy="empty-message"
          warning
          header="Yapacak bir işin yok!"
          content="Bir iş ekleyerek güne başla."
        />
      ) : (
        <TodoContainer data-cy="todo-container">
          {todos?.map((todo, index) => (
            <TodoElement
              key={`todo-${todo}`}
              label={todo.task}
              onDelete={() => deleteTodo(index)}
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
