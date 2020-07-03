import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'; 
import styles from './Cards.module.css';
import cx from 'classnames';
import { I18nextProvider } from "react-i18next";
import i18n from '../../i18n';


var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Cards = (props)=>{

    
    
    if(!props.data.confirmed)
    {
        return <h1>Loading.....</h1>;
    }
    return (
     <div className={styles.container}>
        <Grid container spacing={3} justify={"center"}>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>{i18n.t("Infected")}</Typography>
                    <Typography variant="h5" gutterBottom>
                        <CountUp
                          start={0}
                          end={props.data.confirmed.value}
                          duration={2.5}
                          separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toLocaleDateString(i18n.t("en-US"),options)}</Typography>
                    <Typography variant="body2" gutterBottom>{i18n.t("Number of active cases of covid19")}</Typography>

                </CardContent>


            </Grid> 
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>{i18n.t("Recovered")}</Typography>
                    <Typography variant="h5" gutterBottom>
                        <CountUp
                          start={0}
                          end={props.data.recovered.value}
                          duration={2.5}
                          separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toLocaleDateString(i18n.t("en-US"),options)}</Typography>
                    <Typography variant="body2" gutterBottom>{i18n.t("number of recovered cases of covid-19")}</Typography>

                </CardContent>


            </Grid> 
            <Grid item component={Card} xs = {12} md ={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>{i18n.t("Deaths")}</Typography>
                    <Typography variant="h5" gutterBottom>
                        <CountUp
                          start={0}
                          end={props.data.deaths.value}
                          duration={2.5}
                          separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>{new Date(props.data.lastUpdate).toLocaleDateString(i18n.t("en-US"),options)}</Typography>
                    <Typography variant="body2" gutterBottom>{i18n.t("number of deaths from covid-19")}</Typography>

                </CardContent>


            </Grid> 



        </Grid>

     </div>
    )

}


export default Cards;