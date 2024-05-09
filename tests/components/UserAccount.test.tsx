import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount';

describe('UserAccount', () => {
  it('should render user name', () => {
    const user = { id: 1, name: 'John', isAdmin: false };
    render(<UserAccount user={user} />);
    const name = screen.getByText(/john/i);
    expect(name).toBeInTheDocument();
  });

  it('should render a button when user is admin', () => {
    const user = { id: 1, name: 'John', isAdmin: true };
    render(<UserAccount user={user} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render a button when user is not admin', () => {
    const user = { id: 1, name: 'John', isAdmin: false };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
});
