import React,{useState} from 'react'
import { Row, Segmented } from 'antd';
import Body from '../components/Body'
import Image from 'next/image';
import InjuryForm from '../components/InjuryForm'
import grids from '../../../assets/grids.png'


export default function Report() {
    return (
        <Row style={{marginTop: '5vh'}} justify={'center'}>
        <div style={{display: 'flex',  marginRight: '5vw', flexDirection: 'column', alignItems:'center', justifyContent: 'center',}}>
        <div style={{width: '25vw', display: 'flex', justifyContent: 'center', paddingLeft:'0vw', alignItems:'center', height: '65vh', background: '#09121E', borderRadius: '1vw',}}>
        <Image style={{position: 'absolute', zIndex: 0, width: '25vw',marginTop: '0vw', height: '65vh'}} src={grids} alt="" />
        <Body />
        </div>
        <Segmented style={{marginTop: '5vh'}} options={['Front', 'Back']} default />
        </div>
        <InjuryForm />
        </Row>
    )
}
