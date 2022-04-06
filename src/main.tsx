import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/css/index.scss'
// import App from '@/pages/App'
import Auth from '@/pages/Auth'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    {/* <App /> */}
    <Auth />
  </React.StrictMode>
)
