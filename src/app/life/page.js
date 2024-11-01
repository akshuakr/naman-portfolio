import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";
import Footer from "@/components/Footer/Footer";

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <Navbar />
                <div className={styles.bottomContainer}>
                    <Image
                        src="/images/life/namanDonn.jpeg"
                        alt="Naman Don"
                        width={958}
                        height={536}
                        priority
                    />
                    <div className={styles.aboutNamanLifeConatiner}>
                        <div style={{ color: "#FAFAFA" }}>
                            Hey, welcome to my digital abode. Nice to meet you!
                        </div>
                        <div className={styles.aboutNamanLifeDesc}>
                            <div>
                                Hey there! I'm Naman Bhateja, a passionate UX/UI designer with over
                                a year of experience crafting seamless digital experiences across
                                web, mobile, and AI-driven platforms.
                            </div>
                            <div>
                                Fuelled by a personal drive for creating intuitive solutions, I
                                specialize in designing user-centric interfaces that not only solve
                                problems but also enhance the joy of everyday interactions.
                            </div>
                            <div>
                                Outside of work, you'll find me exploring new recipes in the kitchen
                                🧑‍🍳, baking delicious treats 🍪, getting lost in a great book 📖,
                                experimenting with paint 🎨, lifting weights 🏋️, or indulging in a
                                binge-worthy series or movie (especially cartoons!) 🎥. Oh, and I
                                can never resist window-shopping for sneakers.
                            </div>
                        </div>
                    </div>
                    <div className={styles.photoDumpContainer}>
                        <div className={styles.photoDumpHeading}>Photo Dump</div>
                        <div className={styles.photoDumpDesc}>
                            Here are some photos I captured with love 😤 and I’m excited to share
                            them with you!
                        </div>
                    </div>
                    <div className={styles.photos}>
                        <div className={styles.photosColOne}>
                            <Image
                                src="/images/life/photodump/1.png"
                                alt="Naman Don"
                                width={480}
                                height={409}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/2.png"
                                alt="Naman Don"
                                width={480}
                                height={285}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/3.png"
                                alt="Naman Don"
                                width={480}
                                height={491}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/4.png"
                                alt="Naman Don"
                                width={480}
                                height={217}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/5.png"
                                alt="Naman Don"
                                width={480}
                                height={353}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/6.png"
                                alt="Naman Don"
                                width={480}
                                height={270}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/7.png"
                                alt="Naman Don"
                                width={480}
                                height={691}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/8.png"
                                alt="Naman Don"
                                width={480}
                                height={514}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/9.png"
                                alt="Naman Don"
                                width={480}
                                height={431}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/10.png"
                                alt="Naman Don"
                                width={480}
                                height={640}
                                loading="lazy"
                            />

                            {/* <img src="/images/life/photodump/1.png" alt="description"></img> */}
                        </div>
                        <div className={styles.photosColTwo}>
                            <Image
                                src="/images/life/photodump/11.png"
                                alt="Naman Don"
                                width={480}
                                height={854}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/12.png"
                                alt="Naman Don"
                                width={480}
                                height={639}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/13.png"
                                alt="Naman Don"
                                width={480}
                                height={640}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/14.png"
                                alt="Naman Don"
                                width={480}
                                height={632}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/15.png"
                                alt="Naman Don"
                                width={480}
                                height={563}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/16.png"
                                alt="Naman Don"
                                width={480}
                                height={640}
                                loading="lazy"
                            />
                            <Image
                                src="/images/life/photodump/17.png"
                                alt="Naman Don"
                                width={480}
                                height={640}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;
