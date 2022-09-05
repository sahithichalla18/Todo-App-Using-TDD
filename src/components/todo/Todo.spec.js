import { fireEvent, render } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";
import Todo from "./Todo";

describe("Basic Rendering of Todo component", () => {
  const toggleTaskCompleted = jest.fn();
  const deleteTask = jest.fn();
  const editTask = jest.fn();
  it("Should render Todo component", () => {
    const todo = shallow(
      <Todo
        id="task-one"
        name="Any Task"
        completed={false}
        key={"task-one"}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    );
    expect(todo.find("button")).toHaveLength(2);
  });
});

describe("Testing functionalities of Todo component", () => {
    const toggleTaskCompleted = jest.fn();
    const deleteTask = jest.fn();
    const editTask = jest.fn();
    it("should show an input field on clicking the edit button", () => {
        const { getByTestId } = render(<Todo
            id="task-one"
            name="Any Task"
            completed={false}
            key={"task-one"}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />);
        fireEvent.click(getByTestId("edit-btn"));
        expect(getByTestId("edit-input-field")).toBeInTheDocument();
    });
})
