import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
  return (
    <div className='bgcolor text-white text-3xl p-4 m-2 '>User: {userid}</div>
  )
}

export default User