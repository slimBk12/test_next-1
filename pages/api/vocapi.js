// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';  // Module pour la lecture, l'écriture, etc. des fichiers
import path from 'path';  // Module pour manipuler les chemins de fichier

// Gestionnaire d'API
export default function handler(req, res) {
  // Vérifie si la méthode de requête est GET
  if (req.method === "GET") {
    // Crée le chemin complet vers le fichier listes.json
    const filePath = path.join(process.cwd(), 'data', 'listes.json');

    try {
      // Lit le contenu du fichier listes.json
      const fileData = fs.readFileSync(filePath, 'utf8');

      // Parse le contenu du fichier en un objet JavaScript
      const data = JSON.parse(fileData);

      // Envoie l'objet en réponse à la demande avec le statut 200
      res.status(200).json(data);
    } catch (error) {
      // En cas d'erreur, envoie une réponse avec le statut 500 et le message d'erreur
      res.status(500).json({ error: 'Failed to read data file' });
    }
  } else if(req.method === "POST"){

    // dans le front on a 
    // transformé notre Objet en JSON,
    // donc on doit faire la récupération depuis body
    // body    : JSON.stringify(newWord),
    const enWord = req.body.newMotFr;
    const frWord = req.body.newMotEn;

    // on va mettre : (anciennes données de listes.json) + (nouveau donnée recus du Front)
    // dans un objet data
    // par la suite on va ecrire cet objet data dans le fichier listes.json

    const newWordToAddinFile = {
      en:enWord,
      fr:frWord
      //on a choisit en et fr car dans le fichier listes.json
      //les données sont sous cette forme:
      /*
          {
            "en": "house",
            "fr": "maison"
          },
      */
    }
    // 'data'  est le nom du dossier du fichier listes.json
    const filePath = path.join(process.cwd(), 'data', 'listes.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    //on va créer un objet data de type JS à partir de ce fichier.json
    // donc on doit  convertir le JSON en JS avec JSON.parse
    const dataJSfromFile = JSON.parse(fileData)

    //on peut manipuler dataJSfromFile en JavaScript
    //le fichier json de base contient "englishList": [{"name":"words", "data": [...
    //on va prendre le premier element de ce tableau qui est déja un tableau d'objet 
    //dont chaque objet admet la clé Key
    //.push( ) permet d'ajouter à la fin d'une liste
    dataJSfromFile.englishList[0].data.push(newWordToAddinFile)

    //on va remplacer l'ancien fichier , mais on doit convertir les données en JSON
    fs.writeFileSync(filePath,JSON.stringify(dataJSfromFile))

    //envoyer un message success
    res.status(201).json({message : "Success !"})
  }
  
  else {
    // Si la méthode de requête n'est pas GET, envoie une réponse avec le statut 405 (Method Not Allowed)
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
