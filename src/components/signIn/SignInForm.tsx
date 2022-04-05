/* eslint-disable jsx-a11y/no-autofocus */
import { 
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  Typography
} from '@mui/material';
import { FC } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

interface FormInputs {
  email: string
  password: string
}

const validateMessage = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6).max(20).required('Password is required')
})

const SignInForm:FC<FormInputs> = ({ signInProps }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: yupResolver(validateMessage)
  })

  const submitForm: SubmitHandler<FormInputs> = (data) => {
    const old_users = JSON.parse(localStorage.getItem('users')!)
    const findUser = old_users.some((user: { email: string; password: string }) =>
      user?.email === data.email && user?.password === data.password)
    if (findUser) {
      swal('Success!', 'Your SignIn success!', 'success');
    } else {
      swal('Fails!', 'The email address you entered isn\'t connected to an account.', 'error');
    }
  }

  return (
    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit(submitForm)} sx={{ mt: 1 }}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message ?? ''}
              autoComplete="email"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoFocus={true}
            />
          )}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          error={!!errors.password}
          helperText={errors.password?.message ?? ''}
          autoComplete="current-password"
          {...register('password')}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
        Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Button size="small"
              onClick={() => signInProps({
                isForgot: true,
                isSignUp: false }
              )}
            >
              Forgot password?
            </Button>
          </Grid>
          <Grid item>
            <Button size="small"
              onClick={() => signInProps({
                isSignUp: true,
                isForgot: false}
              )}
            >
              {'Don\'t have an account? Sign Up'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SignInForm