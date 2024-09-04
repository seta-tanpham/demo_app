import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Our Application
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Please choose an action:
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
              Login
            </Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to="/add-user" style={{ textDecoration: 'none', color: 'white' }}>
              Add User
            </Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
