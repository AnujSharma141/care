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
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
      {isLoading || user ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />: 
      <>
          <div style={{  marginLeft: '-10vw'}}>
              <Image quality='100' style={{ marginTop: '2vh', width: '45vw', height: 'auto'}} src={graphic} alt="" />
            </div>
            
            <div style={{marginLeft: '-30rem',}}>
            <Image alt='' width={40} src={logo} />
            <Typography style={{ fontSize: '2vw', marginTop: '1vw', fontWeight: '600', letterSpacing: '-0.25px' }} className={inter.className}>care <br /> <p style={{ fontSize: '1vw', fontWeight: '400', color: '#aeaeae' }}>  Injury Tracking Application</p></Typography>
            <Link href="/api/auth/login"><Button className={inter.className} style={{ background: '#349D3E', marginTop: '2vh', padding: '1.8vh 2vw', fontWeight: '500', fontSize: '1vw', height: 'auto' }} type='primary' size='large'>Get Started</Button></Link>
            <br />
            <p style={{ fontSize: '1vw', fontWeight: '400', marginTop: '12vh', marginBottom: '1vh', color: '#aeaeae' }}>  crafted by</p>
            <Link href="https://anujsharma.online/" style={{ fontSize: '1vw', color: '#000',  textDecoration: 'underline', fontWeight: '500' }} className={inter.className}>Anuj Sharma</Link>
            
          </div>
          </>}
    </main>
    </main>
  )
}
