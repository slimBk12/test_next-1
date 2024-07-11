import Link from 'next/link'


export default function Home() {
  return (
    <div className="container px-4 pt-5">
     
           <h1>Bienvenue sur Code.io</h1>
            <span>Le blog de développement</span>
            <div className="row mt-5">
                <div className="col-12 col-sm-6">
                    <div className='card w-100 h-100'>
                      <div className="card-body">
                        <h5 className="card-title">Faites un tour vers la liste de membres</h5>
                        <h6 className="card-subtitle mb-2 text-muted"> Maximiser votre culture Web</h6>
                        <p>rencontrer des devs</p>   

                          <Link href="/blog/users">
                                Découvrer la liste de membres
                          </Link>

                      </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className='card w-100 h-100'>
                    <div className="card-body">
                      <h5 className="card-title"> Lisez les articles</h5>
                      <h6 className="card-subtitle mb-2 text-muted"> Maximiser votre culture Web</h6>
                      <p>Chaque auteur tente de vous apporter le plus de valeur par article</p>  

                        <Link href="/blog">
                            visiter le blog
                        </Link>
                        
                    </div>
                  </div>
                </div>   
            </div>  
        </div>
  );
}
