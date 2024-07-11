import React from 'react'
export default function Slug({article}) {

  console.log(article)
  return (
    <div>
        <h1>{article.title}</h1>
        <h5>{article.body}</h5>
    </div>
  )
}


export async function getStaticProps(context){

  // le slug courant est retrouvable dans  context.params.slug 
  //ce slug presente l'id de l'article que le client veut afficher

  const slugCourant = context.params.slug

  // on doit placer les données de cet raticle dans props 
  //afin de l'envoyer vers la fonction composant
  
  const articleFromApi = await fetch (`https://jsonplaceholder.typicode.com/posts/${slugCourant}`)
  const articleCourantJson = await articleFromApi.json() 
   return {props:{article  : articleCourantJson }}

}


export async function getStaticPaths(){

    const articlesApi = await fetch('https://jsonplaceholder.typicode.com/posts')
    const articlesJson   = await articlesApi.json()
    const paths = articlesJson.map( elem =>  (
      {params: {slug : elem.id.toString() } }
    ) )
    return { paths,fallback : false}

}

