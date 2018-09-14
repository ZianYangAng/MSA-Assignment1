import * as React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const ApplBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          <Link style={{ color: "white" }} to="/">
            {" "}
            Home{" "}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ApplBar;
