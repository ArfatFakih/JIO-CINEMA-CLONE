import React from 'react'
import styles from '../header/Header.module.css'
import jcLogo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import audioIcon from '../../assets/voice-search.svg'
import jioIcon from '../../assets/jio-logo.png'

const Header = () => {

    const navLinks = ["Home","Sports","Movies","TV Shows","More"];

  return (
    <>
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <div className={styles.logo}>
                    <img src= {jcLogo} alt="jio-cinema-logo" />
                    <div className={styles.premium}>
                        <img src={crown} alt="crown" />
                        <p>Go Premium</p>
                    </div>
                </div>

                <ul className={styles.navLinks}>
                    {
                    navLinks.map((link)=>{
                        return <li className={styles.navLink}>{link}</li>
                    })
                    }
                </ul>
            </nav> 

            <div className={styles.search}>
                <div className={styles.searchBox}>
                    <div className={styles.headerIcon}>
                        <img src={searchIcon} alt="search-icon" />
                    </div>
                    <input type="text" className={styles.searchInput} placeholder='Movies, Shows and more' />
                    <div className={styles.headerIcon}>
                        <img src={audioIcon} alt="audio-icon" />
                    </div>
                </div>
                <img src={jioIcon} alt="icon" className={styles.userIcon}/>
            </div> 
        </header>
    </>
  )
}

export default Header