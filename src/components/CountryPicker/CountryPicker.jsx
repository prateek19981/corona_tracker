import React,{ useEffect,useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';
import i18n from '../../i18n';


const CountryPicker = (props)=>{
    const [countries,setCountries] = useState([]);
    useEffect(()=>{

        const getCountries = async ()=>{
            setCountries(await fetchCountries());

        }

        getCountries();
        

    },[setCountries]);
    console.log("countries",countries);
    return (
        <FormControl className={styles.formControl}>
            
            <NativeSelect defaultValue="" onChange={(e)=>{
                props.onChangeCountry(e.target.value);

            }}>
                <option value="">{i18n.t("Global")}</option>
                {countries.map((country,i)=>{
                    return (<option key={i} value={country}>{country}</option>); 


                })}
                 


            </NativeSelect>
        </FormControl>
    )

}


export default CountryPicker;