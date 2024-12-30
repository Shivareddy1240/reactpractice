import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './useState/useStatePractice'
import Advanced from './useState/useStateAdvanced'
import MyExample from './useState/useStateExample1'
import SecondExample from './useState/useStateExample2'
import Example3 from './useState/useStateExample3'

function App() {
  return (
    <>
    <div className='app'>
      <h1>React Hooks</h1>
      <Index/>
      <Advanced />
      <MyExample />
      <SecondExample/>
      <Example3/>
      </div>
    </>
  )
}
export default App
