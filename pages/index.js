import { useRouter } from 'next/router';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField label="Username" fullWidth margin="normal" required />
          <TextField label="Password" type="password" fullWidth margin="normal" required />
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
