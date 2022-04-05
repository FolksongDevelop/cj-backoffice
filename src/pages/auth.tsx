import { useState } from 'react';
import {
  CssBaseline,
  Grid,
  Paper
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInForm from '@/components/signIn/SignInForm';
import SignUpForm from '@/components/signUp/SignUpForm';

const theme = createTheme();

const Login = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false)
  const signInProps = (data: { isSignUp: boolean; isForgot: boolean; }) => {
    if (data.isSignUp) {
      setIsSignUp(true)
    } else if (data.isForgot) {
      console.log(data.isForgot)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          { !isSignUp && <SignInForm signInProps={signInProps} /> }
          { isSignUp && <SignUpForm setIsSignUp={setIsSignUp} /> }
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login