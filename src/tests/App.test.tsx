// import React from 'react';
import { render, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import App from '@/pages/App';

describe('App page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup)
  
  // const setState = jest.fn();
  const { container } = render(<App />);
  // const useStateMock: any = (initState: any) => [initState, setState]

  test('Should re-render new state to button text content', () => {
    const updateCount = getByTestId(container, 'countButton')
    fireEvent.click(updateCount);
    expect(updateCount.textContent).toBe('count is: 1');
  });

  // test('Should update state value on useState funtion', () => {
  //   jest.spyOn(React, 'useState').mockImplementation(useStateMock)
  //   expect(setState).toHaveBeenCalledTimes(1)
  // });
})