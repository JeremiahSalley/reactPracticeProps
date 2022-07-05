import React from 'react'
import Card from './compontent/Card'
import stock1 from './images/stockProfilePic1.jpeg'
import stock2 from './images/stockProfilePic2.jpg'
import stock3 from './images/stockProfilePic3.jpg'

function App() {
  return (
    <div>
      <Card name='jerry' email='jerry@email.com' pic={stock1}/>
      <Card name='merry' email='merry@email.com' pic={stock2}/>
      <Card name='perry' email='perry@email.com' pic={stock3}/>
    </div>
  )
}

export default App
