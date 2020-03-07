import React from 'react';
import { loadCSS } from 'fg-loadcss';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AttachMoney } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { DashboardCard } from '../../card/card';

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    margin: {
        margin: theme.spacing(1),
        justifyContent: 'center',
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        justifyContent: 'center',
        color: theme.palette.text.secondary,
    },
    icons: {
        '& > .fa': {
          margin: theme.spacing(2),
        },
    }
}));

export default function LoanRepayForm() {
    let principal = 0
    let ir = 0
    let monthlyPayment = 0;
    const classes = useStyles();

    function handleValue(item, value) {
        switch(item) {
            case 'principal':
                principal = value
                result = renderResult()
                
            case 'monthly':
                monthlyPayment = value
                result = renderResult()
                
            case 'ir':
                ir = value
                result = renderResult()
                
        }
    }
        
   function renderResult() {
        return(
            <DashboardCard title="Loan Repayment Period (in years)" value={(0.649*12).toFixed(2)}/>
        )
    }

    function calculateResult() {
        let value = 0
        try {
            value = Math.log(principal / monthlyPayment) / Math.log(1+ir/12)
            console.log(value)
        } 
        catch(e) {
            console.log(e)
            return "NIL"
        }
        if (isNaN(value)) {
            return "NIL"
        } else {
            return value
        }
    }

    let result = renderResult()

    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#loadcss'),
        );
        }, []);

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div id="loadcss">
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                        <TextField 
                            id="outlined-search" 
                            label="Date of Birth (DD-MM-YYYY)" 
                            type="search" 
                            defaultValue="31-12-1996"
                            variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.margin}>
                                <Typography>
                                    Loan Amount
                                </Typography>
                                <Grid container spacing={1} alignItems="center" className={classes.paper}>
                                    <Grid item>
                                        <AttachMoney />
                                    </Grid>
                                    <Grid item>
                                        <TextField 
                                            id="loan-amount" 
                                            label="Total Loan Amount" 
                                            onChange={(event) => handleValue('principal', event.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <div className={classes.margin}>
                                <Typography>
                                    Interest Rate(per annum)
                                </Typography>
                                <Grid container spacing={1} alignItems="center" className={classes.paper}>
                                    <Grid item>
                                        <TextField 
                                            id="interest-rate" 
                                            label="Enter interest rate in %" 
                                            onChange={(event) => handleValue('ir', event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Icon className="fas fa-percentage" styles={{padding: 0}}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.margin}>
                                <Typography>
                                    Monthly Installment
                                </Typography>
                                <Grid container spacing={1} alignItems="center" className={classes.paper}>
                                    <Grid item>
                                        <AttachMoney />
                                    </Grid>
                                    <Grid item>
                                        <TextField 
                                            id="monthly-installment" 
                                            label="Enter monthly payment"
                                            onChange={(event) => handleValue('monthly', event.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </div>                        
                        </Grid>
                    </Grid>
                </div>
            </form>

            <div className="results">
                <Typography className={classes.margin} variant="h5">
                    Results 
                </Typography>
                {
                    result
                }
            </div>
        </div>
    );    
}

//0.7505747245639722
//0.6496384089476229