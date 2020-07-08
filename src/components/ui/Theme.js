import { createMuiTheme } from '@material-ui/core/styles'

const arcBlue = "#0B72B9"
const arcOrange = "#FFBa60"

export default createMuiTheme({
    palette: {
        common:{
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary:{
            main: `${arcBlue}`
        },
        secondary:{
            main: `${arcOrange}`
        }
    },
    typography:{
        tab:{
            fontFamily:"Raleway",
            textTransform:"none",
            fontWeight:500,
            fontSize:"1rem",
        },
        estimate:{
            fontFamily:"Pacifico",
            fontSize:"1rem",
            textTransform:"none",
            color:"white"
        }
    },
    breakpoints:{
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            tablet: 640,
            laptop: 1024
        }
    }
})