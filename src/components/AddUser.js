import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Container, Typography, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { addUserRequest, deleteUserRequest } from '../redux/actions/userAction'; 

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.users) || []; // Get users from Redux state
  const loading = useSelector(state => state.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserRequest({ name, email, password }));
  };

  const handleDelete = (userName) => {
    dispatch(deleteUserRequest(userName));
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={loading}
          >
            Add User
          </Button>
        </form>
        <div>
          <Typography variant="h6" component="h2" gutterBottom>
            Users List
          </Typography>
        <List>
          {users && users.users.length > 0 ? (
            users.users.map((user) => (
              <ListItem key={user.name} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(user.name)}>
                  <DeleteIcon />
                </IconButton>
              }>
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No users available" />
            </ListItem>
          )}
        </List>
      </div>
      </Box>

    </Container>
  );
};

export default AddUser;
