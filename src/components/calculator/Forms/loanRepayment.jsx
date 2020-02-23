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

export default LoanRepayForm = function() {
    const calculateResult = () => {
        const value = 0
        try {
            value = Math.log(this.state.principal / this.state.monthlyPayment) / Math.log(1+this.state.ir/12)
        } 
        catch(e) {
            return "NIL"
        }
        return value
    }
    const classes = useStyles();

    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#loadcss'),
        );
        }, []);

    return (
        <div>
            <form className={this.state.classes.root} noValidate autoComplete="off">
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
                            <div className={this.state.classes.margin}>
                                <Typography>
                                    Loan Amount
                                </Typography>
                                <Grid container spacing={1} alignItems="center" className={this.state.classes.paper}>
                                    <Grid item>
                                        <AttachMoney />
                                    </Grid>
                                    <Grid item>
                                        <TextField 
                                            id="loan-amount" 
                                            label="Total Loan Amount" 
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <div className={this.state.classes.margin}>
                                <Typography>
                                    Interest Rate(per annum)
                                </Typography>
                                <Grid container spacing={1} alignItems="center" className={this.state.classes.paper}>
                                    <Grid item>
                                        <TextField 
                                            id="interest-rate" 
                                            label="Enter interest rate in %" 
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Icon className="fas fa-percentage" styles={{padding: 0}}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={this.state.classes.margin}>
                                <Typography>
                                    Monthly Installment
                                </Typography>
                                <Grid container spacing={1} alignItems="center" className={this.state.classes.paper}>
                                    <Grid item>
                                        <AttachMoney />
                                    </Grid>
                                    <Grid item>
                                        <TextField 
                                            id="monthly-installment" 
                                            label="Enter monthly payment"
                                        />
                                    </Grid>
                                </Grid>
                            </div>                        
                        </Grid>
                    </Grid>
                </div>
            </form>

            <div className="results">
                <Typography className={this.state.classes.margin} variant="h5">
                    Results 
                </Typography>
                <DashboardCard title="Loan Repayment Period (in years)" value={calculateResult()}/>
            </div>
        </div>
    );    
}