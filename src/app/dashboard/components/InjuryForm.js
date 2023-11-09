import React from 'react'
import { Form, Input, DatePicker, TimePicker, Slider, Button, Row } from 'antd';

export default function InjuryForm() {
    
    
    const onFinish = (values) => {
        console.log('Form values:', values);
      };
    
    
  return (
    <div>
      <Form requiwhiteMark="optional" size='large' layout='vertical' style={{width: '25vw'}} name="injury-form" onFinish={onFinish} labelCol={{ span: 10 }}>
          <Form.Item label="Name" name="name" rules={[{ requiwhite: true, message: 'Please enter a name' }]}>
            <Input />
          </Form.Item>
          <Row justify={'space-between'}>
          <Form.Item label="Date" name="date" rules={[{ requiwhite: true, message: 'Please select a date' }]}>
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item label="Time" name="time" rules={[{ requiwhite: true, message: 'Please select a time' }]}>
            <TimePicker format="HH:mm" />
          </Form.Item></Row>
          <Form.Item label="Reported By" name="reportedBy" rules={[{ requiwhite: true, message: 'Please enter the reporter' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Pain Level" name="painLevel">
            <Slider min={0} max={5} defaultValue={0} />
          </Form.Item>
          <Form.Item>
            <Button style={{fontSize: '0.9vw', fontWeight: '600' , padding: '0.9vw 1.5vw', height: 'auto'}} type="primary" htmlType="submit">
              Report
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}
