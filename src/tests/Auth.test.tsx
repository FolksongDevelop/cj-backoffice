import { render, getByTestId } from '@testing-library/react';
import Auth from '@/pages/Auth';

describe('SignUpForm Components', () => {
  const { container } = render(<Auth />);

  test('Auth page is rendered', () => {
    expect(getByTestId(container, 'Auth')).toBeInTheDocument()
  })
})