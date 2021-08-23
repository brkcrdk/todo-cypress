import { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react';
import useStoreMacro from '@90pixel/zustand.macro';

function AddTodoSection() {
  const [todoVal, setTodoVal] = useState('');
  const { addTodo } = useStoreMacro();

  return (
    <AddTodoContainer>
      <CustomInput
        placeholder="Bir iş ekle..."
        value={todoVal}
        onChange={(e) => setTodoVal(e.target.value)}
      />
      <CustomButton primary onClick={() => addTodo(14)}>
        Ekle
      </CustomButton>
    </AddTodoContainer>
  );
}
export default AddTodoSection;

const AddTodoContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CustomInput = styled(Input)`
  width: 100% !important;
`;

const CustomButton = styled(Button)`
  margin-left: 14px !important;
  border-radius: 4px;
  background: #ccc;
  padding: 12px 24px;
  color: #eee;
`;
