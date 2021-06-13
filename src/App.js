import React from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import "@material-ui/core";
import "@fontsource/roboto";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1.5),
    flexGrow: 1,
    backgroundColor: "#ffff8d",
    color: "#311b92",
    textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <div>
          <h1 className={classes.root}>Very very Carefully Chosen Tutors</h1>
        </div>{" "}
        <br />
        <br />
        <div style={{ backgroundColor: "green", width: "60%" }}>
          <p className={classes.root}>
            Cambridge & IB Mathematics Subject choice
          </p>

          <Grid className="table"
            container
            direction="row"
            justifyContent="flex-start"
            style={{ fontSize: "13px", justifyContent: "space-evenly" }}
          >
            <div>
              <h1>IGCSE - Mathematics</h1>
              <ul className="list">
                <li>Mathematics Core/Extended </li>
                <li>International Mathematics </li>
                <li>Additional Mathematics</li>
              </ul>
            </div>
            <div>
              <h1>AS-A level</h1>
              <ul className="list">
                <li>Mathematics 9709</li>
                <li>Mathematics Further 9231</li>
              </ul>
            </div>
            <div>
              <h1>IBDP</h1>
              <ul className="list">
                <li>Mathematics AA SL</li>
                <li>Mathematics AA HL</li>
                <li>Mathematics AI SL</li>
                <li>Mathematics AI HL</li>
              </ul>
            </div>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};

export default App;
