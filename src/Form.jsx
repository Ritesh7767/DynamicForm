import React from 'react'

    const Form = ({name, placeholder, key, hobbies}) => {
    
    const handleChange = event => {
        hobbies.current = {...hobbies.current, [event.target.name] : event.target.value}
    }
  return (
        <input type="text" name={name} placeholder={placeholder} key={key} onChange={e => handleChange(e)}/>
  )
}

export default Form