"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "@/styles/Auth.module.scss";
import { authSchema, AuthFormValues } from "@/validation/authSchema";

export default function AuthPage() {
  const [form, setForm] = useState<AuthFormValues>({ phone: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleLogin = async () => {
    const result = authSchema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message || "خطا در اعتبارسنجی");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
      const data = await res.json();
      const user = data.results[0];
      localStorage.setItem("user", JSON.stringify(user));
      auth.setUser(user);
      router.push("/dashboard");
    } catch (e) {
      setError("خطا در ورود. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>ورود</h1>
      <Input
        label="شماره تلفن"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="مثلاً 09123456789"
        error={error ?? undefined}
        autoComplete="tel"
        disabled={loading}
      />
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? "در حال ورود..." : "ورود"}
      </Button>
    </div>
  );
}
