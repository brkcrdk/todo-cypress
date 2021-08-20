import { useState } from 'react';
import styled from 'styled-components';
import { Input, Message } from 'semantic-ui-react';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Container>
      <Header as="h3">Yapılacak Listesi</Header>
      <Controllers>
        <CustomInput
          placeholder="Bir iş ekle..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button>Ekle</Button>
      </Controllers>
      <CustomMessage
        warning
        header="Yapacak bir işin yok!"
        content="Bir iş ekleyerek güne başla."
      />
    </Container>
  );
}
export default Home;

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

const Controllers = styled.div`
  display: flex;
  width: 100%;
`;
const CustomInput = styled(Input)`
  width: 100% !important;
`;
const Button = styled.button`
  margin-left: 14px;
  border-radius: 4px;
  background: #ccc;
  padding: 12px 24px;
  color: #eee;
`;

const CustomMessage = styled(Message)`
  text-align: center;
`;
