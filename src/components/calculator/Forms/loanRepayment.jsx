import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AttachMoney } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function LoanRepayForm() {
    const classes = useStyles();
    const [setGroup] = React.useState();
    
    const handleChange = event => {
        setGroup(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField 
                    id="outlined-search" 
                    label="Date of Birth (DD-MM-YYYY)" 
                    type="search" 
                    defaultValue="31-12-1996"
                    variant="outlined"
                />
                <div className={classes.margin}>
                    <Typography>
                        Loan Amount
                    </Typography>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <AttachMoney />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="" />
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.margin}>
                    <Typography>
                        Interest Rate(per annum)
                    </Typography>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="With a grid" />
                        </Grid>
                        <Grid item>
                            <Icon className="fas fa-percentage" style={{ fontSize: 20 }}/>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.margin}>
                    <Typography>
                        Monthly Installment
                    </Typography>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <AttachMoney />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="With a grid" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </form>
    );
}