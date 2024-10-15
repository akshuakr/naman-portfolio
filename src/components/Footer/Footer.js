import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                विषय पर वापस
                <Image
                    src="icons/up-arrow-white.svg"
                    alt="Naman Don"
                    width={22}
                    height={22}
                    priority
                />
            </div>
            <div className={styles.right}>Secert Tab</div>
        </div>
    );
};

export default Footer;
