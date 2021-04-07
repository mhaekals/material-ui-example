import { Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./button.style";

export const GlobalButton = ({ children, variant, color, style, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Button
        classes={{
          root: classes.root,
          containedSecondary: classes.containedSecondary,
        }}
        variant={variant}
        color={color}
        fullWidth
        style={style}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};
