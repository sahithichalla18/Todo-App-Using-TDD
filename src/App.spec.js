import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";
import { DATA } from ".";
import App from "../src/App"

describe("Basic rendering of the App", () => {
    it("Should render the todo app", () => {
        const app  = shallow(<App tasks={DATA}/>);
        const title =  app.find(Text);
        expect(title).toBeDefined();
    });
   
});