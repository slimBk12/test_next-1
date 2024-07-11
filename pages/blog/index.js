import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";
export default function index(props) {
  console.log(props);
  return (
    <>
      <div className="container px-4 py-5">
        <h1 className="text-center">Bienvenue sur le blog</h1>
        <p className="text-center">Voici les articles</p>
        <div className="row g-3 mt4">
          {props.articles.map((article) => (
            <div key={uuidv4()} className="col 12 col md 6 col-xl-4">

              <div className="card h-100 shadow-sm">
                <div className="carbody">

                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">
                    {article.body.slice(0, 20) + "..."}
                  </p>

                  
                  <Link href={`/blog/articles/${article.id.toString()}`}   legacyBehavior>
                    <a className="card-link">lire cet article</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  // on va attendre que l'API répond
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();
  //il faut maintenant retourner un objet
  return {
    props: {
      articles,
    },
  };
}

