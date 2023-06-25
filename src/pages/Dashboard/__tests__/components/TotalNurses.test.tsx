import React from "react";
import { render, screen } from "@testing-library/react";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import { TotalNurses } from "../../components/TotalNurses";

describe("TotalNurses", () => {
  it("should render the component with correct props", () => {
    // Arrange
    const value = 3;
    const title = "Total Nurses";

    // Act
    render(<TotalNurses value={value} title={title} />);

    const titleElement = screen.getByText(title);
    const valueElement = screen.getByText(value.toString());

    // Assertions
    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
