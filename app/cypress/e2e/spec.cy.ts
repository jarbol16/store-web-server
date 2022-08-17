import { createYield } from "typescript";

describe('empty spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('pagina abierta', () => {
    cy.contains("Bienvenido a Mercado Libre");
  })

  it('busqueda de productos sin query', () => {
    cy.contains("Bienvenido a Mercado Libre");
    cy.get('[data-testid="button-search"]').click();
    cy.contains("No se encontraron productos relacionados con");
  })

  //con esta preuba se peude validar la integracion entre frontend y api
  it('consumo de productos sin conexion a api', () => {
    cy.get('[data-testid="searchInput"]').type("pepa");
    cy.get('[data-testid="button-search"]').click();
    cy.contains("Resultado de busqueda para: pepa");
  })

})