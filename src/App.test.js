import { render, screen } from '@testing-library/react';
import App from './App';

test('renders room id label', () => {
  render(<App />);
  const labelElement = screen.getByText(/Paste invitation ROOM ID/i);
  expect(labelElement).toBeInTheDocument();
});
