import React from "react";
import { render, screen } from "@testing-library/react";
import { TotalPatients } from "../../components/TotalPatients";

describe("TotalPatients", () => {
  it("should render the component with correct props", () => {
    // Arrange
    const value = 10;
    const title = "Total Patients";

    // Act
    render(<TotalPatients value={value} title={title} />);

    // Assertions
    const titleElement = screen.getByText(title);
    const valueElement = screen.getByText(value.toString());

    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
