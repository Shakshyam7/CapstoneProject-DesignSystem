import React from 'react'
import Textfield from '../Textfield/textfield'
import Button from '../Buttons/Button'
import './Form.css'

function Form() {
  return (
    <>
      <div className='form__container'>
        <div className='form__header'>
            <h6>Fill out the form below and leave us a messege!</h6>
            
                <div className='form__text1'>
                <Textfield name={'label__textfield'} class={'textfield'} placeholder={'Firstname'} />
                <Textfield name={'label__textfield'} class={'textfield'} placeholder={'Lastname'}/>
                </div>
                <div className='form__text2'>
                <Textfield name={'label__textfield'} class={'textfield'} placeholder={'Email'}/>
                </div>
                <div className='form__text3'>
                <textarea className='label__textarea' placeholder='Message'></textarea>
                </div>
                <div className='button__send'>

                <Button class={'button__primary'} name = {'SEND'}  />
                </div>
        </div>

      </div>
    </>
  )
}

export default Form