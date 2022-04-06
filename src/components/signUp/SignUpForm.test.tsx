import { render, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import SignUpForm from './SignUpForm';

const isSignUp = true

const mockupProfile = {
  email: 'folklove45@hotmail.com',
  firstName: 'test',
  lastName: 'test',
  password: 'testtest',
  repeatPassword: 'testtest'
}
})