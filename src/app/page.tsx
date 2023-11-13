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
      <><div style={{marginLeft: '6rem'}}>
            <Image alt='' width={40} src={logo} />
            <Typography style={{ fontSize: '2.5vw', marginTop: '1vw', fontWeight: '500' }} className={inter.className}>Care <br /> <p style={{ fontSize: '1vw', fontWeight: '400', color: '#aeaeae' }}> /keər/ <br /> (noun) Protection</p></Typography>
            <Link href="/api/auth/login"><Button className={inter.className} style={{ background: '#349D3E', marginTop: '25vh', padding: '1.8vh 2vw', fontWeight: '500', fontSize: '1vw', height: 'auto' }} type='primary' size='large'>Get Started</Button></Link>
            <Link href="/api/auth/login" style={{ fontSize: '0.95vw', marginTop: '7vh', textDecoration: 'underline', fontWeight: '500' }} className={inter.className}>Sign In</Link>
          </div><div>
              <Typography style={{ fontSize: '0.95vw', color: '#AEAEAE', fontWeight: '400' }} className={inter.className}> track injuries the smart way</Typography>

              <img style={{ marginTop: '2vh', width: '26vw', borderRadius: '1vw' }} src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div></>}
    </main>
    </main>
  )
}
