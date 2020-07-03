import React , {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { I18nextProvider } from "react-i18next";
import i18n from '../../i18n';




const Chart = (props)=>{
    const [dailyData, setDailyData] = useState([]);
      
    useEffect(()=>{
    
        const fetchAPI = async ()=>{
            setDailyData(await fetchDailyData());

        }

        fetchAPI();
        
        console.log("daily data",dailyData);


    },[]);

    const { data,country } = props
    
        
    const dailydata = {
        
        labels: dailyData.map(({ date }) => date),
        datasets: [{ 
            data: dailyData.map(({confirmed}) => confirmed),
            label: `${ i18n.t("Infected")}` ,
            borderColor: '#3333ff',
            fill: true,
            }, {
                data: dailyData.map(({deaths}) => deaths),
                label: `${ i18n.t("Deaths")}`,
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
                },
            ],
            
        }

        const lineChart = (
            dailyData[0]?
                (<Line
                    data={dailydata}
                />):null
            )

    
        const barChart = (
            data.confirmed?
            (
                <Bar
                    data={{
                        labels:[`${ i18n.t("Infected")}`,`${ i18n.t("Recovered")}`,`${ i18n.t("Deaths")}`],
                        datasets:[{
                            label:"",
                            backgroundColor:[
                               'rgba(0,0,255,0.5)',
                                'rgba(0,255,0,0.5)',
                                'rgba(255,0,0,0.5)'

                            ],
                            data:[data.confirmed.value,data.recovered.value,data.deaths.value] 

                        }]

                    }}
                />
            ):null

        )

        

     

    
    // const lineChart = (
    //     dailyData.length ? (
            
    //       <Line
    //         data={{
    //           labels: dailyData.map(({ date }) => date),
    //           datasets: [{ 
    //             data: dailyData.map((data) => data.confirmed),
    //             label: 'Infected',
    //             borderColor: '#3333ff',
    //             fill: true,
    //             }, {
    //                 data: dailyData.map((data) => data.deaths),
    //                 label: 'Deaths',
    //                 borderColor: 'red',
    //                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
    //                 fill: true,
    //                },
    //             ],
              
    //         }}
    //        />
    //     ) : null
    //   );

  
      
    return (
        <div className={styles.container}>
            {country?barChart:lineChart}
           
            
        </div>
        
      
    )

    }


    export default Chart;
       

//export default Chart;