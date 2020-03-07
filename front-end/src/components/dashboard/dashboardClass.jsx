import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight : theme.typography.fontWeightBold,
        textAlign: 'left',
        margin: '2rem',
    },
    grid: {
        margin: '2rem'
    }
})); 

export const CpfDashboard = function(props) {
    const classes = useStyles();

    return(
        <div>
            <Typography className={classes.title} variant="h5">Cpf Dashboard</Typography>
            <div>
                {props.Component}
            </div>
        </div>
    );
}