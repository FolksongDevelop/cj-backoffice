import {  ReactNode } from 'react'
import { getById, getByClass } from './index'
import { render, fireEvent } from '@testing-library/react'

document.body.innerHTML =
`<div id="FormUsername">
  <span id="Username" class="username" />
  <input id="InputUsername" />
</div>`;

export interface IProps {
  onClick: () => void,
  children: ReactNode
}

const Button = ({
  onClick,
  children
}: IProps) => (
  <button id="Button" onClick={onClick}>{children}</button>
)

describe('getById function', () => {
  test('getById function should be return data for success.', () => {
    expect(getById('FormUsername')).toBeInTheDocument()
  })

  test('getById function then error.', () => {
    expect(getById('FormUsername2')).not.toBeInTheDocument()
  })

  test('getById function test input element', () => {
    const InputUsername = getById('InputUsername') as HTMLInputElement;
    fireEvent.change(InputUsername, { 
      target: {
        value: 'cjexpress123'
      }
    });
    expect(InputUsername.value).toEqual('cjexpress123');
    // (InputUsername as HTMLInputElement).value = 'cjexpress123'
    // const test = (InputUsername as HTMLInputElement).value;
  })

  test('getById function test button element',() => {
    const handleSubmit = jest.fn()
    // Render button components
    render(<Button onClick={handleSubmit}>Click Me</Button>)
    const submitId = getById('Button') as HTMLElement;
    // Test button rendering
    expect(submitId).toBeInTheDocument();
    // Click event
    fireEvent.click(submitId);
    // Test clicked
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})

describe('getByClass', () => {
  test('getByClass function should be return data for success.', () => {
    expect(getByClass('username')).toBeInTheDocument()
  })

  test('getByClass function then error.', () => {
    expect(getByClass('username2')).not.toBeInTheDocument()
  })
})