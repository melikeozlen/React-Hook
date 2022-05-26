import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Array = () => {
    const[post ,setPost]=useState({});
    const[error ,setError]=useState();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            setPost(res.data)
            setError("")
        })
        .catch(error=>{
            setPost({})
            setError("Bir hata oluştu.")
        })
    }, [])
  return (
    <div>
    {error? error: post.body}
    </div>
  )
}

export default Array