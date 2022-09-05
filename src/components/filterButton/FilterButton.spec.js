import React from "react";
import FilterButton from "./FilterButton";
import { fireEvent, render } from "@testing-library/react";

describe("Basic Rendering of Filter Button", () => {

    it("Should render the filter button", () => {
        const setFilter = jest.fn();
        const { getByTestId } = render(<FilterButton name="All" isPressed={false} setFilter={setFilter} />);
        expect(getByTestId("button")).toHaveTextContent("All");
    });
    
});

describe("Testing Functionality of Filter Button", () => {

    it("Should call filter function on button click ", () => {
        const setFilter = jest.fn();
        const { getByTestId } = render(<FilterButton name="All" isPressed={false} setFilter={setFilter} />);
        fireEvent.click(getByTestId("button"));
        expect(setFilter).toHaveBeenCalled();
    })

})