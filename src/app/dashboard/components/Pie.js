import React, { useEffect } from 'react'
import { Chart, BarController } from 'chart.js/auto'


export default function Visalisation() {
   
    useEffect(()=>{
        const data = [
            { year: "10-20", count: 7 },
            { year: "20-30", count: 12 },
            { year: "30-40", count: 0 },
            { year: "40-50", count: 0 },
          ];
        
        new Chart(
            document.getElementById('chart-section'),
            {   
                label: '',
                type: 'bar',
                options:{
                    barThickness: 2,
                    borderRadius: 100,
                    plugins:{
                        legend: {
                            display: false
                        }
                    },
                    scales:{
                        y:{
                        display: false
                    },
                    x:{
                        grid:{
                            display: false
                        }
                    }
                    }
                },
                data: {
                  labels: data.map(row => row.year),
                  datasets: [
                    {
                      data: data.map(row => row.count)
                    }
                  ]
                }
              }
            );

    },[])

  return (
    <div className='chart'>
      <p className='chart-text'>users age</p>
        <canvas className='chart-body' id='chart-section'></canvas>
    </div>
  )
}