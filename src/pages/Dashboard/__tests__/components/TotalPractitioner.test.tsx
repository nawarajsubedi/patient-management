import React from "react";
import { render, screen } from "@testing-library/react";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import { TotalPractitioners } from "../../components/TotalPractitioners";

describe("TotalPractitioners", () => {
  it("should render the component with correct props", () => {
    // Arrange
    const value = 5;
    const title = "Total Practitioners";

    // Act

    render(<TotalPractitioners value={value} title={title} />);

    // Assertions
    const titleElement = screen.getByText(title);
    const valueElement = screen.getByText(value.toString());

    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
