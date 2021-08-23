import { useState } from 'react';
import styled from 'styled-components';
import { Button, Radio } from 'semantic-ui-react';
import useStoreMacro from '@90pixel/zustand.macro';
import { TodoContainer, TodoElement, Message } from 'components';

import AddTodoSection from './AddTodoSection';

function Main() {
  const { todos, clearAll } = useStoreMacro();
  const [type, setType] = useState('all');

  return (
    <Container>
      <Header as="h3">Yapılacak Listesi</Header>
      <AddTodoSection />
      {!!todos.length && (
        <ToggleContainer>
          <Radio
            label="Hepsi"
            checked={type === 'all'}
            onChange={() => setType('all')}
          />
          <Radio
            label="Yapılacaklar"
            checked={type === 'todos'}
            onChange={() => setType('todos')}
          />
          <Radio
            label="Yapılmışlar"
            checked={type === 'completed'}
            onChange={() => setType('completed')}
          />
          <Button onClick={clearAll}>Temizle</Button>
        </ToggleContainer>
      )}
      {!todos?.length ? (
        <CustomMessage
          warning
          header="Yapacak bir işin yok!"
          content="Bir iş ekleyerek güne başla."
        />
      ) : (
        <TodoContainer>
          {todos?.map((todo) => (
            <TodoElement key={todo} label={`todo-${todo}`} />
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

const Header = styled.h2``;

const ToggleContainer = styled.ul`
  margin: 12px 0;
  .radio {
    margin: 0 12px;
  }
`;

const CustomMessage = styled(Message)`
  text-align: center;
`;
