import React from "react";
import Task from "./Task";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Title = styled.h3`
  margin: 0;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const TaskList = styled.div``;

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.name}</Title>
      <TaskList>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
};

export default Column;
