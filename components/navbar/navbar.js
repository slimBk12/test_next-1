import Link from 'next/link'
import React from 'react'
import styles from '@/components/navbar/navbar.module.css'


export default function Navbar() {
  return (
    <nav className={styles.navbar}>

        <Link href={"/"}      legacyBehavior>
                <a className='navbar-brand mx-4'>Acceuil</a>
        </Link>

        <Link href={"/blog"}      legacyBehavior>
                <a className='navbar-brand mx-4'>Blog</a>
        </Link>

        <Link href={"/contact"}      legacyBehavior>
                <a className='navbar-brand mx-4'>Aller à la page</a>
        </Link>


        <Link href={"/blog/callApi"}      legacyBehavior>
                <a className='navbar-brand mx-4'>Ouvrir API</a>
        </Link>
        
        <Link href={"/blog/callApi/formAddWord"}      legacyBehavior>
                <a className='navbar-brand mx-4'>Add Word to API</a>
        </Link>

        
        
    </nav>
  )
}
