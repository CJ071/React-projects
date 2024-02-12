import React, { useState ,useEffect} from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
  const data=useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github username :{data.login}
      <img src={data.avatar_url}  />
    </div>
  )
}

export const githubInfoLoad=async()=>{
    const res=await fetch("https://api.github.com/users/CJ071")
    return res.json()
}

export default Github
