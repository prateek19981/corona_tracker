import axios from 'axios';

const url = "https://covid19.mathdro.id/api";


export const fetchData = async (country) => {
    const temp_url = url;

    try{
          
        if(country){
            const response = await axios.get(`${url}/countries/${country}`);
            return response;
        }
        
        const response = await axios.get(url);
        return response;


    }catch(err){
        console.log("error in getting data",err);


    }


}

export const fetchDailyData = async () => {
    try{
        

        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((data)=>
          
             ({
                confirmed:data.confirmed.total,
                deaths:data.deaths.total,
                date:data.reportDate
             }) );

        return modifiedData;

        
    
        


    }catch(err)
    {
        console.log("error in getting daily data",err);
    }
}


export const fetchCountries = async() =>{
    try{

        const { data:{countries} } = await axios.get(`${url}/countries`);
        const item = countries.map((country)=>{
            return country.name;

        });
        return item;

    }catch(err){
        console.log(err);
    }
}