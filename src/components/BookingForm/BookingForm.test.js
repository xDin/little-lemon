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


test('guests input has min and max attributes', () => {
  render(
    <BookingForm
      availableTimes={['18:00']}
      dispatch={() => {}}
      onSubmit={() => {}}
      minDate="2025-08-01"
    />
  );

  const guestsInput = screen.getByLabelText(/guests/i);
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('required');
});

test('submit button is enables and disables depending on form validity', () => {
  render(
    <BookingForm
      availableTimes={['18:00']}
      dispatch={() => {}}
      onSubmit={() => {}}
      minDate="2025-08-01"
    />
  );

  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2025-08-02' } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: '1' } });

  const submitButton = screen.getByRole('button', { name: /reserve/i });
  expect(submitButton).not.toBeDisabled();

  fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: '0' } });
  expect(submitButton).toBeDisabled();
});
