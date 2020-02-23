import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ServiceCard } from '../card/card';
import Grid from '@material-ui/core/Grid';
import houseLogo from '../../assets/cpf-svg/architecture-and-city.svg';
import hospitalLogo from '../../assets/cpf-svg/hospital.svg';
import gradHatLogo from '../../assets/cpf-svg/graduation-hat.svg';
import calcLogo from '../../assets/cpf-svg/calculator.svg';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight : theme.typography.fontWeightBold,
        textAlign: 'left',
        margin: '2rem',
    },
    grid: {
        margin: '2rem',
    }
})); 

const logos = [
    ["housing", houseLogo],
    ["hospital", hospitalLogo],
    ["education", gradHatLogo],
    ["calculator", calcLogo]
]

export default function CpfServices(props) {
    const classes = useStyles();

    return(
        <Container>
            <Typography className={classes.title} variant="h5">Cpf Services</Typography>
            <Grid container spacing={4} className={classes.grid}>
                {
                    logos.map((key) =>
                        <ServiceCard 
                            title={key[0]}
                            imagePath={key[1]}
                            change={props.change}
                        />
                    )
                }
            </Grid>
      </Container>
    );
}