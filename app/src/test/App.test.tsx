import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';


describe('<App />', () => {
  test("Validacion de renderizado de la pagina principal", () => {
    render(<App />);
    const main = screen.getByTestId("main");
    expect(main).toBeInTheDocument()
  })
});
