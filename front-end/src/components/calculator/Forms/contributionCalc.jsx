import React, { Component }from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const empGroup = [
    {
      value: 'PSE',
      label: 'Private Sector Employees',
    },
    {
      value: 'NPGE',
      label: 'Non-pensionable Government Employees',
    },
    {
      value: 'PGE',
      label: 'Pensionable Government Employee',
    },
];

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

export default class ContributionForm extends Component {
    constuctor() {
        this.state = {
            classes: useStyles(),    
        }
        // const [setGroup] = React.useState();

    }
    
    handleChange = event => {
        this.setGroup(event.target.value);
    };
    
    render() {
        const { classes } = this.state;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="outlined-select-employee-grp"
                        select
                        label="Native select"
                        onChange={this.handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your currency"
                        variant="outlined"
                        >
                        {empGroup.map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField 
                        id="outlined-search" 
                        label="Date of Birth (DD-MM-YYYY)" 
                        type="search" 
                        defaultValue="31-12-1996"
                        variant="outlined"
                    />
                    <div className={this.state.classes.margin}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <Icon className="fas fa-dollar-sign" />
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
}