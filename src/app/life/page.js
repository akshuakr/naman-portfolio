import Navbar from "@/components/Navbar/Navbar";
import styles from "./page.module.scss";


const Page = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <Navbar />
            </div>
        </div>
    )
}

export default Page;