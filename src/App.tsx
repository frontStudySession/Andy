import { Form } from '@app/app/Form';
import { styled } from 'styled-components';

const FormLayout = styled.div`
  width: 100%;
  max-width: 600px;
  background: black;
  display: flex;
  justify-content: center;
  margin: 100px auto;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  color: white;
`;

function App() {
  return (
    <FormLayout>
      <Title>Example</Title>
      <Form />
      <button>Submit</button>
    </FormLayout>
  );
}

export default App;
