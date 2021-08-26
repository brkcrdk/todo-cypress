import styled from 'styled-components';
import { Checkbox, Button } from 'semantic-ui-react';

function TodoElement({ label, isDone, onDelete, onToggle, ...props }) {
  return (
    <ListItem data-cy="todo-element" {...props}>
      <Button
        data-cy="todo-delete-btn"
        icon="trash"
        color="red"
        size="mini"
        onClick={onDelete}
      />
      <CustomCheckbox
        data-cy="todo-checkbox"
        primary
        label={label}
        isDone={isDone}
        checked={isDone}
        onChange={onToggle}
      />
    </ListItem>
  );
}
export default TodoElement;

const ListItem = styled.li`
  display: flex !important;
  width: 100% !important;
  align-items: center;
  position: relative;
  padding: 12px !important;
  border-radius: 4px;
  &:hover {
    background: #eee;
  }
  button {
    position: absolute;
    right: 6px;
    opacity: 0;
    pointer-events: none;
  }
  &:hover button {
    opacity: 1;
    pointer-events: all;
  }
`;

const CustomCheckbox = styled(Checkbox)`
  label {
    text-decoration: ${(p) => p.isDone && 'line-through'};
    color: ${(p) => p.isDone && '#ccc !important'};
  }
`;
