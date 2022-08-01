import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsOfWord } from "../redux/actions/words";
import { Clear } from "@material-ui/icons";
import { Alert, Snackbar } from "@mui/material";

import {
  Typography,
  makeStyles,
  Container,
  Divider,
  LinearProgress,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
  },
  clearIcon: {
    right: 20,
    top: 20,
    position: "fixed",
    zIndex: 1,
  },
  firstInfo: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    marginBottom: 10,
  },
}));

const WordDetails = () => {
  const classes = useStyles();

  let navigate = useNavigate(true);
  const { word } = useParams();

  const dispatch = useDispatch();

  const wordsDetails = useSelector((state) => state.wordsDetails);
  const { loading, word: wordDetail, error } = wordsDetails;

  const [openError, setOpenError] = useState(error);

  useEffect(() => {
    dispatch(detailsOfWord(word));
  }, [dispatch, word]);

  const clearButtonHandler = () => {
    navigate("/");
  };

  const handleErrorClose = () => {
    setOpenError(false);
  };

  return (
    <>
      {loading && <LinearProgress />}

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

      <Container className={classes.container}>
        <Clear className={classes.clearIcon} onClick={clearButtonHandler} />
        <Typography className={classes.title} variant="h4">
          {wordDetail?.id}
        </Typography>
        <Divider />

        {wordDetail?.lexicalEntries?.length > 1 ? (
          wordDetail?.lexicalEntries?.map((i) => (
            <Typography
              className={classes.firstInfo}
              variant="body2"
              color="textSecondary"
              component="h5"
            >
              ({i?.lexicalCategory?.text}){" "}
              {i?.entries[0]?.senses[0]?.definitions[0]}
            </Typography>
          ))
        ) : (
          <Typography
            className={classes.firstInfo}
            variant="body2"
            color="textSecondary"
            component="h5"
          >
            ({wordDetail?.lexicalEntries[0]?.lexicalCategory?.text}){" "}
            {
              wordDetail?.lexicalEntries[0]?.entries[0]?.senses[0]
                ?.definitions[0]
            }
          </Typography>
        )}
        <Divider />
        {wordDetail?.lexicalEntries?.length > 1 ? (
          wordDetail?.lexicalEntries?.map((i) => (
            <div className={classes.firstInfo}>
              <Typography variant="body2" component="h5">
                Example
              </Typography>
              <Typography variant="body2" component="h5">
                {i?.entries[0]?.senses[0]?.examples[0]?.text}
              </Typography>
            </div>
          ))
        ) : (
          <div className={classes.firstInfo}>
            <Typography variant="body2" component="h5">
              Example
            </Typography>
            <Typography variant="body2" component="h5">
              {
                wordDetail?.lexicalEntries[0]?.entries[0]?.senses[0]
                  ?.examples[0]?.text
              }
            </Typography>
          </div>
        )}
      </Container>
    </>
  );
};

export default WordDetails;
