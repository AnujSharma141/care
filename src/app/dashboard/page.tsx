"use client"
import {  TabsProps, Tabs, ConfigProvider, Space, Typography, Row, Spin } from 'antd';
import logo from '../../assets/logo.png'
import Image from 'next/image';
import Dashboard from './tabs/Dashboard'
import Report from './tabs/Report'
import { Inter } from 'next/font/google'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import client from '../apolloClient';
import Link from 'next/link';
import { LoadingOutlined } from '@ant-design/icons';
import styles from '../page.module.css'


const inter = Inter({ subsets: ['latin'] })

const DashboardPage = () => {

  const [userState, setUserState] = useState([])

  const { user, error, isLoading } = useUser();
  const router = useRouter();

const REPORTS_QUERY = gql`
query Query($email: String!) {
  injuries(email: $email) {
      id
      name
      location
      reportedBy
      reportedDate
      reportedTime
      painLevel
      email
    }
  }
`;

  const { loading, data, refetch } = useQuery(REPORTS_QUERY, {
    variables: {
      email: user?.email
    },client // Skip the query if input is not available
  });

  
  useEffect(() => {
    // If the user is logged in, redirect to the dashboard
    if (!user) {
      router.push('/');
    }
    else refetch({
      email: user?.email
    }).then(res => setUserState(res.data?.injuries))
  }, [user, router]);


  const updateInjuries = () =>{
    refetch({
      email: user?.email
    }).then(res => {setUserState(res.data?.injuries)
    })
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Dashboard',
      children: <Dashboard updateInjuries={updateInjuries} userState={userState}/> ,
    },
    {
      key: '2',
      label: 'Report Injury',
      children: <Report call={refetch} setUserState={setUserState} userState={userState}/>
    },
  ];


  const fireRefetch = (key: string) =>{
    if(key == '1') updateInjuries()
  }
 
  return (
    !isLoading && user ? 
     <ConfigProvider theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        fontFamily: 'Inter'
      },
    }}>
    <div className={inter.className} style={{ background: '#fafafa', minHeight: '100vh', width: '100vw' }}>
      
      <Tabs onChange={fireRefetch} className={inter.className} tabBarStyle={{background: 'white'}}
      tabBarExtraContent=
      {{
      'left':<Image alt='' width={27} style={{margin:'1vw 8vw 0.8vw 2vw'}} src={logo}/>, 
      'right':<Row> <Typography style={{color: '#aeaeae'}}>{user?.email}</Typography> <Link style={{marginRight:'3vw', marginLeft:'5vw'}} href="/api/auth/logout"
      >Log out</Link> </Row>
      }} 
      style={{width: '100vw', }} 
      defaultActiveKey="1" 
      items={items} />
     
    </div>
    </ConfigProvider>:
    <main className={styles.main}>
    <main className={styles.main}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    </main>
    </main>
  );
};

export default DashboardPage;