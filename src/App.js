import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Column from "./Column";
import initialState from "./data";

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const App = () => {
  const [state, setState] = useState(initialState);

  const columns = state.columnOrder.map(id => state.columns[id]);

  return (
    <DragDropContext
      onDragStart={() => {}}
      onDragUpdate={() => {}}
      onDragEnd={() => {}}
    >
      <Container>
        {columns.map(column => {
          const tasks = column.taskIds.map(id => state.tasks[id]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

export default App;
