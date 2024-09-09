import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Button, TextField, Container, 
  Typography, Box, List, ListItem, 
  ListItemText, IconButton,
  Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { addUserRequest, deleteUserRequest, editUserRequest } from '../redux/actions/userAction'; 

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for controlling the popup dialog
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '' });

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

  // Open the dialog with the selected user's data
  const handleEdit = (user) => {
    console.log(user);
    setEditingUser(user.id);
    setEditForm({ name: user.name, email: user.email });
    setOpen(true);
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
    setEditingUser(null);
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  // Save the edited user
  const handleSaveEdit = () => {
    dispatch(editUserRequest({ id: editingUser, ...editForm }));
    handleClose(); // Close the dialog after saving
  };


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
                <div>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(user.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(user)}>
                  <EditIcon />
                </IconButton>
                </div>
                
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

      {/* Popup Dialog for editing user */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            value={editForm.name}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            value={editForm.email}
            onChange={handleFormChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
};

export default AddUser;
