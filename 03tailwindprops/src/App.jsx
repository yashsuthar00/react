import { useState } from 'react' 
import styled from 'styled-components';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='mb-10'>Testing Tailwind</h1>
      <Card username = "YASH SUTHAR" btnTxt = "Click Me"/>
      <Card username = "YASH PILOT"/>
    </>
  )
}
export default App
