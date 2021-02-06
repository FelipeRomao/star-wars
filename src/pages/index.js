import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
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

import api from "../services/api";
import {
  Message,
  ContainerLoading,
  ContainerImage,
  ContainerList,
} from "../styles/pages/Home";

export default function Home() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState(null);

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

  async function onSubmit() {
    if (!value) {
      setError(true);
    } else {
      setLoading(true);

      const { data } = await api.get("vehicles");
      if (data.results) {
        const arr = [];

        data.results.map((vehicle) => {
          arr.push({
            stops: Math.floor(
              (vehicle.cargo_capacity * vehicle.max_atmosphering_speed) / value
            ),
            name: vehicle.name,
          });

          setVehicles(arr);
        });
      }

      setLoading(false);
      setError(false);
      setValue("");
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
          event.stopPropagation();
          onSubmit();
        }}
      >
        <TextField
          type="number"
          label="Enter distance"
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
      {loading ? (
        <ContainerLoading>
          <CircularProgress />
        </ContainerLoading>
      ) : (
        <ContainerList className={classes.root}>
          {vehicles?.map((vehicle, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={`nav-${Math.floor(Math.random() * 4)}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={vehicle.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Stops: {isNaN(vehicle.stops) ? 0 : vehicle.stops}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </ContainerList>
      )}

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
    </>
  );
}
