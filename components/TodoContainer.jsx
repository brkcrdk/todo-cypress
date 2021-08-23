import styled from 'styled-components';

function TodoContainer({ children, ...props }) {
  return <List {...props}>{children}</List>;
}
export default TodoContainer;

const List = styled.ul`
  width: 100% !important;
`;
