/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/no-autofocus */
import {
  Avatar,
  Button,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Grid,
  Box,
  Typography
} from '@mui/material';
import { useEffect } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Swal from 'sweetalert2';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

/* interface Props {
  setIsSignUp: Dispatch<SetStateAction<boolean>>
}
 */
interface FormInputs {
  firstName: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
}

const validateMessage = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6).max(20).required('Password is required'),
  repeatPassword: yup.string()
    .required('Repeat Password is required')
    .oneOf([yup.ref('password')], 'Passwords must and should match')
})

const SignUpForm = () => {
  const navigate = useNavigate()
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
    const duplicateUser = old_users.some((user: { email: string; }) => user?.email === data.email)
    if (duplicateUser) {
      Swal.fire('Fails!', 'Your email duplicate.', 'error')
    } else {
      old_users.push(data)
      localStorage.setItem('users', JSON.stringify(old_users))
      Swal.fire('Success!', 'Your SignUp success!', 'success')
    }
    
  }

  useEffect(()=> {
    const getUsers = localStorage.getItem('users') 
    if (!getUsers) {
      localStorage.setItem('users', '[]')
    }
  }, [])

  return (
    <Box data-testid="SignUpForm" sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
            Sign up
      </Typography>
      <Box data-testid="submmitForm" component="form" noValidate onSubmit={handleSubmit(submitForm)} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message ?? ''}
                  autoComplete="given-name"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message ?? ''}
                  autoComplete="family-name"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
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
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Password"
              type="password"
              // name="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message ?? ''}
              autoComplete="new-password"
              {...register('password')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="repeatPassword"
              label="Repeat Password"
              type="password"
              // name="repeatPassword"
              fullWidth
              error={!!errors.repeatPassword}
              helperText={errors.repeatPassword?.message ?? ''}
              autoComplete="new-password"
              {...register('repeatPassword')}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button size="small" onClick={() => navigate('/authen?type=signIn')}>
              Already have an account? Sign in
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SignUpForm