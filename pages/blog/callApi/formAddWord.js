import React from 'react'
import { useRef, useEffect, useStae } from 'react'

export default function FormAddWord() {


    const refMotFr = useRef()
    const refMotEn = useRef()

    //fonction fléchéprenant un paramétre e
    const hundleSubmit = e => {

        //e : C'est une convention pour désigner 
        //l'objet Event qui est passé à la fonction 
        //lorsque l'événement est déclenché
        //Ici, il est utilisé pour représenter l'événement de soumission du formulaire.
        //instruction utilisée pour empêcher le rechargement de la page 
        //lorsque le formulaire est soumis
        //le client ne va pas voir un refresh sur la pageWeb dans le navigateur
        e.preventDefault()


        //on va créer l'objet qu'on va envoyer, 
        //mais on va l'envoyer sous forme JSON
        const newWord = {
            newMotFr: refMotFr.current.value,
            newMotEn: refMotEn.current.value,
        }


        fetch("/api/vocapi", {
            method: "POST",
            //transformer notre Objet en JSON
            body: JSON.stringify(newWord),
            //indique que le contenu envoyé est en format JSON.
            headers: { "Content-Type": "application/json" }
        }
        ).then(response => response.json())
            //response va référence la réponse HTTP renvoyée par l'API, on doit donc
            //extraire le corps
            //de cette réponse et le convertir en JSON ( car nous, on a besoin 
            //du coprs de la réponse HTTP
            //et non pas des entéte et autre données.
            //Une fois que les données JSON ont été récupérées avec succès, 
            //cette partie du code est exécutée.
            //data contient les données JSON renvoyées par l'API.
            //response, data sont les nom arbitraire qu'on donne a l'argument de then()
            //data ici représente le corps (le Body) de la réponse HTTP depuis l'API
            // que l'API va ecrire dans res.status(201).json({message : "......"})
            .then(data => { console.log("====>",data); })
            .catch(error => { console.error('Erreur lors de la requête :', error) });

        //vider les champs du formulaire 
        refMotFr.current.value = "";
        refMotEn.current.value = "";
    }


    return (
        <div className="text-center">
            <h5> Ajouter un nouveau mot with API</h5>

            <form onSubmit={hundleSubmit}>
                <p>Mot Francais <input type="text" ref={refMotFr} /></p>
                <p>Mot Anglais  <input type="text" ref={refMotEn} /></p>
                <p><input type="submit" value="confirm" /></p>
            </form>
        </div>
    )
}
