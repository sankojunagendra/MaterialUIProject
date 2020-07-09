import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width:"100%",
        zIndex:1302,
        position:"relative"
    },
    adornment: {
        width:"25em",
        verticalAlign:"bottom",
        [theme.breakpoints.down('sm')] : {
            width: "21em"
        },
        [theme.breakpoints.down('xs')] : {
            width: "13em"
        }
    },
    mainContainer: {
        position: "absolute",
    },
    link: {
        color:"white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration:"none"
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        height:"4em",
        width:"4em",
        // [theme.breakpoints.down('sm')] : {
        //     width: "3em",
        //     height:"3em"
        // },
        [theme.breakpoints.down('xs')] : {
            width: "2.5em",
            height:"2.5em"
        }
    },
    socialContainer: {
        position: "absolute",
        marginTop:"-6em",
        right: "1.5em",
        [theme.breakpoints.down('xs')] : {
           right: "0.8em",
        }
    },
}))

const Footer = (props) => {
    const classes = useStyles()

    return(
        <>
            <footer className={classes.footer}>
                <Hidden smDown>
                    <Grid container justify="center" className={classes.mainContainer}>
                        <Grid item className={classes.gridItem}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item component={Link} to="/" onClick={() => props.setValue(0)} className={classes.link}>
                                    Home
                                </Grid>
                                <Grid item component={Link} to="/contact" onClick={() => props.setValue(3)} className={classes.link}>
                                    Contact Us
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Grid container direction="column" spacing={2}>
                                <Grid 
                                    item 
                                    component={Link} 
                                    to="/services"
                                    className={classes.link} 
                                    onClick={() => 
                                        {
                                            props.setValue(1);
                                            props.setSelectedIndex(0)
                                        }
                                    }
                                >
                                    Services
                                </Grid>
                                <Grid 
                                    item 
                                    component={Link} 
                                    to="/electrical" 
                                    className={classes.link}
                                    onClick={() => 
                                        {
                                            props.setValue(1);
                                            props.setSelectedIndex(1)
                                        }
                                    }
                                >
                                    Electrical
                                </Grid>
                                <Grid 
                                    item 
                                    component={Link} 
                                    to="/solar" 
                                    className={classes.link}
                                    onClick={() => 
                                        {
                                            props.setValue(1);
                                            props.setSelectedIndex(2)
                                        }
                                    }
                                >
                                    Solar
                                </Grid>
                                <Grid 
                                    item 
                                    component={Link} 
                                    to="/other" 
                                    className={classes.link}
                                    onClick={() => 
                                        {
                                            props.setValue(1);
                                            props.setSelectedIndex(3)
                                        }
                                    }
                                >
                                    Other
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                                    About Us
                                </Grid>
                                <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                                    History
                                </Grid>
                                <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                                    Vision
                                </Grid>
                                <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                                    Team
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                                    Policy
                                </Grid>
                                <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                                    Privacy Policy
                                </Grid>
                                <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                                    Cookies Policy
                                </Grid>
                                <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                                    Terms and Conditions
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <img
                    src={footerAdornment} 
                    alt="black decorative slash"
                    className={classes.adornment}
                />
                <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
                    <Grid item component={"a"} href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                        <img src={facebook} alt="facebook_logo" className={classes.icon}/>
                    </Grid>
                    <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                        <img src={twitter} alt="twitter_logo" className={classes.icon}/>
                    </Grid>
                    <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                        <img src={instagram} alt="instagram_logo" className={classes.icon}/>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
}

export default Footer;