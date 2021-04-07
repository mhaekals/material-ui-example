import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

export const GlobalHeader = ({ children, color }) => {
  const classes = useStyle();
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>App Bar</Typography>
          <InputBase placeholder="search" className={classes.input}></InputBase>
        </Toolbar>
      </AppBar>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(10),
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.primary.main,
    paddingLeft: 10,
    width: "30vw",
  },
}));
