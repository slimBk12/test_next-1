import React from 'react'

import {useState,useEffect} from 'react'

export default function Index() {

   //va récupérer un mot au chargement du composant, c a d 
   //au chargement de la page sans que le client clique
   //à l'ouverture d ela page, on va voir un mot affichée
  useEffect(() => {getRandomWord()},[] )

  const [state,setState] = useState(false)


  const  getRandomWord = () => {
    fetch('/api/vocapi')//sans rien mentionné, ca va étre la méthode GET
    .then(response => response.json())
    .then(data => setState(data))
  }

  // alternative a useState
  // let state = null; // Variable pour stocker l'état
  // const getRandomWord = () => {
  //   fetch('/api/vocapi')
  //     .then(response => response.json())
  //     .then(data => {
  //       state = data; // Mettre à jour la variable d'état
  //       // Réfléchir à la façon dont vous souhaitez gérer
  //       // le rendu après la mise à jour de l'état
  //     });
  // }



  let randomWord;
  if(state){
    const array = state.englishList[0].data;
    randomWord  = array[Math.floor(Math.random() * array.length)].en;
  }


  console.log(randomWord)
  return (
      
      <div className="text-center">
        
            <h2>Mot au Hazard</h2>
            <button className="btn btn-primary" 
            onClick={getRandomWord}>Get random word</button>
            <h2>{randomWord}</h2>
            <br></br>
            <h6>l&apos;affichage d&apos;un mot à l&apos;ouverture est grace à useEffect</h6>
      </div>
  )
}


/* lla fonction getRandomWord() : 
   je peux la définir à l'intérieur ou à l'extérieur de la
   index, si elle est utilisée uniquement par la fonction index 
   alors on doit la définir à l'intérieur d'elle.
*/

