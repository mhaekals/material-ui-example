import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

export const GlobalCard = ({ children, className }) => {
  return (
    <CardContent style={{ backgroundColor: "blue", margin: 20 }}>
      {children}
    </CardContent>
  );
};
