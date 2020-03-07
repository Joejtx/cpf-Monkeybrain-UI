import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
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

export const Calculator = function() {
    const options = {
        loan : 'First Home Calculator',
        contribution : 'Contribution Calculator',
        education: 'Education Monthly Instalment Rate Calculator'
    };

    const classes = useStyles();
    let func = ''
    const ITEM_HEIGHT = 40;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = option => {
        setAnchorEl(null);
        func = option;
        console.log(func);
    };

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

    return (
        <div>
            <Typography className={classes.root} variant="h5">
                Calculators 
            </Typography>
            <Button
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
            >
                Select Function
            </Button>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 500,
                    },
                }}
            >
            {Object.entries(options).map(keyV => {
                return(
                    <MenuItem key={keyV[0]} onClick={() => handleClose(keyV[0])}>
                        {keyV[1]}
                    </MenuItem>    
            )})}
            </Menu>

            <div className={classes.margin}>
                {
                    renderFunc('loan')
                }
            </div>
        </div>
    );        
}