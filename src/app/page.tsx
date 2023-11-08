import Image from 'next/image'
import styles from './page.module.css'
import { Button, Typography } from 'antd'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
     <main className={styles.main}>
      <div>
        <Typography style={{fontSize: '1.8vw', fontWeight: '500'}} className={inter.className}>track injuries<br/> the smart way</Typography>
        <Button className={inter.className} style={{background: '#349D3E', marginTop: '25vh', padding: '1.8vh 2vw', fontWeight:'500', fontSize: '1vw', height:'auto'}}  type='primary' size='large'>Get Started</Button> 
        <Typography style={{fontSize: '0.95vw', marginTop: '7vh', textDecoration: 'underline', fontWeight: '500'}} className={inter.className}>Sign In</Typography>
      </div>
      <div>
      <Typography style={{fontSize: '0.95vw',color: '#AEAEAE', fontWeight: '400'}} className={inter.className}>some text would go here </Typography>
     
        <img style={{ marginTop: '3vh', width:'30vw', borderRadius:'1vw'}} src="https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </main>
    </main>
  )
}
