import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Container,
  Divider,
} from "@material-ui/core";
import { Clear, Search } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { seachWords } from "../redux/actions/words";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  appbar: {
    padding: 5,
    marginBottom: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  wordlistNav: {
    marginTop: 0,
    borderBottom: "2px solid #4652B4",
    width: "100%",
    position: "fixed",
  },
  wordlistNavHeading: {},
  searchInput: {
    color: "red",
    border: "red",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [closeSearchIcon, setCloseSearchIcon] = useState(false);
  const [wordToSearch, setWordToSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    setWordToSearch(e.target.value);
    dispatch(seachWords(e.target.value));
  };

  const clearButtonHandler = (e) => {
    e.preventDefault();
    setWordToSearch("");
    setCloseSearchIcon(false);
  };

  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">{closeSearchIcon ? "" : "Vocab"}</Typography>
          {closeSearchIcon && (
            <input
              className="tp"
              placeholder="search..."
              autoFocus
              autoComplete="off"
              value={wordToSearch}
              onChange={searchHandler}
            ></input>
          )}
          {closeSearchIcon ? (
            <Clear onClick={clearButtonHandler} />
          ) : (
            <Search onClick={(e) => setCloseSearchIcon(true)} />
          )}
        </Toolbar>
      </AppBar>
      <Container className={classes.wordlistNav}>
        <Typography variant="h6" className={classes.wordlistNavHeading}>
          Words List
        </Typography>
      </Container>
      <Divider variant="fullWidth" />
    </>
  );
};

export default Navbar;
