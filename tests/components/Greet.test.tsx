import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';

describe('Greet', () => {
  it('should render a button when name is not provided', () => {
    render(<Greet name="" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render a greeting when name is provided', () => {
    render(<Greet name="John" />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/john/i);
  });
});
