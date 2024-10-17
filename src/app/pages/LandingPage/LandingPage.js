"use client";

import Image from "next/image";
import styles from "./LandingPage.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

const LandingPage = () => {
    const [localTime, setLocalTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const ampm = hours >= 12 ? "PM" : "AM";
            const formattedHours = hours % 12 || 12;
            const formattedTime = `${formattedHours}:${minutes} ${ampm} local time`;
            setLocalTime(formattedTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    const projectsData = [
        {
            title: 'Goodspace: Find work hire talent',
            description: 'Bring ancient Vedic wisdom to your fingertips, offering personalized spiritual guidance, mantras, meditation, and rituals for holistic growth.',
            imageSource: '/images/goodspace-project-hd.png',
        },
        {
            title: 'Veda Smriti: World Vedic Wisdom',
            description: 'Bring ancient Vedic wisdom to your fingertips, offering personalized spiritual guidance, mantras, meditation, and rituals for holistic growth.',
            imageSource: '/images/veda-smirti.png',
        },
        {
            title: 'Goodspace : Auto Interview',
            description: 'An AI-powered interviewer that conducts structured interviews consistently, assessing both technical and soft skills objectively.',
            imageSource: '/images/gs-interview.png',
        },
        {
            title: 'Green Genie',
            description: 'Green Genie aims to provide a convenient and reliable service that delivers high-quality, fresh, and exotic fruits and vegetables straight to your doorsteps.',
            imageSource: '/images/green-genie.png',
        },
    ]


    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.heroContainer}>
                <div className={styles.heroTop}>
                    <div className={styles.heroTime}>{localTime}</div>
                    <div className={styles.heroName}>Hello, I’m Naman Bhateja</div>
                    <div className={styles.heroAbout}>
                        Your friendly neighbourhood product designer based in <br />
                        Delhi, India. I enjoy crafting exceptional digital <br />
                        interfaces that offer delightful and intuitive experiences.{" "}
                    </div>
                </div>
                <div className={styles.heroMiddle}>
                    <div className={styles.heroWorkedWithText}>I have worked with</div>
                    <div className={styles.heroWorkedWithLogos}>
                        <Image
                            src="logos/goodspace-blue.svg"
                            alt="GoodSpace Logo"
                            width={135}
                            height={30}
                            priority
                        />
                        <Image
                            src="logos/kloudrac.svg"
                            alt="kloudrac"
                            width={166}
                            height={30}
                            priority
                        />
                        <Image
                            src="/logos/bvcoe.png"
                            alt="bvcoe"
                            width={114}
                            height={50}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.heroBottom}>
                    <div className={styles.heroResume}>
                        Resume
                        <Image
                            src="icons/download-black.svg"
                            alt="Download"
                            width={17}
                            height={17}
                            priority
                        />
                    </div>
                    <div className={styles.heroSocial}>
                        <div className={styles.heroSocialCircle}>
                            <Image
                                src="icons/twitter-white.svg"
                                alt="Twitter"
                                width={24}
                                height={19}
                                priority
                            />
                        </div>
                        <div className={styles.heroSocialCircle}>
                            <Image
                                src="icons/linkedin-white.svg"
                                alt="Twitter"
                                width={17}
                                height={17}
                                priority
                            />
                        </div>
                        <div className={styles.heroSocialCircle}>
                            <Image
                                src="icons/instagram-white.svg"
                                alt="Twitter"
                                width={19}
                                height={19}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.projectsContainer}>
                Projects
                <div className={styles.projects}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
