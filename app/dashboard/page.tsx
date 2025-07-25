"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import styles from "@/styles/Dashboard.module.scss";

export default function Dashboard() {
  const auth = useAuth();
  const user = auth?.user;
  const router = useRouter();
  
  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) router.replace("/auth");
    }
  }, [user, router]);

  return (
    <div className={styles.container}>
      <h1>
        Welcome to the Dashboard{" "}
        <span>
          {user?.name.title} {user?.name.first} {user?.name.last}
        </span>{" "}
      </h1>
    </div>
  );
}
