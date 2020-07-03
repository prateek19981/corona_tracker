import React from 'react';


import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';
import { Button } from '@material-ui/core';


class App extends React.Component
{
    constructor()
    {
        super();
        this.state={
            data:{},
            country:'',
            value:"en"

        }
    }

   

    componentDidMount = async () => 
    {
        
        const { data:{confirmed , deaths, lastUpdate,recovered} } = await fetchData();
        const modifiedData = {
            confirmed,
            deaths,
            lastUpdate,
            recovered

        }
        console.log("data",modifiedData)
        this.setState({
            data:modifiedData
        })
        
    }

    handleChangeLang = () =>
    {
        console.log("clciked");
        if(this.state.value==="en")
        {
            this.setState({
                value:"hin"  
            })
            i18n.changeLanguage("hin");
        }
        else
        {
            this.setState({
                value:"en"  
            })
            i18n.changeLanguage("en");

        }
    }

    handleChange = async (country) =>
    {
        
        const data = await fetchData(country);

        console.log("data after clivk",data);
        this.setState({
            data:data.data,
            country:country
        })

    }
    render(){
        const { data,country } = this.state;
        return (
            
            <div className={styles.container}>
                <Button variant="contained" color="primary" className={styles.button} onClick={this.handleChangeLang}>
                    {i18n.t("Change Language")}
                </Button>
                <h1>{i18n.t("Covid - 19")}</h1>
                <Cards data={data}/>
                <CountryPicker onChangeCountry={this.handleChange}/>
                <Chart data={data} country={country} />
                
            </div>
        )
    }
}



export default App;

