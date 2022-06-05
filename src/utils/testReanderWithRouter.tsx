// import {render} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'
// import { ReactElement, JSXElementConstructor } from 'react'

// const renderWithRouter = (ui: ReactElement<any, string | JSXElementConstructor<any>>, {route = '/'} = {}) => {
//   window.history.pushState({}, 'Test page', route)

//   return {
//     user: userEvent.setup(),
//     ...render(ui, {wrapper: BrowserRouter}),
//   }
// }