"use client"
import {  TabsProps, Tabs, ConfigProvider } from 'antd';
import logo from '../../assets/logo.png'
import Image from 'next/image';
import Dashboard from './tabs/Dashboard'
import Report from './tabs/Report'
import { Inter } from 'next/font/google'
import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/edge';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

const DashboardPage = () => {

  const { user, error, isLoading } = useUser();
  const router = useRouter();

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
      children: <Dashboard /> ,
    },
    {
      key: '2',
      label: 'Report Injury',
      children: <Report />
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
      'right': <a style={{marginRight:'3vw'}} href="/api/auth/logout"
      >Log out</a> 
      }} 
      style={{width: '100vw'}} 
      defaultActiveKey="1" 
      items={items} />
     
    </div>
    </ConfigProvider>
  );
};

export default DashboardPage;
