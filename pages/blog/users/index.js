import Link from 'next/link';
import React from 'react'

export default function Index({users}) {
  return (
    <div>
        <h1>Liste des utilisateurs</h1>
         {
            users.map(elem => (
                
                   <div key={elem.id}>
                    
                       <h2>{elem.name}</h2>
                       <h3>{elem.username}</h3>
                       <h4>{elem.email}</h4>  
                        <Link  href={`users/contact/${elem.id}`}  legacyBehavior>
                            <a>Contacter</a>
                        </Link>
                       <br></br>                 
                   </div> 
         ) )
         }
    </div>
  )
}



export async function getStaticProps(){

    const usersApi = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersJson = await usersApi.json()

     
    //on doit retiourner un objet, cet objet va contenir un objet ayant l'attribut props qui est un objet
    //au final on va retourner un objet imbriquée dans un autre objet
    return{props: {  users  :  usersJson   } }

}