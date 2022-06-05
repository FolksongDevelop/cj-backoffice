import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Container,
  Typography
} from '@mui/material';

const Template = styled('section')({
  display: 'flex',
  height: '100vh',
  minHeight: '100%',
  alignItems: 'center'
})

const pageErrors: FC = () => {
  return (
    <Template id="Status404">
      <Container maxWidth="sm">
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Typography variant="h6" paragraph>
                Sorry, page not found!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
          </Typography>
          <Box
            component="img"
            src="/static/images/error404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
          <Button color="success" to="/"
            size="large"
            variant="contained"
            component={RouterLink}>
            Go to Home
          </Button>
        </Box>
      </Container>
    </Template>
  )
}

export default pageErrors