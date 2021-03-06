import React from "react";
import Task from "./Task";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  background-color: ${({ isDragging }) => (isDragging ? "orangered" : "#fff")};
`;

const Title = styled.h3`
  margin: 0;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const TaskList = styled.div`
  flex-grow: 1;
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "lightblue" : "#fff"};
  transition: background-color 0.2s ease;
`;

const Column = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          <Title {...provided.dragHandleProps}>{column.name}</Title>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => {
              return (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              );
            }}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
