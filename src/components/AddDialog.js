import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const BASE_API_URL = `https://jsonplaceholder.typicode.com`;

function AddUserDialog({ open, onClose, post, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${BASE_API_URL}/posts`, {
        title: title,
        body: body,
        userId: 1,
      })
      .then((res) => {
        setPosts([post, res.data]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Posts</DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          padding: "8px 20px",
        }}
      >
        <TextField
          name="title"
          label="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          name="body"
          label="Body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddUserDialog;
