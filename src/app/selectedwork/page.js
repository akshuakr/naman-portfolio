import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.scss";

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <Navbar />
                <div className={styles.contentSection}>
                    <div className={styles.introBox}>
                        <div className={styles.introHeading}>Selected Work</div>
                        <div className={styles.introDesc}>
                            Showcasing my work that reflects my journey as a self-taught designer.
                        </div>
                    </div>
                    <Image
                        src="/images/selectedwork/ordo.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        priority
                    />
                    <Image
                        src="/images/selectedwork/mailchimp.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                    <Image
                        src="/images/selectedwork/indigo.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                    <Image
                        src="/images/selectedwork/swiggy.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                    <Image
                        src="/images/selectedwork/freecharge.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                    <Image
                        src="/images/selectedwork/duolingo.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                    <Image
                        src="/images/selectedwork/Hobbyr.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                    <Image
                        src="/images/selectedwork/salad.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                    <Image
                        src="/images/selectedwork/typegpt.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                    <Image
                        src="/images/selectedwork/marvel.png"
                        alt="Naman Don"
                        width={480}
                        height={480}
                        // priority
                    />
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Page;
