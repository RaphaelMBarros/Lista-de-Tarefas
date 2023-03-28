import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header' 
import "./App.css"
import Card from './Components/Cards/Cards'



function App() {
  return (
    <div className='App'>
      <Header />
      <section>
        <Card name="Planejamento" />
        <Card name="A Fazer"/>
        <Card name="Fazendo"/>
        <Card name="Feito"/>

      </section>
    </div>
  )

  }

export default App
