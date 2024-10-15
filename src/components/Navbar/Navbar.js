import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="logos/naman-logo.svg" alt="Naman Don" width={40} height={40} priority />
            </div>
            <div className={styles.navLinksConatiner}>
                <div className={styles.navLink}>Selected Work</div>
                <div className={styles.navLink}>Life</div>
            </div>
        </div>
    );
};

export default Navbar;
