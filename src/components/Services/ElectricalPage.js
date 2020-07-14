import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// import ButtonArrow from '../components/ui/ButtonArrow'
import CallToAction from '../../components/ui/CallToAction'


const useStyles = makeStyles(theme => ({
    electricalBlock: {
        marginTop: "8em",
        [theme.breakpoints.down("sm")]: {
          padding: 25,
          marginTop:"5em"
        }
    },
    heading: {
        maxWidth: "40em"
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
}))

const ElectricalPage = (props) => {
    const classes = useStyles()
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

    return(
        <>
            <Grid container direction="column">
                <Grid item>
                    {/*-----Call To Action Block-----*/}
                    <CallToAction 
                        // setValue={props.setValue}
                    />
                </Grid>
                <Grid item>
                    <Grid 
                        container 
                        className={classes.electricalBlock}
                        justify={matchesSM ? "center" : undefined}
                    >
                       <Grid item container direction="column" className={classes.heading}>
                            <Grid item>
                                <Typography align={matchesMD ? "center" : undefined} variant="h2">
                                    Electrical and Electronics
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="body1"
                                    paragraph
                                >
                                    Are you tired of finding the best quality Electrical and Electronic Products?
                                    If so then no need to worry as this is the reason why { " " }
                                    <span className={classes.specialText}>Bell Twain</span> is here to provide
                                    you the best quality Products that serve your needs.
                                </Typography>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="body1"
                                    paragraph
                                >
                                    We Manufacture both AC and DC Basic Home Appliances which are necessary
                                    like Cooler, Ceiling Fan, Electric Iron, Mixer Grinder
                                    <span className={classes.specialText}>at reasonable Prices</span>.
                                </Typography>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="body1"
                                    paragraph
                                >
                                    Our Products are designed from the ground up with your
                                    needs, wants, and goals at the core. This collaborative process
                                    produces finely tuned Products that is much more effective at
                                    improving the quality of the products and reducing costs than generalized
                                    options.
                                </Typography>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="body1"
                                    paragraph
                                >
                                    We create exactly what you what, exactly how you want it.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ElectricalPage;