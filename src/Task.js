import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Task = ({ task }) => {
  return <Container>{task.content}</Container>;
};

export default Task;
