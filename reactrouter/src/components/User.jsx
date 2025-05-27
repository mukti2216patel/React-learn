import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const user = useParams();
    // console.log(username)
  return (
    <div className='bg-gray-500 w-full text-white text-center text-3xl p-2'>
        User : {user.username}
    </div>
  )
}

export default User
