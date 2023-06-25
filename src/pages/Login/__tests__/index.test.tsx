import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "../index";
import { renderWithProviders } from "../../../test-utils/test-utils";

describe("Signup", () => {
  it("should render the sign page", () => {
    const { getByText } = renderWithProviders(<LoginPage />);

    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Don't have an account?")).toBeInTheDocument();
    expect(getByText("Register")).toBeInTheDocument();
  });
});
