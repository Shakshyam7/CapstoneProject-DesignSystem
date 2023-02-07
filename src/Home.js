import React from 'react'
import Button from './Components/Buttons/Button.js'
import Card from './Components/Card/Card.js'
import Textfield from './Components/Textfield/textfield'
import Footer from './Components/Footer.js'
import './Home.css'
import Form from './Components/Form/Form.js'

function Home() {
  return (
  <>
  <div className='home'>
    <h2>Buttons</h2>
    <Button name={'Button-P'} class={'button__primary'}/>
    <Button name={'Button-S'} class={'button__secondary'}/>
    <Button name={'Button-T'} class={'button__text'}/>
    <h2 >Card</h2>
    <Card />
    <h2>Textfield</h2>
    <Textfield name={'label__textfield'} class={'textfield'} text={'Textfield'} type={"text"}/>
    <Textfield name={'label__textfield'} class={'textfield__focus'} text={'Textfield Active'} type={"text"}/>
    <Textfield name={'label__textfield-error'}class={'textfield__error'} text={'Textfield Error'} type={"text"}/>
    <Textfield name={'label__textfield-disabled'} class={'textfield__disabled'} property={"true"} text={'Textfield Disabled'} type={"text"}/>
    <Form />
    <Footer />
  </div>  
  </>
  )
}

export default Home