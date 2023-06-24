import DashboardPage from "../Dashboard";
import * as patientHooks from "../../../store/hooks/patients";
import { DashboardReport } from "@store/thunks/patient";
import { renderWithProviders } from "../../../store/test-utils";
import { mockDashboardData } from "./DashboardMockData";
import "../../../common/testSetup";
import "jest-canvas-mock";

jest.mock("../../../store/hooks/patients");
jest.mock("react-chartjs-2", () => {
  const { Chart } = jest.requireActual("react-chartjs-2");
  return {
    ...jest.requireActual("react-chartjs-2"),
    Chart: jest.fn().mockImplementation((props) => {
      return <div data-testid="bar-chart">{props.type}</div>;
    }),
  };
});
describe("DashboardPage", () => {
  it("should render the dashboard page with correct data", () => {
    const mockDashboardObj: DashboardReport = mockDashboardData;

    jest.spyOn(patientHooks, "useDashboardData").mockReturnValue({
      data: mockDashboardObj,
      error: null,
      status: "idle",
    });

    const { getByText, getByTestId } = renderWithProviders(<DashboardPage />);

    expect(getByText("Total Patients")).toBeInTheDocument();
    expect(getByText("Total Practitioners")).toBeInTheDocument();
    expect(getByText("Total Nurses")).toBeInTheDocument();
    expect(getByText("Total Observations")).toBeInTheDocument();
  });
});
