import { useState } from 'react';
import styled from 'styled-components';
import { Button, Radio } from 'semantic-ui-react';
import useStoreMacro from '@90pixel/zustand.macro';

function Controllers() {
  const { clearAll } = useStoreMacro();
  const [type, setType] = useState('all');

  return (
    <StyledControllers>
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
    </StyledControllers>
  );
}
export default Controllers;

const StyledControllers = styled.ul`
  margin: 12px 0;
  .radio {
    margin: 0 12px;
  }
`;