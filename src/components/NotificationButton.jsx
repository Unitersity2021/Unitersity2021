import { Grid, makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    mainContainer: {
        height: 50,
        color: theme.palette.warning.dark,
        backgroundColor: "red",
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    
    btn:{
        backgroundColor: "red",

    }

}));

export default function NotificationButton(){

    const classes = useStyles();

    return (
        <Grid container className={classes.mainContainer} lg={12} md={12} sm={12} xs={12}>
          
            <Button className={classes.mainContainer} variant="contained">Notification</Button>

        </Grid>
    );
}