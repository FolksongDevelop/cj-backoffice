import { render, fireEvent, waitFor, RenderResult } from '@testing-library/react'
import { getById } from '@/utils/custom-testing-library'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import SignInForm from './SignInForm'
import { BrowserRouter as Router } from 'react-router-dom'

// let email: HTMLElement | null
// let wrapper: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement, HTMLElement>
beforeEach(() => {
  render(
    <Router>
      <SignInForm />
    </Router>
  )
  // const getById = queryByAttribute.bind(null, 'id');
  // email = getById(wrapper.container, 'SignInForm')
})

describe('SignInForm Components', () => {
  test('SignInForm components is rendered', () => {
    expect(getById('SignInForm')).toBeInTheDocument()
  })

  test('SubmitForm should be rendered', () => {
    expect(getById('SubmitForm')).toBeInTheDocument()
  })
  
  test('Email input should be rendered', () => {
    expect(getById('Email')).toBeInTheDocument()
  })
})

describe('SignInForm all input', () => {
  // const getById = document.querySelector('#Email')

  // console.log(getById)
  // console.log(getById(container, 'Email'))
  
  // test('Email input should be rendered', () => {
  //   expect(getById(container, 'Email')).toBeInTheDocument()
  // })
})

describe('Form', () => {
  test('Should submit Sign In success', async () => {
    // render(
    //   <Router>
    //     <SignInForm />
    //   </Router>
    // )
    // const handleSubmit = jest.fn()
    // const buttonSubmitId = getById('ButtonSubmit') as HTMLElement
    // expect(buttonSubmitId).toBeInTheDocument();
    // await waitFor(() => {
    //   fireEvent.click(buttonSubmitId)
    //   expect(handleSubmit).toHaveBeenCalledTimes(1)
    // })
    
  })
  test('Should error when submit', () => {
    // console.log(wrapper.debug())
    // const handleSubmit = jest.fn()
    // fireEvent.submit(submitFormId)
    // expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})

describe('Navigation button', () => {
  
  // test('should redirect and update history', () => {
  //   // render(<Router><SignInForm/></Router>);
  //   console.log(screen.getByTestId('ButtonGoToSignUp'))
  //   const history = createMemoryHistory();

  //   render(<Router history={history}><SignInForm/></Router>);

  //   userEvent.click(screen.getByTestId('ButtonGoToSignUp'))

  //   expect(history.location.pathname).toEqual('/authen?type=signUp')
  // })

  // test('should redirect and update dom', () => {
  //   render(<Router><SignInForm/></Router>);

  //   userEvent.click(screen.getByText(/About/));

  //   expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  // })
})