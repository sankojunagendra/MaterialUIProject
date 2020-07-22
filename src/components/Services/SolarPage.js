import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import SwipeableViews from 'react-swipeable-views'

import bluePrint from '../../images/products/solar/bluePrint.jpg'
import demo from '../../images/products/solar/demo.png'
import panel from '../../images/products/solar/panel.png'
import panel2 from '../../images/products/solar/panel_2.jpg'
import panel3 from '../../images/products/solar/panel_3.jpg'

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em"
        }
    },

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
        // color: theme.palette.common.orange
        color: theme.palette.secondary.light
    },
    productsContainer: {
        ...theme.typography.background,
        width:"100%",
        height:"36em",
       [theme.breakpoints.down("sm")]: {
           height:"18em"
        }
    },

    imageContainer: {
        justifyContent:"center",
        display:'flex',
        height:"36em",
        alignItems:"center",
        [theme.breakpoints.down("sm")] : {
            height:"18em",
        }
    },
    
    image:{
        [theme.breakpoints.down("sm")] : {
            width: 250,
            height: 250
        }
    },
    
    content: {
        width: '100%',
        height: '35em',
        maxWidth: 'initial',
        maxHeight: 'initial',
        marginTop: 0,
        top:0,
        transform: 'none',
        position:'relative'
    },
    arrowRight: {
        right:10
    },
    arrowLeft: {
        left: 10
    },
    carouselWrapper: {
        borderRadius: 0,
        transform:'none',
        height:"100%",
        overflow:"auto"
    },
}))

const products = [
                    { name: "blueprint", source: bluePrint},
                    { name: "demo", source: demo},
                    { name: "panel", source: panel},
                    { name: "panel2", source: panel2},
                    { name: "panel3", source: panel3}              
                ]

const SolarPage = (props) => {
    const classes = useStyles()
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    
    return(
        <>
            <Grid container direction="column">
                <Grid item className={classes.productsContainer}>
                    <SwipeableViews enableMouseEvents style={{ height:"100%" }}>
                        { products.map((data, index) => (
                            <div 
                            key={`${data}${index}`}
                            className={classes.imageContainer}>
                                <img alt={data.name} src={data.source} className={classes.image} />
                            </div>
                        ))}
                    </SwipeableViews>
                </Grid>
                
                <Grid item className={classes.rowContainer}>
                    <Grid
                        container 
                        className={classes.electricalBlock}
                        justify={matchesSM ? "center" : undefined}
                    >
                       <Grid item container direction="column" className={classes.heading}>
                            <Grid item>
                                <Typography align={matchesMD ? "center" : undefined} variant="h2">
                                    Solar Services
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="body1"
                                    paragraph
                                >
                                    We are the Consultants of Solar Power and also deals Servicing and installation of
                                    Solar Plant.
                                    
                                </Typography>
                                <Typography
                                    align={matchesMD ? "center" : undefined}
                                    variant="body1"
                                    paragraph
                                >
                                    We provide all kinds of Solar Products like Panel, Battery, Charger, Inverter, different kinds of Lights,Fan
                                    and pump {" "}
                                    <span className={classes.specialText}>at low costs</span>.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SolarPage;