import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Container, Typography } from '@mui/material';
import { loginRequest } from '../redux/actions/authActions';

const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest(credentials));
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    fullWidth
                    margin="normal"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={auth.loading}
                    style={{ marginTop: '16px' }}
                >
                    {auth.loading ? 'Logging in...' : 'Login'}
                </Button>
                {auth.error && (
                    <Typography color="error" style={{ marginTop: '16px' }}>
                        {auth.error}
                    </Typography>
                )}
            </form>
        </Container>
    );
};

export default Login;
