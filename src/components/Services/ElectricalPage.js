import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// react-responsive-carousel
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'

// products

import SolarLocation from '../../images/products/solarDemo.jpg'
import Fan1 from '../../images/products/Fan1.jpg'
import Fan2 from '../../images/products/Fan2.jpg'
import Fan3 from '../../images/products/Fan3.jpg'
import Fan4 from '../../images/products/Fan4.jpg'
import CoolerFront from '../../images/products/CoolerFront.jpg'
import CoolerBack from '../../images/products/CoolerBack.jpg'
import CoolerLeft from '../../images/products/Cooler1_Left.jpg'
import CoolerRight from '../../images/products/Cooler1_Right.jpg'
import Cooler2 from '../../images/products/Cooler2.jpg'
import Cooler3 from '../../images/products/Cooler3.jpg'
import Mixer1 from '../../images/products/Mixer1.jpg'
import Mixer2 from '../../images/products/Mixer2.jpg'


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
        width:"100%",
        height:"35em",
        backgroundColor:"orange",
        [theme.breakpoints.down("sm")]: {
           height:"15em"
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

const ElectricalPage = (props) => {
    const classes = useStyles()
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    
    return(
        <>
            <Grid container direction="column">
                {/* <Grid item className={classes.productsContainer}> */}
                    <Carousel width="100%" dynamicHeight={true} showThumbs={false} showStatus={false} >
                            {/* Cooler Block */}
                            <div>
                                <img alt="coolerFront" src={CoolerFront}/>
                            </div>
                            <div>
                                <img alt="coolerBack" src={CoolerBack}/>
                            </div>
                            <div>
                                <img alt="coolerLeft" src={CoolerLeft}/>
                            </div>
                            <div>
                                <img alt="coolerRight" src={CoolerRight}/>
                            </div>

                            {/* Fan Block */}
                            <div>
                                <img alt="fan1" src={Fan1}/>
                            </div>
                            <div>
                                <img alt="fan2" src={Fan2}/>
                            </div>
                            <div>
                                <img alt="fan3" src={Fan3}/>
                            </div>
                            <div>
                                <img alt="fan4" src={Fan4}/>
                            </div>

                            {/* Mixer Block */}
                            <div>
                                <img alt="mixer1" src={Mixer1}/>
                            </div>
                            <div>
                                <img alt="mixer2" src={Mixer2}/>
                            </div>
                    </Carousel>
                
                {/* </Grid> */}
                <Grid item className={classes.rowContainer}>
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