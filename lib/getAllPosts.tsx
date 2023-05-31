import React from 'react'

export default async function getAllPosts() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if(!res.ok) throw new Error('failed to load data')
    
  return res.json()
}
