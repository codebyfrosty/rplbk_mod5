import "./App.css";
import { Typography } from "@mui/material";

import GridPost from "./components/GridPosts";
function App() {
  return (
    <div className="App">
      <div className="list-container">
        <div className="list-title-wrapper">
          <Typography variant="h4">Posts</Typography>
        </div>
        <div className="posts">
          <GridPost></GridPost>
        </div>
      </div>
    </div>
  );
}

export default App;
