import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('renders button and responds to click', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  const button = screen.getByRole('button', { name: /click me/i });
  await userEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
