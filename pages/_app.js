
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/styles/globals.css";

import Container from '@/components/navbar/container';

export default function App({ Component, pageProps }) {



  return (
         <Container>

                <Component {...pageProps} />;
            
          </Container>
       
  )
          
}


