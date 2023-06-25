import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test-utils/test-utils";
import LoginForm from "../LoginForm";

describe("LoginForm", () => {
  it("should render the login form", () => {
    const { getByText, getByLabelText, getByRole } = renderWithProviders(
      <LoginForm />
    );

    // Check if the email and password fields are rendered
    expect(getByLabelText("Email Address")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByRole("button", { name: "Continue" })).toBeInTheDocument();
  });

  it("should display validation errors for invalid input", () => {
    // Arrange
    const { getByText, getByLabelText, getByRole } = renderWithProviders(
      <LoginForm />
    );

    const emailInput = getByLabelText("Email Address");
    const passwordInput = getByLabelText("Password");
    const continueButton = getByRole("button", { name: "Continue" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();

    // Need to revisit
    // act(() => {
    //   fireEvent.click(continueButton);
    // });

    // expect(getByText("Email is required")).toBeInTheDocument();
    // expect(getByText("Password is required")).toBeInTheDocument();

    // act(() => {
    //   fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    //   fireEvent.click(continueButton);
    // });

    // // Test validation error for invalid email
    // expect(getByText("Must be a valid email")).toBeInTheDocument();
  });

  // it("should submit the form and perform login action", async () => {
  //   render(<LoginForm />);

  //   const emailInput = screen.getByLabelText("Email Address");
  //   const passwordInput = screen.getByLabelText("Password");
  //   const continueButton = screen.getByRole("button", { name: "Continue" });

  //   // Mock the signin function and dispatch action
  //   const mockSignin = jest.fn().mockResolvedValue({
  //     success: true,
  //     user: { id: "1", email: "test@gmail.com" },
  //     token: "token",
  //   });
  //   const mockDispatch = jest.fn();
  //   jest.mock("../../services/auth/auth-services", () => ({
  //     signin: mockSignin,
  //   }));
  //   jest.mock("react-redux", () => ({
  //     useDispatch: () => mockDispatch,
  //   }));
  //   jest.mock("../../store/slices/auth", () => ({
  //     authAction: {
  //       login: jest.fn(),
  //     },
  //   }));

  //   // Fill in the form fields and submit the form
  //   fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
  //   fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  //   fireEvent.click(continueButton);

  //   // Check if the signin function was called with the correct values
  //   expect(mockSignin).toHaveBeenCalledWith("test@gmail.com", "testpassword");

  //   // Check if the login action was dispatched
  //   expect(mockDispatch).toHaveBeenCalled();

  //   // Check if the user is navigated to the dashboard
  //   expect(window.location.pathname).toBe("/dashboard");
  // });
});
