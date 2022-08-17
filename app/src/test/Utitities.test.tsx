import React from "react";
import { screen, render } from '@testing-library/react';
import { currencyFormat, encodeString, joinArray } from "../utilities/utilities";

describe("Pruebas de utilidades", () => {
  const testPrueba = "pruéba";
  it("encodeString", () => {
    const str = encodeString(testPrueba);
    expect(str).toEqual("prueba");
  })

  it("currencyFormat", () => {
    const format = currencyFormat("USD");
    expect(format).toEqual("U$S");
  })

  it("joinArray", () => {
    const array: string[] = ["prueba","test","juan"];
    expect(joinArray(" > ",array)).toEqual("prueba > test > juan");
  })
})