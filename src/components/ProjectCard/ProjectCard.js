import Image from "next/image";
import styles from "./ProjectCard.module.scss";

const ProjectCard = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.projectImage}> */}
            <Image
                src="/images/goodspace-project-hd.png"
                alt="GoodSpace Logo"
                width={958}
                height={540}
                priority
            />
            {/* </div> */}
            <div className={styles.projectDesc}>
                <div className={styles.projectDescTop}>
                    <div className={styles.projectTitle}>Goodspace: Find work hire talent</div>
                    <div className={styles.visitSite}>
                        Visit Site
                        <Image
                            src="icons/arrow-top-right-black.svg"
                            alt="Up Right Arrow"
                            width={20}
                            height={20}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.projectDescBottom}>
                    Green Genie aims to provide a convenient and reliable service that delivers
                    high-quality, fresh, and exotic fruits and vegetables straight to your
                    doorsteps.
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
