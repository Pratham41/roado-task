import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listWords } from "../redux/actions/words";
import AddWord from "../components/AddWord";
import Navbar from "../components/Navbar";
import Words from "../components/Words";
import { LinearProgress, makeStyles } from "@material-ui/core";
import { Alert, Grid, Snackbar } from "@mui/material";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  showlist: {
    marginTop: 40,
    marginBottom: 20,
  },
}));

const Home = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const wordsList = useSelector((state) => state.wordsList);
  const { loading, allWords, error } = wordsList;

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(' jat ahe.....');
    dispatch(listWords());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  return (
    <>
      {loading && (
        <LinearProgress  />
      )}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Something Went Wrong !
        </Alert>
      </Snackbar>
      <Navbar />

      <AddWord />

      <Grid
        className={classes.showlist}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} xl={12} lg={12}>
          {allWords.map((word) => (
            <Words key={word.id} words={word} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
