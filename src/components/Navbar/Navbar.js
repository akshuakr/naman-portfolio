"use client";

// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    // const router = useRouter();
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <Link href="/">
                <div className={styles.logo}>
                    <Image
                        src="logos/naman-logo.svg"
                        alt="Naman Don"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
            </Link>
            <div className={styles.navLinksConatiner}>
                <Link href="/selectedwork">
                    <div
                        className={`${styles.navLink} ${
                            pathname === "/selectedwork" ? styles.active : ""
                        }`}
                    >
                        Selected Work
                    </div>
                </Link>
                <Link href="/life">
                    <div
                        className={`${styles.navLink} ${pathname === "/life" ? styles.active : ""}`}
                    >
                        Life
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
