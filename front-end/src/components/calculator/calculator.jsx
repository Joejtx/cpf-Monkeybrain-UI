import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { Typography, Menu, MenuItem } from '@material-ui/core';
import ContributionForm from './Forms/contributionCalc';
import LoanRepayForm from './Forms/loanRepayment';

const useStyles = makeStyles(theme => ({
    root: {
        fontWeight : theme.typography.fontWeightBold,        
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
    margin: {
        padding: theme.spacing(2),
    },
}));

const top100Films = [
    { title: 'Loan Repayment', short: 'loan' },
    { title: 'Contribution', short: 'contribution' }
]

export const Calculator = function() {
    const options = {
        loan : 'First Home Calculator',
        contribution : 'Contribution Calculator',
        education: 'Education Monthly Instalment Rate Calculator'
    };

    const classes = useStyles();
    const [value, setValue] = React.useState(null);

    const renderFunc = func => {
        switch(func) {
            case 'contribution':
                return <ContributionForm />
            case 'loan':
                return <LoanRepayForm />
            default:
                return ''
        }
    }
    let autoStyles = {
        marginLeft:'10%',
        marginRight:'10%',
        marginBottom: '2%',
        textAlign: 'center'
    }

    return (
        <div>
            <Typography className={classes.root} variant="h5">
                Calculators 
            </Typography>
            <Autocomplete
                id="calc-select"
                options={top100Films}
                getOptionLabel={option => option.title}
                style={autoStyles}
                renderInput={params => <TextField {...params} 
                                            label="Select Function" 
                                            variant="outlined" 
                                        />}
                onChange={(event, newValue) => {
                    if (newValue != null) {
                        console.log(newValue)
                        console.log(newValue.short)    
                        setValue(newValue.short);
                    }
                }}
            />
            <div className={classes.margin}>
                {
                    renderFunc(value)
                }
            </div>
        </div>
    );        
}