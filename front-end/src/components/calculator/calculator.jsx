import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import ContributionForm from './Forms/contributionCalc';
import LoanRepayForm from './Forms/loanRepayment';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

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
    tabRoot: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <CalculatorType cat={children} />}
        </Typography>
        //<Box p={3}>{children}</Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export const Calculator = function() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [optionsData, setOptionsData] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const handleTabChange = val => {
        switch(val) {
            case 'Healthcare':
                setOptionsData([
                    { title: 'Loan Repayment', short: 'loan', component: <LoanRepayForm />},
                    { title: 'Contribution', short: 'contribution', component: <ContributionForm />}
                ])
            default:
                setOptionsData([
                    { title: 'Loan Repayment', short: 'loan', component: <LoanRepayForm />},
                    { title: 'Contribution', short: 'contribution', component: <ContributionForm />}
                ])    
        }
    }

    let comp = "";
    if (optionsData != null) {
        comp = <CalculatorType data={optionsData} />
    }

    return (
        <div className={classes.tabRoot}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Retirement" {...a11yProps(0)} onClick={event => console.log("retirement")} />
                    <Tab label="Housing" {...a11yProps(1)} onClick={event => handleTabChange('Housing')} />
                    <Tab label="Healthcare" {...a11yProps(2)} onClick={event => handleTabChange('Healthcare')} />
                    <Tab label="Self-employed Scheme" {...a11yProps(3)} onClick={event => handleTabChange('Self-employed Scheme')} />
                    <Tab label="Others" {...a11yProps(4)} onClick={event => handleTabChange('others')} />
                </Tabs>
            </AppBar>
            {
                comp
            }
        </div>
    );        
}

function CalculatorType(props) {
    const classes = useStyles();
    const [comp, setComp] = React.useState(null);

    // const renderFunc = func => {
    //     switch(func) {
    //         case 'contribution':
    //             return <ContributionForm />
    //         case 'loan':
    //             return <LoanRepayForm />
    //         default:
    //             return ''
    //     }
    // }
    const autoStyles = {
        marginLeft:'10%',
        marginRight:'10%',
        marginBottom: '2%',
        textAlign: 'center'
    }

    const optionsData = props.data

    return(
        <div>
            <Typography className={classes.root} variant="h5">
                {props.value} 
            </Typography>
            <Autocomplete
                id="calc-select"
                options={optionsData}
                getOptionLabel={optionsData => optionsData.title}
                style={autoStyles}
                renderInput={params => <TextField {...params} 
                                            label="Select Function" 
                                            variant="outlined" 
                                        />}
                onChange={(event, newValue) => {
                    if (newValue != null) {
                        console.log(newValue)
                        console.log(newValue.short)    
                        setComp(newValue.component);
                    }
                }}
            />
            <div className={classes.margin}>
                {
                    comp
                }
            </div>
        </div>
    );
}