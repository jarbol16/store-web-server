import React from "react";
import { screen, render } from '@testing-library/react';
import { Item } from "../utilities/interfaces";
import CardItem from "../components/Cards/CardItem";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Pruebas componente CardItem", () => {
  const item: Item = {
    condition: "",
    free_shipping: true,
    id: "412",
    picture: "https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2",
    price: {
      amount: "4521",
      currency: "new",
      decimals: "00"
    },
    title: "Producto de prueba"
  }

  // Se realiza mock del hook de useNavigation
  const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
  }));

  it("Prueba de construccion de CardItem", () => {

    render(
      <Router>
        <CardItem {...item} />
      </Router>)
    const card = screen.getByTestId("card-item");
    const title = screen.getByText(item.title);

    expect(card).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  })

  it("Prueba de carga de carro de free shipping", () => {
    render(
      <Router>
        <CardItem {...item} />
      </Router>)
    const free = screen.getByTestId("card-item-free_shipping");
    expect(free).toBeInTheDocument();
  })
})