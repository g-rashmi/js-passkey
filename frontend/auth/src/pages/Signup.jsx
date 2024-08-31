import React from 'react'
import { useState } from 'react'
function Signup() {
  const username=useState('');
  const pass=useState(''); 
  return (
    <div>
      <input type="text"></input>
      <input type="password"></input>
      <button type="submit">Register</button>
    </div>
  )
}

export default Signup
