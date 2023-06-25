import React from "react";
import { render } from "@testing-library/react";
import { Chart } from "react-chartjs-2";
import { PractitionerByPatientChart } from "../../components/PractitionerByPatientChart";

jest.mock("react-chartjs-2", () => ({
  Chart: jest.fn(),
}));

describe("PractitionerByPatientChart", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component with correct props", () => {
    // Arrange
    const data = {
      names: ["Name 1", "Name 2", "Name 3"],
      counts: [5, 10, 8],
      ids: ["1", "2", "3"],
    };

    // Act
    render(<PractitionerByPatientChart data={data} />);

    // Assertions
    expect(Chart).toHaveBeenCalledTimes(1);
  });
});
