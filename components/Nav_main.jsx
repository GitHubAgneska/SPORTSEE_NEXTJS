import styles from '../styles/Nav_main.module.css'
import Link from 'next/link'


const NavMain = () => {

    return (
        <div className={styles.styledNavWrapper}>
            <nav className={styles.styledNav}>
                <Link className={styles.styledLink} href="/user/userProfile/18">Accueil</Link>
                <Link className={styles.styledLink} href="/user/userProfile/18">Profil</Link>
                <Link className={styles.styledLink} href="/user/userProfile/18">Réglages</Link>
                <Link className={styles.styledLink} href="/user/userProfile/18">Communauté</Link>
            </nav>
        </div>
    )
}
export default NavMain