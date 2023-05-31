import React from 'react'
import Link from 'next/link'
import getAllUsers from '@/lib/getAllUsers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:'Users'
}


export default async function About() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  const content = (
    <section>
      <h2>
        <Link href='/'>Link to HOme page</Link>
      </h2>
      <br />
      {users.map(user => {
        return (
          <>
            <p key={user.id}> <Link href={`/about/${user.id}`}>{user.name}</Link></p >
            <br />
          </>
        )
      })}
    </section >
  )
return content
}
