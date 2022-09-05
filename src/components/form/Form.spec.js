import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";
import { fireEvent, render } from "@testing-library/react";

describe("Basic Rendering of Form", () => {

    it("Should render Form ", () => {
        const form = shallow(<Form />);
        const title =  form.find(Text);
        expect(title).toBeDefined();
    });

    it("Should have a label ", () => {
        const { getByTestId }   = render(<Form />);
        expect(getByTestId('label')).toHaveTextContent("What needs to be done?");
    });

    it("Should render an add button", () => {
        const { getByRole } = render(<Form />);
        expect(getByRole('button')).toHaveTextContent("Add");
    })
});

describe("Testing Functionality of Form", () => {

    it("Should return input field", () => {

        const { getByTestId } = render(<Form />);
        const inputField = getByTestId("input");
        fireEvent.change(inputField, {target: {value: 'Any Task'}});
        expect(inputField.value).toBe('Any Task');

    });

})