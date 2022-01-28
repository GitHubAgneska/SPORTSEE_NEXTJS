import Image from 'next/image'
import NavMain from './Nav_main'
import styles from '../styles/Header.module.css'


const Header = () => {

    return(
        <div className={styles.headerWrapper}>
            <header className={styles.styledHeader}>
                <div className={styles.mainLogoWrapper}>
                <Image className={styles.mainLogo}
                    src="/logos/logo_main.png"
                    alt="sportsee logo"
                    height={122} // Desired size with correct aspect ratio
                    width={356} // Desired size with correct aspect ratio
                />
                </div>
                <NavMain />
            </header>
        </div>
    )
}
export default Header