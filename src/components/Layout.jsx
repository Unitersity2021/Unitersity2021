import React from 'react';
import { Grid, Typography, makeStyles, Box, Container } from '@material-ui/core';
import AnalysisScreen from './AnalysisScreen';
import ProcessButton from './ProcessButton';
import NotificationButton from './NotificationButton';

const useStyles = makeStyles((theme) => ({

    mainGridItem: {
        backgroundColor: 'blue',
    },
    mainBreakdownItem: {
        
        color: "darkorange",
    },
    mainBox: {
        padding: 100,
    }  
}));

export default function Layout(){

    const classes = useStyles();

    return (
        <Container className={classes.mainBox}>
            <Box >
            <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.mainBreakdownItem} variant='h5'>
                        CovidFreeApp
                </Typography>
            </Grid>
            <NotificationButton />
            <ProcessButton />
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.mainBreakdownItem} variant='h6'>
                        Detail and Analysis
                </Typography>
            </Grid>
            <AnalysisScreen />
            
        </Grid>
        </Box>
        </Container>
        
    );
}