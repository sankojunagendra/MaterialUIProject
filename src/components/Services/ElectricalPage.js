import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import SwipeableViews from 'react-swipeable-views'

import CoolerFront from '../../images/products/coolers/Cooler_Front.png'
import CoolerBack from '../../images/products/coolers/Cooler_Back.png'
import CoolerLeft from '../../images/products/coolers/Cooler_Left.png'
import CoolerRight from '../../images/products/coolers/Cooler_Right.png'
import CoolerGreenBorder from '../../images/products/coolers/Cooler_GreenBorder.png'
import CoolerTopBlue from '../../images/products/coolers/Cooler_TopBlue.png'
import Fan1 from '../../images/products/fans/Fan_1.png'
import Fan2 from '../../images/products/fans/Fan_2.png'
import Fan3 from '../../images/products/fans/Fan_3.png'
import Fan4 from '../../images/products/fans/Fan_4.png'
import Grinder from '../../images/products/MixerGrinders/Grinder.png'
import Grinder2 from '../../images/products/MixerGrinders/Grinder_2.png'


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
                    { name: "coolerFront", source: CoolerFront},
                    { name: "coolerBack", source: CoolerBack},
                    { name: "coolerRight", source:CoolerRight},
                    { name: "coolerLeft", source: CoolerLeft},
                    { name: "coolerGreenBorder", source: CoolerGreenBorder},                
                    { name: "coolerTopBlue", source: CoolerTopBlue},
                    { name: "fan1", source: Fan1},
                    { name: "fan2", source: Fan2},
                    { name: "fan3", source: Fan3},
                    { name: "fan4", source: Fan4},
                    { name: "grinder1", source: Grinder},
                    { name: "grinder2", source: Grinder2}
                ]

const ElectricalPage = (props) => {
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
                                    Electrical Services
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