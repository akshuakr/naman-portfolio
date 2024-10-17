import Image from "next/image";
import styles from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.projectImage}> */}
            <Image src={props.imageSource} alt="GoodSpace Logo" width={958} height={540} priority />
            {/* </div> */}
            <div className={styles.projectDesc}>
                <div className={styles.projectDescTop}>
                    <div className={styles.projectTitle}>{props.title}</div>
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
                <div className={styles.projectDescBottom}>{props.description}</div>
            </div>
        </div>
    );
};

export default ProjectCard;
