import React from 'react'
import { Card, Row, Col, Statistic } from 'antd';
import InjuryTable from '../components/InjuryTable'
import { mock } from '../components/data.js'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard({userState}) {
  
  function uniqueLocationCount(userState) {
    const uniqueLocations = new Set(userState.map(injury => injury.location));
    return uniqueLocations.size;
  }

  function countLocationOccurrences(injuries) {
    const locationCount = {};
  
    injuries.forEach(injury => {
      const location = injury.location;
      locationCount[location] = (locationCount[location] || 0) + 1;
    });
  
    return locationCount;
  }

  const locationCount = countLocationOccurrences(userState)
  console.log(locationCount)

  function generateShadesOfGreen(n) {
    const shades = [];

  for (let i = 1; i <= n; i++) {
    // Calculate the shade intensity from light to dark
    const intensity = Math.round((i / (n + 1)) * 255);
    
    // Create the hex color code with varying green intensity
    const hexColor = `#00${intensity.toString(16).padStart(2, '0')}00`;

    shades.push(hexColor);
  }

  return shades;
  }

  const data = {
    labels: Object.keys(locationCount),
    datasets: [
      {
        label: '',
        data: Object.values(locationCount),
        backgroundColor: generateShadesOfGreen(uniqueLocationCount(userState)),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins:{
    legend: {
      display: false
   },}
  }

  return (
    <Row gutter={30} style={{width: '90vw', marginTop: '7vh', marginLeft:'5vw'}} justify='center'>
  <Col span={13} style={{ height: '70vh', border: '1px solid #EBEBEB', padding: 0, borderRadius: '0.5vw'}} >
  
  <InjuryTable data={mock} stats={userState}/></Col>
  <Col span={7}>
  <Col>
    <Card>
        <Statistic title="Injuries Reported" value={userState.length} />
      </Card>
    </Col>
    <Col >
    <Card style={{margin: '2vw 0'}}>
        <Statistic title="Injured Parts" value={uniqueLocationCount(userState)} />
      </Card>
    </Col>
    <Col>
      <Card style={{maxHeight: '30vh', padding: '0vw 0'}}>
        <p style={{color: 'gray', fontSize: '0.95vw'}}>Injuries</p>
      <Pie style={{maxHeight: '20vh'}} data={data} options={options} />
      </Card>
    </Col>
  </Col>
  </Row>
  )
}