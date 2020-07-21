import { createMuiTheme } from '@material-ui/core/styles'

const arcBlue = "#0B72B9"
const arcOrange = "#FFBa60"
const arcGrey = "#868686"
const bgColor = "#085489"

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
        },
        learnButton: {
            borderColor: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            color: arcBlue,
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold"
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "3rem",
            color: arcBlue,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700
        },
        h6: {
            fontWeight: 500,
            fontFamily: "Raleway",
            color: arcBlue
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGrey
        },
        subtitle2: {
            color: "white",
            fontWeight: 300,
            fontSize: "1.25rem"
        },
        body1: {
            fontSize: "1.25rem",
            color: arcGrey,
            fontWeight: 300
        },
        background: {
            backgroundColor: bgColor
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