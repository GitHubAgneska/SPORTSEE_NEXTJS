import Image from 'next/image'
import styles from '../styles/Nav_side.module.css'

const NavSide = () => {
    
    return(
        <div className={styles.styledNavWrapper}>
            <nav className={styles.styledNavSide}>
                <ul className={styles.styledUl}>
                    <li>
                        <a href="/">
                        <Image className={styles.sideIcon}
                            src='/icons/icon_yoga.png'
                            alt="yoga icon"
                            height={192} // Desired size with correct aspect ratio
                            width={192} // Desired size with correct aspect ratio
                        />
                        </a>
                    </li>
                    
                    <li>
                        <a href="/">
                            <Image className={styles.sideIcon} 
                                src='/icons/icon_swim.png'
                                alt="swim icon"
                                height={192} // Desired size with correct aspect ratio
                                width={192} // Desired size with correct aspect ratio
                            />
                        </a>
                    </li>

                    <li>
                        <a href="/">
                        <Image className={styles.sideIcon} 
                            src='/icons/icon_bike.png'
                            alt="bike icon"
                            height={192} // Desired size with correct aspect ratio
                            width={192} // Desired size with correct aspect ratio
                        />
                        </a>
                    </li>

                    <li>
                        <a href="/">
                        <Image className={styles.sideIcon} 
                            src='/icons/icon_weight.png'
                            alt="weight icon"
                            height={192} // Desired size with correct aspect ratio
                            width={192} // Desired size with correct aspect ratio
                        />
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.copyrightWrapper}>
                <p className={styles.styledP}>Copyright SportSee 2020</p>
            </div>
        </div>
    )
}
export default NavSide