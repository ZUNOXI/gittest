import React from "react";
import { Grid, Link } from "@material-ui/core";
import questionicon from "../images/questionicon.png";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

const Board = ({ one }) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      style={{
        border: "1px solid #c8d0d0",
        borderRadius: "15px",
        marginTop: "5px"
      }}
    >
      <Grid item xs={1}>
        <img
          src={questionicon}
          alt=""
          style={{
            width: "60%",
            height: "auto",
            marginTop: "25%",
            marginLeft: "25%"
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <StyledLink
          style={{
            color: "black"
          }}
          href={"/question/" + one.id}
        >
          <div>
            <h2>{one.title}</h2>
            <p>{one.content}</p>
          </div>
        </StyledLink>
      </Grid>
    </Grid>
  );
};

export default Board;
