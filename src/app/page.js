import Image from "next/image";
import LandingPage from "./pages/LandingPage/LandingPage";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles["main-content"]}>
                <LandingPage />
            </div>
        </div>
    );
}
