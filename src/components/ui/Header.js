import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import logo from '../../assets/logo.svg'

const ElevationScroll = props => {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    logoContainer:{
        padding:0,
        "&:hover":{
            backgroundColor:"transparent"
        }
    },
    logo:{
        height:"4.7em",
        [theme.breakpoints.down('sm')] : {
            height:"4.5em"
        },
        [theme.breakpoints.down('xs')] : {
            height:"4em"
        }
    },
    tabContainer:{
        marginLeft:"auto"
    },
    tab:{
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:"25px"
    },
    button:{
        ...theme.typography.estimate,
        borderRadius:"50px",
        marginLeft:"50px",
        marginRight:"25px",
        height:"45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color:"white",
        marginTop:"40px",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity:0.7,
        "&:hover": {
            opacity:1
        }
    },
    drawerIconContainer: {
        marginLeft:"auto",
        "&:hover":{
            backgroundColor:"transparent"
        }
    },
    drawerIcon: {
        height:"30px",
        width:"30px"
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
        ...theme.typography.tab,
        color:"white",
        opacity:0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1    
        }
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

const Header = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const matches = useMediaQuery(theme.breakpoints.up('laptop'))
    
    const [openDrawer, setOpenDrawer] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false)

    const handleChange = (e, newValue) => {
        props.setValue(newValue)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpenMenu(false)
        props.setSelectedIndex(i)
        props.setValue(1)
    }

    const menuOptions = [
        { name:"Services", link:"/services", activeIndex: 1, selectedIndex: 0 },
        { 
            name:"Electrical Services", 
            link:"/electrical",
            activeIndex: 1,
            selectedIndex: 1  
        },
        {
            name:"Solar Services", 
            link:"/solar",
            activeIndex: 1,
            selectedIndex: 2  
        },
        { 
            name:"Other Services", 
            link:"/other",
            activeIndex: 1,
            selectedIndex: 3 
        }
    ]

    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        { 
            name: "Services", 
            link: "/services", 
            activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: event => handleClick(event)
        },
        { name: "About Us", link: "/about", activeIndex: 2 },
        { name: "Contact Us", link: "/contact", activeIndex: 3 },
        { name: "Login", link: "/login", activeIndex: 4 },
        { name: "PayOnline", link: "/payment", activeIndex: 5 }
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                        if (props.value !== route.activeIndex) {
                            props.setValue(route.activeIndex)
                            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                                props.setSelectedIndex(route.selectedIndex)
                            }
                        }
                    break;
                default:
                    break;
            }
        })
    },[props.value, menuOptions, props.selectedIndex, routes, props])
    
    const tabs = (
        <React.Fragment>
            <Tabs 
                value={props.value} 
                onChange={handleChange} 
                className={classes.tabContainer}
                indicatorColor="primary"
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        component = {Link}
                        to={route.link}
                        label={route.name}
                        className={classes.tab}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>
            <Button
                variant="contained" 
                color="secondary" 
                className={classes.button}
                component={Link}
                to="/estimate"
            >
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{paper: classes.menu}}
                elevation={0}
                MenuListProps={{ onMouseLeave: handleClose}}
                keepMounted
                style={{zIndex: 1302}}
            >
                {menuOptions.map((option, index) => (
                    <MenuItem
                        key={`${option}${index}`}
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem}}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        selected={index === props.selectedIndex && props.value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}} 
                            divider
                            button 
                            component={Link} 
                            to={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{selected: classes.drawerItemSelected}}
                        >
                            <ListItemText 
                                className={classes.drawerItem} 
                                disableTypography>{route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem 
                        classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                        onClick={() => setOpenDrawer(false)} 
                        divider
                        button
                        component={Link} 
                        to="/estimate"
                    >
                        <ListItemText 
                            className={classes.drawerItem} 
                            disableTypography>Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return(
        <>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button 
                            component={Link} 
                            to="/" 
                            className={classes.logoContainer}
                            onClick={() => props.setValue(0)}
                            disableRipple
                        >
                            <img src={logo} alt="App logo" className={classes.logo}/>
                        </Button>
                        {matches ? tabs : drawer}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}

export default Header;