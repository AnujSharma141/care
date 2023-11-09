import React from 'react'
import { Card, Row, Col, Statistic } from 'antd';
import InjuryTable from '../components/InjuryTable'
import { mock } from '../components/data.js'

export default function Dashboard() {
  return (
    <Row gutter={30} style={{width: '90vw', marginTop: '7vh', marginLeft:'5vw'}} justify='center'>
  <Col span={13} style={{ height: '70vh', border: '1px solid #EBEBEB', padding: 0, borderRadius: '0.5vw'}} >
  
  <InjuryTable data={mock}/></Col>
  <Col span={7}>
  <Col>
    <Card>
        <Statistic title="Injuries Reported" value={2} />
      </Card>
    </Col>
    <Col >
    <Card style={{margin: '2vw 0'}}>
        <Statistic title="Injured Parts" value={2} />
      </Card>
    </Col>
    <Col>
      <Card>
        <Statistic title="Active Users" value={112893} />
      </Card>
    </Col>
  </Col>
  </Row>
  )
}
