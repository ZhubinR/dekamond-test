"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "@/styles/Auth.module.scss";

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const router = useRouter();

  const validatePhone = (phone: string) => /^09\d{9}$/.test(phone);

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError("شماره تلفن نامعتبر است.");
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    const data = await res.json();
    const user = data.results[0];
    localStorage.setItem("user", JSON.stringify(user));
    if (auth?.setUser) {
      auth.setUser(user);
    }
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h1>ورود</h1>
      <Input
        label="شماره تلفن"
        value={phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPhone(e.target.value)
        }
        placeholder="مثلاً 09123456789"
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button text="ورود" onClick={handleLogin} />
    </div>
  );
}
