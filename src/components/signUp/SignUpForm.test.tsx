import { render, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import SignUpForm from './SignUpForm';
import {BrowserRouter as Router} from 'react-router-dom';

const isSignUp = true

const mockupProfile = {
  email: 'folklove45@hotmail.com',
  firstName: 'test',
  lastName: 'test',
  password: 'testtest',
  repeatPassword: 'testtest'
}

describe('SignUpForm Components', () => {
  const { container } = render(
    <Router>
      <SignUpForm />
    </Router>
  );

  test('SignUpForm components is rendered', () => {
    expect(getByTestId(container, 'SignUpForm')).toBeInTheDocument()
  })
})