import styled from 'styled-components';
import { Message as SemanticMessage } from 'semantic-ui-react';

function Message(props) {
  return <StyledMessage {...props} />;
}
export default Message;

const StyledMessage = styled(SemanticMessage)`
  text-align: center;
`;
