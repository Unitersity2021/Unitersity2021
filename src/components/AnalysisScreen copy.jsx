import { Grid, Typography, makeStyles, Button, Card, Tooltip, Icon } from 
'@material-ui/core';
import axios from 'axios';
import api from '../api'

import GoogleMap from 'google-map-react';
import { useState, useEffect } from 'react';
import './AnalysisScreen.css';




function Marker({ text }) {
	return (
		<Tooltip title={text} placement="top">
			<Icon className="text-red">place</Icon>
		</Tooltip>
	);
}



const useStyles = makeStyles((theme) => ({

    mainContainer: {
        height: 500,
        backgroundColor: "#61dafb",
        color: theme.palette.warning.dark,       
        //color: theme.palette.common.white,
        //backgroundSize: 'cover'

    },
    mainItem: {
        padding: theme.spacing(8),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 500,
        backgroundColor: "#887eb6",

    },
    mainTitle: {
        color: '#011601',
        textAlign: 'center',
        backgroundColor: "#887eb6",
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 40,
        marginTop: 5,
    },btms:{
        backgroundColor: "#887eb6",
        color: '#011601',
        textAlign: 'center',
        justifyContent: 'center',
    }

    
}));

export default function AnalysisScreen(){

    const classes = useStyles();


   
      function showPosition(position){
        return position.coords.latitude+" "+position.coords.longitude;
    }   // handle success case
    function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;
        
        axios.post('/user', {
            latitude: latitude,
            longitude: longitude
          })
          .then(function (response) {
            console.log(response + "success");
          })
          .catch(function (error) {
            console.log(error);
          });



        
    }

    // handle error case
    function onError() {

        console.log('Unable to retrieve your location');

    }   // handle success case

    function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;

        console.log(latitude);
        console.log(longitude);

    }

    function onSuccessWatch(position) {
        const {
            latitude,
            longitude
        } = position.coords;

        console.log(latitude);
        console.log(longitude);

    }

    // handle error case
    function onError() {
     
        console.log('Unable to retrieve your location');
    }




    const getLocation = () => {

        console.log("Test")
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(onSuccess, onError);


        }else{
            console.log("Geolocation is not supported");
        }
    }
 
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(onSuccessWatch);

        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    // Test the current location angain moving location and calculate the distance
    const getMovingAverage = () => {
        console.log("Moving Average")
        // current location - last location = distance travelled 
    }


    // TODO: get current location and send to server with specific state 
    // Use the data to dsiplay CDC recmmmendations 
    const getCovid19 = () => {
        axios.get('https://jhucoronavirus.azureedge.net/api/v1/testing/daily.json')
        .then(res => {
            console.log(res.data);
        })
    }


// Update Our prediction model function 

    const predictCovid19 = () => {
        const userLocation = userLocation;
        const otherUsersLocation = otherUsersLocation;
        const recommendedSocialDistance = 6; // 6ft
        const notificationDistance = 25; // 25ft or 50ft Based on model
        const contactDistance = userLocation - otherUsersLocation; // Absolute value
        if (contactDistance < recommendedSocialDistance) {
            return {getTested};
        } else if (contactDistance > recommendedSocialDistance && contactDistance < notificationDistance) {
            return {quarantine};
        } else if (contactDistance > notificationDistance) {
            return {distancing};
        } else {
            return {guideline}
        }

        console.log("Predict Covid19")

        // current location - last location = distance travelled  

    }


    // TODO: create line in the graph to show the current location and distance travelled
    const getMarker = () => {
        const userLocation = userLocation;
        const userSafeLocation = userSafeLocation;
        const travelDistance = userLocation - userSafeLocation; // Absolute value
        if (travelDistance > 10) {
            console.log("Show on the map and send the in transit status notification")
            return {getTested};
        } else {
            return {guideline}
        }
        console.log("Marker")
        // draw line in the graph to show the current location and distance travelled away from safe location
    }

    // TODO: Retrieve data from the server and display it in the graph
    const getData = () => {
        // notification of zipcode infection rate
        console.log("Data")
        // Retrieve data from the server and display it in the graph
    }

    // TODO: Search users with the same location and display them in the graph 
    const getUsers = () => {

        // display users with positive covid result within the same zip code
        console.log("Users")
        // Search users with the same location and display them in the graph 
    }


    const getTested = () => {
        console.log("getTested")
        return <h1>Get Tested</h1>;
      }
    
    const quarantine = () => {
        console.log("quarantine")
        return <h1>Quarantine</h1>;
      }

    const distancing = () => {
        console.log("Social Distance")
        return <h1>Social Distance</h1>;
    }

    const guideline = () => {
        console.log("Follow CDC Guidelines")
        return <h1>Follow CDC Guidelines</h1>;
    }

    const notification = () => {
        const contactDistance = contactDistance;
        const notificationDistance = notificationDistance;
        if (contactDistance < notificationDistance) {
            return {getTested};
        } else if (contactDistance > notificationDistance && contactDistance < 25) {
            return {quarantine};
        } else {
            return {distancing};
        }
        
    }


    // function GetTested(props) {
    //     return <h1>Get Tested</h1>;
    //   }
    
    // function Quarantine(props) {
    //     return <h1>Quarantine</h1>;
    //   }

    // function Distancing(props) {
    //     return <h1>Social Distance</h1>;
    //   }

    // function Notification(props) {
    //     const contactDistance = props.contactDistance;
    //     const notificationDistance = props.notificationDistance;
    //     if (contactDistance < notificationDistance) {
    //         return <GetTested />;
    //     } else if (contactDistance > notificationDistance && contactDistance < 25) {
    //         return <Quarantine />;
    //     } else {
    //         return <Distancing />;
    //     }
        
    // }


    return (
        <Grid container className={classes.mainContainer}>
            <Grid item lg={4} md={5} sm={12} xs={12}>
            

            <Card className={classes.mainItem} >
            <Typography component='h2' variant='h4' className={classes.mainTitle}>
                Analysis
            </Typography>
            <Button onClick={getLocation}>Safe Location</Button>
            <Button >Exposure Range</Button>
            <Button onClick={getCovid19} >CDC Infection Rate</Button>
            <Button >Process Status Detail</Button>
            <Button >Overall Risk Factor</Button>
            <Button onClick={quarantine}>Recommendation</Button>
            <Button >Quarantine/Get Tested</Button>

            </Card>
            </Grid>
            <Grid lg={8} md={7} sm={12} xs={12}>
            
            <Card className={classes.mainItem}>
            <Typography component='h2' variant='h4' className={classes.mainTitle}>
                Location on Map with Density
            </Typography>
            
            <div className="w-full">
			<Typography className="h2 mb-16">User Location</Typography>
			<div className="w-full h-512">
			
            
                
			</div>
            <Typography variant='body1' paragraph>
               Prevention Notification distance
            </Typography>
		    </div>

            </Card>
            </Grid>
        </Grid>
    );
}

// http://react-material.fusetheme.com/documentation/third-party-components/google-map-react