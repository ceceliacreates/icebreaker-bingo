import React from "react";
import { Typography, Grid} from '@material-ui/core';

function bingoHeader () {
    return (
        <Grid container justify="center" alignItems="center">
        <Typography variant='h3' gutterBottom>
          Icebreaker Bingo
      </Typography>
      </Grid>

    )
}

export default bingoHeader;