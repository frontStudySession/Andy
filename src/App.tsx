import { SubmitForm } from '@app/app/Form';
import { styled } from 'styled-components';

const FormLayout = styled.div`
  width: 100%;
  max-width: 600px;
  background: aliceblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  color: black;
`;

function App() {
  return (
    <FormLayout>
      <Title>React-Hook-Form</Title>
      <SubmitForm />
    </FormLayout>
  );
}

export default App;
