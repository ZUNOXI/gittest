import React from "react";
import { Grid, } from "@material-ui/core";
import qa from "../images/Q&A.png";

const DetailQuestion = id => {
  // eslint-disable-next-line no-unused-expressions
  <Grid container style={{ marginTop: "10px" }}>
    <Grid
      item
      xs={12}
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      style={{
        border: "1px solid #c8d0d0",
        borderRadius: "5px",
        marginTop: "5px",
        height: "5rem"
      }}
    >
      <Grid item xs={7} container direction="row" alignItems="center">
        <img src={qa} alt="" height="70px" />
        <h2>궁금한 것을 질문해 보세요!</h2>
      </Grid>
    </Grid>
  </Grid>;
};

export default DetailQuestion;
