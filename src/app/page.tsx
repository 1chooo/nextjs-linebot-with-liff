"use client";

import { useEffect } from "react";

import { LiffProvider, useLiff } from "./liff/liff-provider";
import styles from "@/styles/home.module.css";

const HomeContent = () => {
  const { liff, liffError, userId, isLoggedIn, login, logout } = useLiff();

  useEffect(() => {
    if (liff && isLoggedIn) {
      console.log("User is logged in");
    }
  }, [liff, isLoggedIn]);

  if (liffError) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>LIFF init failed.</h1>
          <p>
            <code>{liffError}</code>
          </p>
        </main>
      </div>
    );
  }

  if (!liff) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Loading LIFF...</h1>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>LIFF APP</h1>
        <p>LIFF init succeeded.</p>
        <p>LIFF ID: {liff.id}</p>
        {isLoggedIn ? (
          <>
            <p>User ID: {userId}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </main>
    </div>
  );
};

export default function Home() {
  return (
    <LiffProvider>
      <HomeContent />
    </LiffProvider>
  );
}
