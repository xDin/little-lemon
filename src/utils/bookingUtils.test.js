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
