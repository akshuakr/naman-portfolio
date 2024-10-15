import Image from "next/image";
import styles from "./LandingPage.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Footer />
            {/* <div className={styles.text}>This is Landing Page</div> */}
        </div>
    );
};

export default LandingPage;
