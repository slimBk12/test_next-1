import React from 'react'
import { useRouter } from 'next/router'



export default function Slug({contact}) {

console.log(contact)
//affiche : 
//{id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}

  return (
    <div>
      <h1>Contact de l&apos;utilisateur </h1>
      <ul>
          <li>name: {contact.name}</li>
          <li>email: {contact.email}</li>
          <li>phone: {contact.phone}</li>
          <li>website: {contact.website}</li>
        </ul>
    </div>
  )
}




export async function getStaticProps(context) {

  const idUserCourant = context.params.slug 
  const contactApi = await fetch(`https://jsonplaceholder.typicode.com/users/${idUserCourant}`)
  const contactJson = await contactApi.json()
  return { props :{contact : contactJson} }
}

export async function getStaticPaths(){

  const usersApi = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersJson = await usersApi.json()
  const paths = usersJson.map(elem =>({params:{slug:elem.id.toString()}}))

  return{paths,fallback: false} 
}
