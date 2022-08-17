import React from "react";
import {render, screen} from "@testing-library/react";
import Main from "../pages/Main";
import SearchBar from "../components/SearchBar/SearchBar";

describe("Pruebas en Main", () => {

    it("Validar que los componetes inciales carguen correctamente", () => {
        render(<Main />);
        const header = screen.getByTestId("header");
        expect(header).toBeInTheDocument();
    })

    it("Se valida carga del compoente de busqueda, <SearchBar />", () => {

        render(<SearchBar setValue={jest.fn()}/>);
        const search = screen.getByTestId("search-bar");
        expect(search).toBeInTheDocument();
    })
})