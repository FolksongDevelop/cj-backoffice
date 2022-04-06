import { render, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import SignUpForm from './SignUpForm';

const isSignUp = true

describe('SignUpForm Components', () => {
  const { container } = render(<SignUpForm SignUpForm={isSignUp} />);

  test('SignUpForm component is rendered', () => {
    expect(getByTestId(container, 'SignUpForm')).toBeInTheDocument()
  })
})