import React, { useRef, useState } from 'react'
import Form from './Form'
import './App.css'

const App = () => {

    let [count, setCount] = useState(0)
    let arr = useRef([])
    let hobbies = useRef({})

    const handleClick = (flag) => {

        if(flag){
            setCount(prev => prev + 1)
            arr.current.push(<Form placeholder='Enter your hobbies' name={count + 1} key={count} hobbies={hobbies}/>)
        }
        else{
            if(count > 0){
                setCount(count - 1)
                arr.current.pop()
            }
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log("this is submit")
        console.log(hobbies)
    }

  return (
    <>
    <h1>Some Great Hobbies</h1>
    <form onSubmit={e => handleSubmit(e)}>
        <h2>Enter Your Hobbies</h2>
        <Form name="main" placeholder="Enter your hobby" hobbies={hobbies}/>
        {arr.current.map(ele => ele)}
        <button onClick={() => handleClick(true)} >Add more hobbies</button>
        <button onClick={() => handleClick(false)}>Reduce hobby field</button>
        <input type="submit" className='submit'/>
    </form>
    </>

  )
}

export default App