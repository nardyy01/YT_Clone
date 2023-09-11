import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={220} height={50}
                    src="/YouNoob-logo.svg" alt="YouNoob Logo"
                />
            </Link>
        </nav>
    )
}