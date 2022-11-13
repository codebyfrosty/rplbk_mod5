import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CardPost from "./CardPosts";
import { useEffect, useState } from "react";
import axios from "axios";
import { AddCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AddDialog from "./AddDialog";

const BASE_API_URL = `https://jsonplaceholder.typicode.com`;

export default function GridPost() {
  const [posts, setPosts] = useState([]);
  const [newPosts, setNewPosts] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    async function getPosts() {
      await axios
        .get(`${BASE_API_URL}/posts`)
        .then((rest) => {
          const response = rest.data;
          console.log(response);

          setPosts(response);
        })
        .catch((error) => {
          window.alert(error);
        });
    }
    getPosts();
  }, []);

  const results = newPosts.filter((element) => {
    return element !== undefined;
  });

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <IconButton style={{ marginBottom: "20px" }} onClick={openDialog}>
        <AddCircle />
      </IconButton>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {results.map((d) => (
            <CardPost key={d.id} title={`${d.title}`} desc={`${d.body}`} />
          ))}
          {posts.map((d) => (
            <CardPost key={d.id} title={`${d.title}`} desc={`${d.body}`} />
          ))}
        </Grid>
      </Box>
      {isDialogOpen && (
        <AddDialog
          open={isDialogOpen}
          onClose={closeDialog}
          posts={newPosts}
          setPosts={setNewPosts}
        />
      )}
    </div>
  );
}
