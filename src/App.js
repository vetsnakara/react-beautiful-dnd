import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Column from "./Column";
import initialState from "./data";

const Container = styled.div`
  display: flex;
  padding: 10px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "lightblue" : "#fff"};
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
      <Droppable droppableId="columns" type="columns" direction="horizontal">
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {columns.map((column, index) => {
              const tasks = column.taskIds.map(id => state.tasks[id]);
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
