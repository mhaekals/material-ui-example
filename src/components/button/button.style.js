import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    fontWeight: "bold",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  containedSecondary: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    fontWeight: "bold",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));
