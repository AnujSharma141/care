import React,{useState} from 'react'
import { Row, Tag } from 'antd';
import Body from '../components/Body'
import Image from 'next/image';
import InjuryForm from '../components/InjuryForm'
import grids from '../../../assets/grids.png'


export default function Report({setUserState, userState, call}) {
    const [location, setLocation] = useState('')
    return (
        <Row style={{marginTop: '5vh'}} justify={'center'}>
        <div style={{display: 'flex',  marginRight: '5vw', flexDirection: 'column', alignItems:'center', justifyContent: 'center',}}>
        <div style={{width: '25vw', display: 'flex', justifyContent: 'center', paddingLeft:'0vw', alignItems:'center', height: '70vh', background: '#09121E', borderRadius: '1vw',}}>
        <Image style={{position: 'absolute', zIndex: 0, width: '25vw',marginTop: '0vw', height: '70vh'}} src={grids} alt="" />
        <Body setLocation={setLocation} location={location}/>
        
        </div>
        {location? <Tag color='white' style={{marginTop: '-3.5vw', color: 'black'}}>{location}</Tag>: <Tag bordered={false} style={{marginTop: '-3.5vw', color: 'white'}}>select injury location</Tag>}
        </div>
        <InjuryForm call={call} location={location} setLocation={setLocation} setUserState={setUserState} userState={userState}/>
        </Row>
    )
}