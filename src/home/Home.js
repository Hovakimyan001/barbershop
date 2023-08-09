import React from 'react'
import Whatwedo from '../components/Whatwedo'
import Header from '../components/Header'
import Homesection from './Homesection'
import Homeget from './Homeget'
export default function Home() {
  return (
    <div className='home_container'>
        <Header />
        <Homesection />
        <Homeget />
        <Whatwedo />
    </div>
  )
}
