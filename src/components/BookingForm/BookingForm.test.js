// BookingForm.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("submits the booking form", () => {
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={mockDispatch}
      onSubmit={mockSubmit}
      minDate={"2025-07-27"}
    />
  );

  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2025-07-28" } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: "3" } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

  fireEvent.click(screen.getByRole("button", { name: /reserve/i }));

  expect(mockSubmit).toHaveBeenCalledWith({
    date: "2025-07-28",
    time: "18:00",
    guests: "3",
    occasion: "Birthday",
  });
});
