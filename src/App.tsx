import { useState } from "react";
import styled from "styled-components";
import { Child } from "@app/components/Child";

const List = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Right = styled.div`
  flex: auto;
`;
const Left = styled.div`
  flex: auto;
`;

const data = Array(10)
  .fill(0)
  .map((_, i) => i + 1);
function App() {
  const [mult, setMult] = useState(1);
  const list = data.map((d) => d * mult);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button
            onClick={() => {
              setMult((n) => n + 1);
            }}
          >
            Add List
          </button>
        </div>
        <List>
          <Right>
            {list.map((n, i) => {
              return <Child key={n} idx={n} />;
            })}
          </Right>
          <Left>
            {list.map((n, i) => {
              return <Child key={i} idx={n} />;
            })}
          </Left>
        </List>
      </header>
    </div>
  );
}

export default App;
