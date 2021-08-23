import styled from 'styled-components';
import { List } from 'semantic-ui-react';

function TodoContainer({ children, ...props }) {
  return <StyledList {...props}>{children}</StyledList>;
}
export default TodoContainer;

const StyledList = styled(List)`
  width: 100% !important;
`;
