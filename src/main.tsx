import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/App'
import '@/assets/css/index.scss'

/* Ex1 version 18 */
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// )

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

/* Ex2 version 18 */
ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/* Old version 17 */
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
