"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Button, Typography, Spin } from 'antd'
import { Inter } from 'next/font/google'
import logo from '../assets/logo.png'
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useEffect } from 'react'
import graphic from '../assets/graphic.png'
import card from '../assets/card.png'
import body from '../assets/body_outline.png'
import Link from 'next/link'


export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If the user is logged in, redirect to the dashboard
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <main className={styles.main}>
     <main className={styles.main}>
      {isLoading || user ? <div className={styles.center}><Spin indicator={<LoadingOutlined style={{ fontSize: 24 , color: 'black'}} spin />} /></div>: 
      <>
          <div className={styles.graphic}>
          <svg style={{position: 'absolute' , zIndex: '1'}} width="46vw" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
 
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)"/>
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#23344D" stroke-width="0.8"/>
              </pattern>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

              <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', zIndex: '3'}}>
              <Image alt='' width={240} style={{zIndex: '10', marginTop: '8vh'}} quality={80} src={card} priority  unoptimized/>
              <Image alt='' width={360} style={{zIndex: '10', marginTop: '1vh'}} quality={80} src={body} priority  unoptimized/>
              </div>
            </div>
            
            <div className={styles.box}>
            <Image alt='' width={40} quality={80} src={logo} priority  unoptimized/>
            <div style={{ fontSize: '4vw', marginTop: '1vw', color: 'black', fontWeight: '500',}} >care <br /> 
            <p style={{ fontSize: '1vw', fontWeight: '400', color: '#aeaeae' }}>  Injury Tracking Application</p></div>
            <Link href="/api/auth/login">
              <Button style={{ background: '#349D3E', border: '1px solid black', marginTop: '6vh', padding: '1.8vh 2vw', fontWeight: '500', fontSize: '1vw', height: 'auto', fontFamily: 'DM Sans' }} type='primary' size='large'>Get Started</Button></Link>
            <br />
            <p style={{ fontSize: '1vw', fontWeight: '400', marginTop: '8vh', marginBottom: '1vh', color: '#aeaeae' }}>  crafted by</p>
            <Link href="https://anujsharma.online/" style={{ fontSize: '1vw', color: '#000',  textDecoration: 'underline', fontWeight: '500' }}>Anuj Sharma</Link>
            
          </div>
          </>}
    </main>
    </main>
  )
}
