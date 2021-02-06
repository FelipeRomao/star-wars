import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";
import CircularProgress from "@material-ui/core/CircularProgress";

// import api from "../services/api";
import {
  Message,
  ContainerLoading,
  ContainerImage,
} from "../styles/pages/Home";

export default function Home({ vehicles }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  }));

  const classes = useStyles();

  function onSubmit() {
    if (!value) {
      setError(true);
    } else {
      setValue("");
      setLoading(true);
      setError(false);
    }
  }

  function handleClose() {
    setError(false);
  }

  return (
    <>
      <ContainerImage>
        <img src="logo-star-wars.png" alt="" />
      </ContainerImage>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <TextField
          type="number"
          label="Enter the distance to be covered"
          variant="outlined"
          onChange={({ target: { value } }) => setValue(value)}
          value={value}
          InputProps={{ style: { marginBottom: "2em" } }}
          fullWidth
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          style={{ marginBottom: "1em" }}
          fullWidth
        >
          Calculate stops
        </Button>
      </form>

      <br />
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="nav-1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="nav-2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="nav-3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={error}
        autoHideDuration={3000}
        message={
          <Message>
            <InfoIcon /> <span>Enter a value for the calculation</span>
          </Message>
        }
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />

      {loading && (
        <ContainerLoading>
          <CircularProgress />
        </ContainerLoading>
      )}
    </>
  );
}

/* export const getServerSideProps = async () => {
  const { data } = await api.get("https://swapi.dev/api/vehicles");

  return {
    props: {
      vehicles: data.results,
    },
  };
}; */
