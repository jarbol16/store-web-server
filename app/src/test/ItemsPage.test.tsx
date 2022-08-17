import React, { useState as useStateMock } from "react";
import { screen, render } from "@testing-library/react";
import Items from "../pages/Items";
import { BrowserRouter as Router } from 'react-router-dom';
import { PropertyName } from "typescript";
import * as item from '../pages/Items';

describe("<Items />", () => {

  it("Validar mensaje de cargando al principio", () => {
    render(
      <Router>
        <Items />
      </Router>)
    expect(screen.getByTestId("items-loading")).toBeInTheDocument();
  })
})