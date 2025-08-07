import { fetchAPI } from './bookingUtils';

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'date':
      return fetchAPI(new Date(action.payload));
    case 'book':
      return state.filter(t => t !== action.payload);
    default:
      return state;
  }
}

test('initializeTimes returns an array of times', () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes with "book" removes time from list', () => {
  const initialState = ['17:00', '18:00'];
  const newState = updateTimes(initialState, { type: 'book', payload: '17:00' });
  expect(newState).toEqual(['18:00']);
});

describe('LocalStorage booking logic', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('saves booking to localStorage', () => {
    const formData = { date: '2025-08-01', time: '18:00' };
    const existing = [{ date: '2025-07-31', time: '17:00' }];
    localStorage.setItem('bookings', JSON.stringify(existing));

    const previous = JSON.parse(localStorage.getItem('bookings')) || [];
    const updated = [...previous, formData];
    localStorage.setItem('bookings', JSON.stringify(updated));

    const result = JSON.parse(localStorage.getItem('bookings'));
    expect(result).toEqual([...existing, formData]);
  });

  test('reads bookings from localStorage', () => {
    const data = [
      { date: '2025-07-31', time: '17:00' },
      { date: '2025-08-01', time: '18:00' }
    ];
    localStorage.setItem('bookings', JSON.stringify(data));

    const stored = JSON.parse(localStorage.getItem('bookings'));
    expect(stored).toEqual(data);
  });
});
