import { render, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import SignInForm from './SignInForm'
const isSignUp = false

describe('SignUpForm Components', () => {
  const { container } = render(<SignInForm signInProps={isSignUp} />);

  test('SignInForm component is rendered', () => {
    expect(getByTestId(container, 'SignInForm')).toBeInTheDocument()
  })
})