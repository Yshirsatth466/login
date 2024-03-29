import React from 'react'

export default function FORM(props) {
  return (
    <div className='form'>
      <form >
       name: <input type="text"className='text' placeholder='name'/><br/>
       <br/>
        pass:<input type="password"className="pass" placeholder='password'/><br/>
        <br/>
        <input type="submit"  value="submit" id="b1"></input>

        <input type="reset"id="b2"></input>

      </form>
    </div>
  )
}
