import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import { ClockIcon, GlobeIcon } from "@fluentui/react-icons";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    margin: "10px auto",
    display: "flex",
    maxWidth: 700,
  },
  paper: {
    padding: theme.spacing(1),
    // background: "#ecececde",
    maxWidth: 700,
  },
  details: {
    display: "flex",
    maxHeight: "fit-content",
    flexDirection: "column",
    width: "100%",
  },
  content: {
    // backgroundColor: "#ecececde",
    maxWidth: 700,
    flex: "5 0 auto",
  },
  cover: {
    // backgroundColor: "#ecececde",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    maxHeight: "150px",
    margin: "0 auto",
    width: "40%",
    borderRightColor: "#bfbbbb",
  },
  controls: {
    // backgroundColor: "#/ecececde",
    maxWidth: "100%",
    display: "flex",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  icon: {
    float: "right",
  },
}));
export default function Article(prop) {
  const classes = useStyles();

  return (
    <article>
      <Card className={classes.root}>
        <div className={classes.details}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    ></Typography>{" "}
                    <Typography variant="subtitle1" gutterBottom>
                      <Box
                        fontWeight="fontWeightBold"
                        lineHeight="normal"
                        m={1}
                      >
                        <Link color="inherit" href="https://google.com?q=taken">
                          SpaceX goes to Mars: To setup establishment by 2040
                        </Link>{" "}
                      </Box>{" "}
                    </Typography>{" "}
                    <Typography variant="body2">
                      <Box boxShadow={0} lineHeight="normal" m={1}>
                        The SpaceX plan for building a Mars settlement includes
                        refueling in orbit. revealed his grand plan for
                        establishing a human settlement on Mars.
                      </Box>{" "}
                    </Typography>{" "}
                  </Grid>{" "}
                  <Grid item>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ cursor: "pointer" }}
                    >
                      <Box
                        lineHeight="normal"
                        style={{ cursor: "auto" }}
                        component="div"
                        display="inline"
                        p={0}
                        m={1}
                      >
                        <Text4>
                          <ClockIcon style={{ marginBottom: "5px", color: "#776f6f" }} /> Oct 5,
                          2019
                        </Text4>
                      </Box>{" "}
                      <Box
                        lineHeight="normal"
                        style={{ cursor: "auto" }}
                        component="div"
                        display="inline"
                        p={1}
                        m={1}
                      >
                        <Text3>
                          <Link
                            color="inherit"
                            href="https://google.com?q=taken"
                          >
                            <GlobeIcon 
                              style={{ marginBottom: "5px" , color: "#776f6f",marginRight: "5px"}} 
                            /> 
                            SPACE.com
                          </Link>
                        </Text3>
                      </Box>{" "}
                      <Box
                        lineHeight="normal"
                        style={{ cursor: "auto" }}
                        component="div"
                        display="inline"
                        p={1}
                        m={1}
                      />
                    </Typography>{" "}
                  </Grid>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Paper>{" "}
        </div>{" "}
      </Card>
    </article>
  );
}

const Text3 = styled.span`
  font-family: Arial;
  color: #000000;
  font-size: 14px;
  margin-top: 1px;
`;

const Text4 = styled.span`
  font-family: Arial;
  color: #000000;
  font-size: 14px;
  margin-top: 3px;
`;
