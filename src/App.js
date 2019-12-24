import React, { useState } from "react";
import Column from "./Column";
import styled from "styled-components";

import initialState from "./data";

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const App = () => {
  const [state, setState] = useState(initialState);

  const columns = state.columnOrder.map(id => state.columns[id]);

  return (
    <Container>
      {columns.map(column => {
        const tasks = column.taskIds.map(id => state.tasks[id]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </Container>
  );
};

export default App;
