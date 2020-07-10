import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'

import ButtonArrow from '../components/ui/ButtonArrow'
import CallToAction from '../components/ui/CallToAction'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        // marginTop: "5em",
        // [theme.breakpoints.down("md")]: {
        // marginTop: "3em"
        // },
        // [theme.breakpoints.down("xs")]: {
        // marginTop: "1.5em"
        // }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
          marginLeft: 0
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
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
          marginBottom: "2em"
        }
    },
    // Service Section
    serviceContainer: {
        marginTop: "8em",
        [theme.breakpoints.down("sm")]: {
          padding: 25,
          marginTop:"5em"
        }
    },
    subtitle: {
        marginBottom: "1em"
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
}))

const LandingPage = (props) => {
    const classes = useStyles()
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item>
                    {/*-----Call To Action Block-----*/}
                    <CallToAction 
                        // setValue={props.setValue}
                    />
                </Grid>
                <Grid item>
                {" "}
                {/*-----Electrical Products Block-----*/}
                    <Grid
                        container
                        //   direction="row"
                        justify={matchesSM ? "center" : undefined}
                        className={classes.serviceContainer}
                    >
                        <Grid
                            item
                            style={{
                                marginLeft: matchesSM ? 0 : "5em",
                                textAlign: matchesSM ? "center" : undefined
                            }}
                        >
                            <Typography variant="h4">Electrical Products </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Save Energy. Save Time. Save Money.
                            </Typography>
                            <Typography variant="subtitle1">
                                We Manufacture necessary Home Appliances like Ceiling Fan, Cooler{" "}
                            <span className={classes.specialText}>etc.</span>
                            </Typography>
                            <Button
                                component={Link}
                                to="/electrical"
                                variant="outlined"
                                className={classes.learnButton}
                                // onClick={() => {
                                //     props.setValue(1);
                                //     props.setSelectedIndex(1);
                                // }}
                            >
                                <span style={{ marginRight: 10 }}>Learn More</span>
                                <ButtonArrow
                                    width={10}
                                    height={10}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                {" "}
                {/*-----Solar Products-----*/}
                    <Grid
                        container
                        direction="row"
                        justify={matchesSM ? "center" : "flex-end"}
                        className={classes.serviceContainer}
                    >
                        <Grid
                            item
                            style={{
                                marginRight: matchesSM ? 0 : "5em",
                                textAlign: matchesSM ? "center" : undefined
                            }}
                        >
                            <Typography variant="h4">Solar Products</Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Save Resources. Save Planet. Save Human.
                            </Typography>
                            <Typography variant="subtitle1">
                                We offer Services and Installation of Solar Plant
                                {matchesSM ? null : <br />}and provide all Solar Products.
                            </Typography>
                            <Button
                                component={Link}
                                to="/solar"
                                variant="outlined"
                                className={classes.learnButton}
                                // onClick={() => {
                                //     props.setValue(1);
                                //     props.setSelectedIndex(2);
                                // }}
                            >
                                <span style={{ marginRight: 10 }}>Learn More</span>
                                <ButtonArrow
                                    width={10}
                                    height={10}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                {" "}
                {/*-----Maintenance Facilities Block-----*/}
                    <Grid
                        container
                        // direction="row"
                        justify={matchesSM ? "center" : undefined}
                        className={classes.serviceContainer}
                    >
                        <Grid
                            item
                            style={{
                            marginLeft: matchesSM ? 0 : "5em",
                            textAlign: matchesSM ? "center" : undefined
                            }}
                        >
                            <Typography variant="h4">Maintenance Facilities</Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Reach More. Discover More. Get More.
                            </Typography>
                            <Typography variant="subtitle1">
                                We Provide Maintenance Facilities to all kinds of Heavy Machines, <br />
                                Automatic Machines and all Industrial Drive { " " }
                            <span className={classes.specialText}>etc.</span>
                            </Typography>
                            <Button
                                component={Link}
                                to="/other"
                                variant="outlined"
                                className={classes.learnButton}
                                // onClick={() => {
                                //     props.setValue(1);
                                //     props.setSelectedIndex(3);
                                // }}
                            >
                                <span style={{ marginRight: 10 }}>Learn More</span>
                                <ButtonArrow
                                    width={10}
                                    height={10}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item>
                   
                    <CallToAction 
                       
                    />
                </Grid> */}
            </Grid>
        </>
    );
}
export default LandingPage;

