import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';

describe('UserList', () => {
  it('should render a message when no users are available', () => {
    render(<UserList users={[]} />);
    const message = screen.getByText(/no users/i);
    expect(message).toBeInTheDocument();
  });

  it('should render a list of users', () => {
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    render(<UserList users={users} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.children).toHaveLength(2);

    users.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/users/${user.id}`);
    });
  });
});
