import { render } from '@testing-library/react';
import Textfield from './Textfield';

describe('Textfield', () => {
  const requiredProps = {
    onChange: jest.fn()
  };

  it('renders with default type "text"', () => {
    const { getByPlaceholderText } = render(
      <Textfield placeholder="Type here" {...requiredProps} />
    );
    const input = getByPlaceholderText('Type here') as HTMLInputElement;
    expect(input.type).toBe('text');
  });

  it('renders with provided type', () => {
    const { getByPlaceholderText } = render(
      <Textfield type="password" placeholder="password" {...requiredProps} />
    );
    const input = getByPlaceholderText('password') as HTMLInputElement;
    expect(input.type).toBe('password');
  });

  it('disables the input when disabled prop is true', () => {
    const { getByPlaceholderText } = render(
      <Textfield disabled placeholder="Disabled" {...requiredProps} />
    );
    const input = getByPlaceholderText('Disabled') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });
});
