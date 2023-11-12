"use client"
import React, {useState} from 'react'
import { Card, Row, Col, Statistic, Modal, Progress } from 'antd';
import InjuryTable from '../components/InjuryTable'
import Image from 'next/image';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Body from '../components/Body';
import grids from '../../../assets/grids.png'

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard({userState}) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [row, setRow] = useState(null)
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
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
  
  <InjuryTable setRow={setRow} showModal={showModal} stats={userState}/></Col>
  {row?<Modal title="" open={isModalOpen} onOk={handleOk} width="55vw" onCancel={handleCancel}>
    <div style={{display: 'flex' , flexDirection: 'row'}}>
      <div style={{width: '20vw', marginTop: '1vw', display: 'flex', justifyContent: 'center', paddingLeft:'0vw', alignItems:'center', height: '60vh', background: '#09121E', borderRadius: '1vw',}}>
        <Image style={{position: 'absolute', zIndex: 0, width: '20vw',marginTop: '0vw', height: '60vh'}} src={grids} alt="" />
        <Body location={row.location} />  
      </div>
      <div style={{marginLeft: '2vw', marginTop: '1vw'}}>
        <div style={{marginTop:'1vw', color: '#aeaeae'}}>Injury Report</div>
        <h1>{row.name +" "+ row.location}</h1>
        <div style={{marginTop:'3vw', color: '#aeaeae'}}>Pain Level</div>
        <Progress style={{ width: '20vw'}} percent={row.painLevel*20} size={'20'} status="exception" />
        <div style={{marginTop: '0vw',}}>Date: {row.reportedDate}</div>
        <div>Time: {row.reportedTime}</div>

        <div style={{marginTop: '6vw', color: '#aeaeae'}}>Reported By</div>
        <div style={{ fontSize: '1.4vw', fontWeight: '500', marginBottom: '2vw'}}>{row.reportedBy}</div>
        

      </div>  
    </div>
  </Modal>:<></>}
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