import { Grid, makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    mainContainer: {
        height: 50,
        color: theme.palette.warning.dark,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    
}));

export default function ProcessButton(){

    const classes = useStyles();

    return (
        <Grid container className={classes.mainContainer} lg={12} md={12} sm={12} xs={12}>
            <Button variant="contained" color="success" height="50">
            Process Status
            </Button>
        </Grid>
    );
}