'use client'

import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";
import SignIn from "../sign-in/sign-in";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { unsubscribe } from "diagnostics_channel";
import Upload from "./upload/upload";

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        // Cleans up subscription (login) on unmount
        return () => unsubscribe();
    });

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={220} height={50}
                    src="/YouNoob-logo.svg" alt="YouNoob Logo"
                />
            </Link>
            {
                user && <Upload />
            }
            <SignIn user={user} />
        </nav>
    )
}