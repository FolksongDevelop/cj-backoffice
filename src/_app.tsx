// import { Routes, Navigate, Route } from 'react-router-dom'
import Router from './routes';
import {
  CssBaseline
} from '@mui/material';
// import Auth from './pages/auth'
// import Dashboard from './pages/dashboard'
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      {/* <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle /> */}
      <CssBaseline />
      <Router />
    </Fragment>
  );
}


// const App = () => {
//   return (
//     <Fragment>
//       {/* Container page */}
//       <Container>
//         <Routes>
//           {/* <Route path="/" element={ <Home /> } /> */}
//           <Route path='/'>
//             <Route index element={<Dashboard />} />
//           </Route>
//         </Routes>
//       </Container>
//       {/* Full page */}
//       <Routes>
//         <Route path='/'>
//           <Route path="authen/*" element={<Auth />} />
//         </Route>
//       </Routes>
//     </Fragment>
//   )
// }

// export default App