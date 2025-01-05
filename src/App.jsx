import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';




function App() {
  const [bgColor, setBgColor] = useState('black')

  const changeColor=(color) => {
    setBgColor(color)
  }

  return (
    <>
          
          

     <div className='d-flex justify-content-center align-items-center gap-3 ' style={{backgroundColor:bgColor,minHeight:'100vh'}}>
       
     <Button onClick={()=>changeColor('blue')} variant="primary">Primary</Button>
      <Button onClick={()=>changeColor('grey')}  variant="secondary">Secondary</Button>
      <Button onClick={()=>changeColor('green')}  variant="success">Success</Button>
      <Button onClick={()=>changeColor('yellow')}  variant="warning">Warning</Button>
      <Button onClick={()=>changeColor('red')}  variant="danger">Danger</Button>
      <Button onClick={()=>changeColor('white')}  variant="light">light</Button>
     
     </div>
      
      
     
    </>
  )
}

export default App
