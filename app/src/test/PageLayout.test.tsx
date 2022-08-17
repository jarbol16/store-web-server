import React from "react";
import { screen, render, getByText } from "@testing-library/react";
import PageLayout from "../components/Layout/PageLayout";

describe("<PageLayout />", () => {
  const breadcrumb: string = "Miga de Pan";
  const Child = () => {
    return (
      <div>
        <h1>Componete Hijo</h1>
      </div>
    )
  }

  it("Probar renderizado de hijos del layout", () => {
    render(
      <PageLayout breadcrumb={breadcrumb}>
        <Child />
      </PageLayout>
    )

    expect(screen.getByText("Componete Hijo")).toBeInTheDocument();
    expect(screen.getByText("Miga de Pan")).toBeInTheDocument();
  })
})