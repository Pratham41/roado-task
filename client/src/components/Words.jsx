import React from "react";

import {
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: 10,
  },
}));

const Words = ({ words }) => {
  const classes = useStyles();
  let navigate = useNavigate(true);

  const openDetailScreen = (word) => {
    navigate(`/${word}`);
  };

  return (
    <Card className={classes.root} onClick={() => openDetailScreen(words?.id)}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {words?.id}
          </Typography>
          {words?.lexicalEntries?.length > 1 ? (
            words?.lexicalEntries?.map((i) => (
              <Typography variant="body2" component="p">
                ({i?.lexicalCategory?.text}){" "}
                {i?.entries[0]?.senses[0]?.definitions[0]}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" component="p">
              ({words?.lexicalEntries[0]?.lexicalCategory?.text}){" "}
              {words?.lexicalEntries[0]?.entries[0]?.senses[0]?.definitions[0]}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Words;
