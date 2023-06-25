import React from "react";
import { render, screen } from "@testing-library/react";
import SignupPage from "../index";
import { renderWithProviders } from "../../../test-utils/test-utils";

describe("Signup", () => {
  it.only("should render the signup page", () => {
    const { getByText } = renderWithProviders(<SignupPage />);

    expect(getByText("Registration")).toBeInTheDocument();
    expect(getByText("Already have an account?")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
  });
});
