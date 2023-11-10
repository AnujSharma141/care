"use client"
import {  TabsProps, Tabs, ConfigProvider, Space, Typography, Row } from 'antd';
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
  }, [user, router]);


  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Dashboard',
      children: <Dashboard userState={data? data.injuries: userState}/> ,
    },
    {
      key: '2',
      label: 'Report Injury',
      children: <Report call={refetch} setUserState={setUserState} userState={userState}/>
    },
  ];



  return (
     <ConfigProvider theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        fontFamily: 'Inter'
      },
    }}>
    <div  style={{ background: 'white', minHeight: '100vh', width: '100vw' }}>
      
      <Tabs className={inter.className} 
      tabBarExtraContent=
      {{
      'left':<Image alt='' width={27} style={{margin:'1vw 8vw 0.8vw 2vw'}} src={logo}/>, 
      'right':<Row> <Typography style={{color: '#aeaeae'}}>{user?.email}</Typography> <a style={{marginRight:'3vw', marginLeft:'5vw'}} href="/api/auth/logout"
      >Log out</a> </Row>
      }} 
      style={{width: '100vw'}} 
      defaultActiveKey="1" 
      items={items} />
     
    </div>
    </ConfigProvider>
  );
};

export default DashboardPage;