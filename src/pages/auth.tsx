import { FC, useEffect } from 'react';
import {
  CssBaseline,
  Grid,
  Paper
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInForm from '@/components/signIn/SignInForm';
import SignUpForm from '@/components/signUp/SignUpForm';
import { useSearchParams } from 'react-router-dom'

const theme = createTheme();

const Auth: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const authType = searchParams.get('type')

  useEffect(() => {
    if (!authType) {
      setSearchParams({ type: 'signIn' })
      console.log('test')
    }
  }, [authType, setSearchParams])
  return (
    <ThemeProvider theme={theme}>
      <Grid data-testid="Auth" container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid component="section" item xs={false} sm={4} md={7}
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
          { authType === 'signIn' && <SignInForm /> }
          { authType === 'signUp' && <SignUpForm /> }
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Auth