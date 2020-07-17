import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import history from "../assets/history.svg";
import profile from '../images/founder.jpg';
import director from '../images/director.jpg';
import chiefEngineer from '../images/chiefEngineer.jpg';
import rdHod from '../images/rdHod.jpg';

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
  avatarContainer: {
    height: "15em",
    width: "15em",
    borderRadius:"50%",
    [theme.breakpoints.down("sm")]: {
      height: "10em",
      width: "10em",
      maxHeight: 300,
      maxWidth: 300
    }
  },
  
  avatar: {
    height: "100%",
    width:"100%",
    borderRadius:"50%"
  },

  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  teamInfoContainer: {
    marginLeft:"5em",
    maxWidth: "45em",
    marginTop:"6em",
    [theme.breakpoints.down("sm")]: {
     marginTop:"3em",
     marginLeft:0
    }
  },
  personName: {
    fontFamily:"Raleway",
    fontWeight:"400",
    fontStyle:"italic",
    fontSize:"1.5rem"
  }
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Bell Twain is an Indian company, which is a highly innovative STARTUP dealing in the
          field of Electrical and Electronics engineering with its core sectors like Research and Development, 
          Engineering and Technology, <br /> and Solar Consultancy.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom // the text will have a bottom margin
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2020, we’re ready to get our hands in the field of Electrical and Electronics
                and Solar sectors.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren’t all people in rural areas
                using available Technology? There are many different answers to that question:
                economic barriers, social barriers, educational barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Our new developments in {" "} 
                <span className={classes.specialText}>R & D</span> and Recent developments in 
                Solar Energy opened up more possiblities.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Team Block */}
      <Grid 
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined }
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth : "25em"}}
          >
            <Grid item>
                <Typography variant="h4" align={matchesMD? "center": undefined}>
                  Team
                </Typography>
            </Grid>
            {/* Founder Block */}
            <Grid item style={{ marginTop: "3em"}}>
              <div className={classes.avatarContainer}>
                <img alt="founder" src={profile} className={classes.avatar} />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
            <Grid
              item
              container
              direction="column"
              justify={matchesMD ? "center" : undefined}
              className={classes.teamInfoContainer}
            >
             <Grid item>
                <Typography align={matchesMD? "center": undefined} variant="body1" paragraph className={classes.personName}>Gaurav Kumar, Founder</Typography>
             </Grid>
             <Grid item>
                <Typography align={matchesMD? "center": undefined} variant="body1" paragraph>
                    Aged 26, is the Chairman and Managing Director of our Company.
                    He holds a bachelor's degree in Electrical and Electronics Engineering (EEE) from JNTU Hyderabad.
                    He has over 3 years of experience in the power sector in the areas of Installation and Planning.
                    He has joined company as a CMD in our Board in April, 2020.
                </Typography>
             </Grid>
            </Grid>
        </Grid>
      </Grid>

      {/* Director Block */}
      <Grid 
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined }
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth : "25em"}}
          >
            <Grid item style={{ marginTop: "3em"}}>
              <div className={classes.avatarContainer}>
                <img alt="director" src={director} className={classes.avatar}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
            <Grid
              item
              container
              direction="column"
              justify={matchesMD ? "center" : undefined}
              className={classes.teamInfoContainer}
              style={{ marginTop:"4em"}}
            >
             <Grid item>
                <Typography 
                    align={matchesMD? "center": undefined} 
                    variant="body1" 
                    paragraph 
                    className={classes.personName}
                >
                  Ranjeet Kumar, Director
                </Typography>
             </Grid>
             <Grid item>
                <Typography align={matchesMD? "center": undefined} variant="body1" paragraph>
                    Aged 26, is the Director of our Company.
                    He holds a bachelor's degree in Electronics and Communications Engineering (ECE) from PTU Punjab.
                    He has over 3 years of experience in the Telecom sector.
                    He has joined company as a Director in our Board in April, 2020.
                </Typography>
             </Grid>
            </Grid>
        </Grid>
      </Grid>

      {/* Chief Engineer Block */}
      
      <Grid 
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined }
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth : "25em"}}
          >
            <Grid item style={{ marginTop: "3em"}}>
              <div className={classes.avatarContainer}>
                <img alt="chiefEngineer" src={chiefEngineer} className={classes.avatar}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
            <Grid
              item
              container
              direction="column"
              justify={matchesMD ? "center" : undefined}
              className={classes.teamInfoContainer}
              style={{ marginTop:"4em"}}
            >
             <Grid item>
                <Typography 
                    align={matchesMD? "center": undefined} 
                    variant="body1" 
                    paragraph 
                    className={classes.personName}
                >
                  Raman Kumar, Chief Engineer
                </Typography>
             </Grid>
             <Grid item>
                <Typography align={matchesMD? "center": undefined} variant="body1" paragraph>
                    Aged 26, is the Chief Engineer (Design & Planning) of our Company.
                    He holds a bachelor's degree in Mechanical Engineering (MEC) from PTU Punjab.
                    He has over 5 years of Working experience in Reliance Industries and BPCL.
                    He has joined company as a Chief Engineer in our Board in April, 2020.
                </Typography>
             </Grid>
            </Grid>
        </Grid>
      </Grid>

      {/* HOD R & D */}
      <Grid 
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined }
        className={classes.rowContainer}
        style={{
          marginBottom: matchesMD ? "3em" : "10em"
        }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth : "25em"}}
          >
            <Grid item style={{ marginTop: "3em"}}>
              <div className={classes.avatarContainer}>
                <img alt="rdHod" src={rdHod} className={classes.avatar}/>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
            <Grid
              item
              container
              direction="column"
              justify={matchesMD ? "center" : undefined}
              className={classes.teamInfoContainer}
              style={{ marginTop:"4em"}}
            >
             <Grid item>
                <Typography 
                    align={matchesMD? "center": undefined} 
                    variant="body1" 
                    paragraph 
                    className={classes.personName}
                >
                  Neelamber, HOD (R & D)
                </Typography>
             </Grid>
             <Grid item>
                <Typography align={matchesMD? "center": undefined} variant="body1" paragraph>
                    Aged 26, is the Head of R & D of our Company.
                    He holds a bachelor's degree in Electrical and Electronics Engineering (EEE) from JNTU Hyderabad.
                    He has over 3 years of experience in the power sector in the areas of Installation and Planning.
                    He has joined company as a CMD in our Board in April, 2020.
                </Typography>
             </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction 
           // setValue={props.setValue}
        />
      </Grid>
    </Grid>
  );
}