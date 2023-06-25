import React from "react";
import { render, screen } from "@testing-library/react";
import { TotalObservationsCard } from "../../components/TotalObservations";

describe("TotalObservationsCard", () => {
  it("should render the component with correct props", () => {
    // Arrange
    const value = 20;
    const title = "Total Observations";

    // Act
    render(<TotalObservationsCard value={value} title={title} />);

    const titleElement = screen.getByText(title);
    const valueElement = screen.getByText(value.toString());

    // Assertions
    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
