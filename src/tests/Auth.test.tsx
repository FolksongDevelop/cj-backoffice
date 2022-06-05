import { render } from '@testing-library/react';
import { getById } from '@/utils/custom-testing-library'
import Auth from '@/pages/auth';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Auth page', () => {
  render(
    <Router>
      <Auth />
    </Router>
  )

  test('Auth page is rendered', () => {
    expect(getById('Auth')).toBeInTheDocument()
  })
})