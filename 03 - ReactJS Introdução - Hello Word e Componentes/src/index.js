import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import './index.css'

function soma (a, b)
{
  alert(a + b) 
}

function App()
{
  return (
    <div className='App'>
      Hello World
      <Button onClick={() => soma(10, 20)} name="Luciano da Cruz Júnior" />
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(40, 20)} name="Dayana Rangel de Souza da Cruz" />      
        </ComponentB>
      </ComponentA>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


