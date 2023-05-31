import getAllPosts from '@/lib/getAllPosts'
import getAllUsers from '@/lib/getAllUsers'
import React from 'react'

type Params = {

}

export default function Practise() {
    const usersData: Promise<User[]> = getAllUsers()
    const postsData: Promise<Post[]> = getAllPosts()
  return (
    <div>page</div>
  )
}
