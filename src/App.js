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

  const handleDragEnd = ({ type, source, destination: dest, draggableId }) => {
    const reorderColumns = () => {
      const columnOrder = [...state.columnOrder];
      columnOrder.splice(source.index, 1);
      columnOrder.splice(dest.index, 0, draggableId);
      setState(state => ({ ...state, columnOrder }));
    };

    const reorderTasks = () => {
      const sourceId = source.droppableId;
      const destId = dest.droppableId;

      const sourceTaskIds = [...state.columns[sourceId].taskIds];
      sourceTaskIds.splice(source.index, 1);

      const destTaskIds =
        sourceId === destId
          ? sourceTaskIds
          : [...state.columns[destId].taskIds];

      destTaskIds.splice(dest.index, 0, draggableId);

      console.log(sourceTaskIds);
      console.log(destTaskIds);

      setState(state => ({
        ...state,
        columns: {
          ...state.columns,
          [sourceId]: {
            ...state.columns[sourceId],
            taskIds: sourceTaskIds
          },
          [destId]: {
            ...state.columns[destId],
            taskIds: destTaskIds
          }
        }
      }));
    };

    switch (type) {
      case "column":
        reorderColumns();
        break;
      case "task":
        reorderTasks();
        break;
      default:
        return;
    }
  };

  return (
    <DragDropContext
      onDragStart={() => {}}
      onDragUpdate={() => {}}
      onDragEnd={handleDragEnd}
    >
      <Droppable droppableId="all-columns" type="column" direction="horizontal">
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
