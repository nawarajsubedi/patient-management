import React from "react";
import { render, screen } from "@testing-library/react";
import { PatientSummaryTable } from "../../components/PatientSummaryTable";
import { mockDashboardData } from "../../../../test-utils/DashboardMockData";
import { renderWithProviders } from "../../../../test-utils/test-utils";

describe("PatientSummaryTable", () => {
  it("should render the table with correct data", () => {
    // Arrange
    const data = [...mockDashboardData.patients];

    // Act
    const { getByText } = renderWithProviders(
      <PatientSummaryTable
        data={data}
        title="Patient Summary"
        showLastObservation={true}
        showLastMedication={true}
      />
    );

    // Assertions
    expect(getByText("Patient SSN")).toBeInTheDocument();
    expect(getByText("Patient Name")).toBeInTheDocument();
    expect(getByText("Last Observation Date")).toBeInTheDocument();
    expect(getByText("Last Medication")).toBeInTheDocument();

    // Check if the patient data is rendered correctly
    const patientSsnCell = getByText("106-27-1722");
    const patientNameCell = getByText("Barry Gibberd");

    expect(patientSsnCell).toBeInTheDocument();
    expect(patientNameCell).toBeInTheDocument();
  });
});
