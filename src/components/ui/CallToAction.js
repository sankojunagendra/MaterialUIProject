import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import background from '../../images/background.jpg';
import background from '../../images/bulb.jpg';
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles(theme => ({
    background: {
        // backgroundimage: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(./resources/css/images/bg.jpg);
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "50em",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
            height: "40em",
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            marginTop:"2em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
        backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        color:"white", // my change
        height: 45,
        width: 145
    },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
      <>
        <Grid
            container
            alignItems="center"
            //justify="center"
            //   justify={matchesSM ? "center" : "space-between"}
            className={classes.background}
            direction={matchesSM ? "column" : "row"}
        >
            <Grid sm item className={classes.heroTextContainer}>
                <Typography variant="h2" align="center">
                    Empowering Society by Service
                    {/* <br />
                    by service */}
                </Typography>
                <Grid
                    container
                    justify="center"
                    className={classes.buttonContainer}
                >
                    <Grid item>
                        <Button
                            component={Link}
                            to="/estimate"
                            className={classes.estimateButton}
                            variant="contained"
                            // onClick={() => props.setValue(5)}
                        >
                        Free Estimate
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/revolution"
                            className={classes.learnButtonHero}
                            variant="outlined"
                            // onClick={() => props.setValue(2)}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow
                                width={15}
                                height={15}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </>
    );
}
