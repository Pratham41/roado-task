import {
  Button,
  Container,
  Fab,
  makeStyles,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addWordToDictionary } from "../redux/actions/words";

import React from "react";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  fab: {
    right: 20,
    bottom: 20,
    position: "fixed",
    zIndex: 1,
  },
  container: {
    padding: 30,
    width: 300,
    height: 200,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(0),
    marginTop: 10,
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  buttons: {
    display: "flex",
    justifyContent: "end",
  },
}));

const AddWord = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const wordAdd = useSelector((state) => state.wordAdd);
  const { error } = wordAdd;

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(error);

  const [newWord, setNewWord] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addWordToDictionary(newWord));
    setNewWord("")
    setOpen(false);
  };



  const handleErrorClose = () => {
    setOpenError(false);
  };

  return (
    <>
      
      <Snackbar
        open={openError}
        autoHideDuration={2000}
        onClose={handleErrorClose}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Failed to add word !
        </Alert>
      </Snackbar>

      <Tooltip title="" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.container}>
          <Typography variant="h6">Add to Dictionary</Typography>
          <div className={classes.item}>
            <TextField
              id="standard-basic"
              label="New word"
              fullWidth={true}
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
            />
          </div>
          <div className={classes.buttons}>
            <Button
              color="primary"
              type="button"
              onClick={() => setOpen(false)}
            >
              CANCEL
            </Button>
            <Button color="primary" type="button" onClick={submitHandler}>
              ADD
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default AddWord;
