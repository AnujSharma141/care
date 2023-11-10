"use client"
import React,{useRef} from 'react'
import { gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Input, DatePicker, TimePicker, Slider, Button, Row, Alert } from 'antd';
import { useUser } from '@auth0/nextjs-auth0/client';
import client from '../../apolloClient';

export default function InjuryForm({location, setUserState, userState, setLocation, call}) {
    const INJURY_MUTATION = gql`
    mutation Mutation($name: String!, $location: String, $reportedBy: String, $reportedDate: String, $reportedTime: String, $painLevel: Int, $email: String) {
    addInjury(name: $name, location: $location, reportedBy: $reportedBy, reportedDate: $reportedDate, reportedTime: $reportedTime, painLevel: $painLevel, email: $email){ 
          id
          name
          location
          reportedBy
          reportedDate
          reportedTime
          painLevel
        }
    }
  `;
  const [createInjury] = useMutation(INJURY_MUTATION, {client}) 
    
    const { user, error, isLoading } = useUser();
    const formRef = useRef(null)
    const onFinish = async (values) => {
         const {name, date, reportedBy, time, painLevel} = values
        if(name && date && reportedBy && time){
          const selectedDate = `${date.$y}-${date.$M + 1}-${date.$D}`
          const selectedTime = `${time.$H}:${time.$m}`
          const { data } = await createInjury({
            variables: {
                name: name,
                email: user?.email,
                location: location,// your form data,
                reportedDate: selectedDate,// your form data,
                reportedTime: selectedTime,// your form data,
                reportedBy: reportedBy,// your form data,
                painLevel: painLevel// your form data,
              },
            })
            call()
          toast.success('Injury Reported!')
          setLocation('')
          formRef.current.resetFields()

        }else{
          toast.error('please fill all the fields')
        }
        
      };
    
  return (
    <div>
    <Toaster/>
      <Form ref={formRef} requiwhiteMark="optional"  initialValues={{painLevel:1}} size='large' layout='vertical' style={{width: '25vw'}} name="injury-form" onFinish={onFinish} labelCol={{ span: 10 }}>
          <Form.Item label="Name" name="name" rules={[{ requiwhite: true, message: 'Please enter a name' }]}>
            <Input />
          </Form.Item>
          <Row justify={'space-between'}>
          <Form.Item label="Date" name="date" >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item label="Time" name="time">
            <TimePicker format="HH:mm" />
          </Form.Item></Row>
          <Form.Item label="Reported By" name="reportedBy" rules={[{ requiwhite: true, message: 'Please enter the reporter' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Pain Level" name="painLevel">
            <Slider min={1} max={5} defaultValue={[0]} />
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